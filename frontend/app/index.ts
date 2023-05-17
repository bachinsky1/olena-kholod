
import { createRouter } from 'routerjs'

const router = createRouter()

let currentSortType = Number(localStorage.getItem("currentSortType")) | 1
let currentCategory = Number(localStorage.getItem("currentCategory")) | 1

setState(`/categories/${currentCategory}/${currentSortType}`)

interface ICategory {
    id: number,
    name: string,
    count: number
}

interface IActiveCategory {
    category_id: number,
    count: number,
    date: string,
    description: string,
    id: number,
    name: string,
    price: number,
}

interface IData {
    categories: Array<ICategory>,
    active: Array<IActiveCategory>,
}

interface Dataset {
    name: string,
    description: string,
    price: string,
    date: string,
}

async function fetchData(route: string) {

    const activeCategoryContainer = document.getElementById('goodsContainer')
    if (activeCategoryContainer === null) return

    activeCategoryContainer.innerHTML = ''
    route = window.location.origin + route

    const spinner = document.getElementById('spinner')
    spinner?.setAttribute('style', 'display: flex;')

    const response = await fetch(route)
    spinner?.setAttribute('style', 'display: none !important;')

    if (response.ok) {
        const result = await response.json()
        return result
    } else {
        console.log("HTTP error: " + response.status)
    }
    return []
}

function setState(state: string) {
    const url = window.location.origin + state
    history.pushState(null, '', url)
    router.run()
}

function renderCategories(categories: Array<ICategory>) {
    // Render categories
    const categoriesContainer = document.getElementById('categoriesContainer')
    if (categoriesContainer === null) return

    const div = document.createElement('div')

    div.classList.add('list-group')

    for (const item of categories) {

        const link: HTMLAnchorElement = document.createElement('a')

        link.setAttribute('href', '#')
        link.classList.add(...['list-group-item', 'list-group-item-action'])
        link.innerHTML = item.name + ` (${item.count})`
        link.dataset.category_id = item.id.toString()

        link.addEventListener('click', (e) => {
            if (!(e.target instanceof HTMLAnchorElement)) return
            currentCategory = Number(e.target.dataset.category_id)

            localStorage.setItem("currentCategory", currentCategory.toString())
            localStorage.setItem("currentSortType", currentSortType.toString())
            localStorage.setItem('currentCategory', currentCategory.toString())
            setState(`/categories/${currentCategory}/${currentSortType}`)
        })

        div.appendChild(link)
    }

    categoriesContainer.innerHTML = ''
    categoriesContainer.appendChild(div)
}

function renderFilters() {
    const select = document.getElementById('filter') as HTMLSelectElement

    select.innerHTML = /*html*/`
        <option value="1">Cheaper first</option>
        <option value="2">Alphabetically</option>
        <option value="3">New first</option>
    `
    select.selectedIndex = currentSortType - 1
}

function renderActiveCategory(active: Array<IActiveCategory>) {
    // Render active category
    const activeCategoryContainer = document.getElementById('goodsContainer')
    if (activeCategoryContainer === null) return

    activeCategoryContainer.classList.add('row')
    activeCategoryContainer.classList.add('row-cols-md-4')
    activeCategoryContainer.innerHTML = ''

    for (const item of active) {
        const div = document.createElement('div')
        div.classList.add('col')

        div.innerHTML = /*html*/`
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <p class="card-text">${item.price.toFixed(2)}</p>
                    <p class="card-text"><small class="text-muted">Last updated ${item.date}</small></p>
                    <button type="button" 
                        class="btn btn-primary"
                        data-bs-toggle="modal" 
                        data-bs-target="#myModal"
                        id="open-modal-${item.id}">
                        Buy this
                    </button> 
                </div>
            </div>`

        activeCategoryContainer?.appendChild(div)

        const btn = document.querySelector(`#open-modal-${item.id}`)

        if (btn) {
            btn.addEventListener('click', (e) => {
                 
                const modalName = document.getElementById('modal-name')
                const modalDescription = document.getElementById('modal-description')
                const modalPrice = document.getElementById('modal-price')
                const modalDate = document.getElementById('modal-date')

                if (modalName) {
                    (modalName as HTMLParagraphElement).innerText = item.name || ''
                }

                if (modalDescription) {
                    (modalDescription as HTMLParagraphElement).innerText = item.description || ''
                }

                if (modalPrice) { 
                    (modalPrice as HTMLParagraphElement).innerText = item.price.toFixed(2).toString()
                }

                if (modalDate) {
                    (modalDate as HTMLParagraphElement).innerText = 'Last updated ' + item.date
                }
            })
        }
    }
}

function renderPage(data: IData) {
    if (data.categories.length === 0) return

    renderFilters()
    renderCategories(data.categories)
    renderActiveCategory(data.active)
}

function renderModal() {
    const modal = document.getElementById('myModal') as HTMLElement
    if (!modal) return

    modal.innerHTML = /*html*/`
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title" id="modal-name"></h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <p id="modal-description"></p>
                    <p id="modal-price"></p>
                    <p id="modal-date"></p>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    `
}

function addEventListeners() {
    const filter = document.getElementById('filter')
    if (filter) {
        filter.addEventListener('change', (e) => {
            const select = e.target as HTMLSelectElement
            const selectedValue = select.options[select.selectedIndex].value
            currentSortType = Number(selectedValue)

            localStorage.setItem('currentSortType', currentSortType.toString())
            setState(`/categories/${currentCategory}/${currentSortType}`)
        })
    }


}

router.get('/categories', async () => {
    const data: IData = await fetchData('/api/categories')
    renderPage(data)
    console.log(data)
})

router.get('/categories/:id', async (req, context) => {
    const id: string = req.params.id.toString()
    const data: IData = await fetchData(`/api/categories/${id}/${currentSortType}`)
    renderPage(data)
})

router.get('/categories/:id/:sort', async (req, context) => {
    const id: string = req.params.id.toString()

    const data: IData = await fetchData(`/api/categories/${id}/${currentSortType}`)
    renderPage(data)
})

router.get('/', async () => {
    const data: IData = await fetchData(`/api/categories`)
    renderPage(data)
})

renderModal()

addEventListeners()
router.run()
