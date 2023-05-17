
import { createRouter } from 'routerjs'

const router = createRouter()
let sortType = 1

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

            setState(`/categories/${e.target.dataset.category_id}`)
        })

        div.appendChild(link)
    }

    categoriesContainer.innerHTML = ''
    categoriesContainer.appendChild(div)
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
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <p class="card-text">${item.price.toFixed(2)}</p>
                    <p class="card-text"><small class="text-muted">Last updated ${item.date}</small></p>
                </div>
            </div>`

        activeCategoryContainer?.appendChild(div)
    }
}

function renderPage(data: IData) {
    if (data.categories.length === 0) return

    renderCategories(data.categories)
    renderActiveCategory(data.active)
}

function addEventListeners() {
    const filter = document.getElementById('filter')
    if (filter) {
        filter.addEventListener('change', (e) => {
            const select = e.target as HTMLSelectElement
            const selectedValue = select.options[select.selectedIndex].value
            sortType = Number(selectedValue)
            router.run()
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
    const data: IData = await fetchData(`/api/categories/${id}/${sortType}`)
    renderPage(data)
})

router.get('/categories/:id/:sort', async (req, context) => {
    const id: string = req.params.id.toString()

    const data: IData = await fetchData(`/api/categories/${id}/${sortType}`)
    renderPage(data)
})

router.get('/', async () => {
    const data: IData = await fetchData(`/api/categories`)
    renderPage(data) 
})

addEventListeners()

router.run()
