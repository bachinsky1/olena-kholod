import { setState } from "./state"
import { IActiveCategory, ICategory, IData } from "./types"

const parseUrl = (): { currentCategory: string | number, currentSortType: string | number } => {
    const url = window.location.pathname
    const params = url.split("/")

    const currentCategory = params[2] || 1
    const currentSortType = params[3] || 1

    return { currentCategory, currentSortType }
}

let { currentCategory, currentSortType } = parseUrl()

const renderPage = (data: IData): void => {

    renderFilters()
    renderCategories(data.categories)
    renderActiveCategory(data.active)
}

const renderCategories = (categories: Array<ICategory>): void => {
    // Render categories
    const categoriesContainer = document.getElementById('categoriesContainer')
    if (categoriesContainer === null) return

    const div = document.createElement('div')

    div.classList.add('list-group')

    for (const item of categories) {

        const link: HTMLAnchorElement = document.createElement('a')

        link.setAttribute('href', '#')
        link.classList.add(...['list-group-item', 'list-group-item-action'])
        link.textContent = item.name + ` (${item.count})`
        link.dataset.category_id = item.id.toString()

        link.addEventListener('click', (e) => {
            if (!(e.target instanceof HTMLAnchorElement)) return

            currentCategory = Number(e.target.dataset.category_id)
            const el = document.getElementById("filter") as HTMLSelectElement
            const currentSortType = el.options[el.selectedIndex].value

            setState(`/categories/${currentCategory}/${currentSortType}`)
        })

        div.appendChild(link)
    }

    categoriesContainer.innerHTML = ''
    categoriesContainer.appendChild(div)
}

const renderFilters = (): void => {
    const filtersContainer = document.getElementById('filtersContainer') as HTMLSelectElement
    filtersContainer.innerHTML = ''
    const select = document.createElement('select')

    select.classList.add('form-select')
    select.setAttribute('id', 'filter')

    // filtersContainer
    select.innerHTML = /*html*/`
        <option value="1">Cheaper first</option>
        <option value="2">Alphabetically</option>
        <option value="3">New first</option>
    `

    select.selectedIndex = Number(currentSortType) - 1

    select.addEventListener('change', (e) => {
        const select = e.target as HTMLSelectElement
        currentSortType = Number(select.options[select.selectedIndex].value)
        select.selectedIndex = Number(select.options[select.selectedIndex].value)
        setState(`/categories/${currentCategory}/${currentSortType}`)
    })

    filtersContainer.appendChild(select)
}

const renderActiveCategory = (active: Array<IActiveCategory>): void => {
    // Render active category
    const activeCategoryContainer = document.getElementById('goodsContainer')
    if (activeCategoryContainer === null) return

    activeCategoryContainer.classList.add('row')
    activeCategoryContainer.classList.add('row-cols-md-4')
    activeCategoryContainer.innerHTML = ''

    for (const item of active) {

        const div = document.createElement('div')
        div.classList.add('col')
        div.setAttribute('id', `card-${item.name}`)

        div.innerHTML = /*html*/`
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text card-text-description"></p>
                    <p class="card-text card-text-price"></p>
                    <p class="card-text"><small class="text-muted text-muted-date"></small></p>
                    <button type="button" 
                        class="btn btn-primary"
                        data-bs-toggle="modal" 
                        data-bs-target="#myModal"
                        id="open-modal-${item.id}">
                        Buy this
                    </button> 
                </div>
            </div>`

        const title = div.querySelector("h5") as HTMLHeadingElement
        title.textContent = item.name

        const description = div.querySelector(".card-text-description") as HTMLParagraphElement
        description.textContent = item.description

        const price = div.querySelector(".card-text-price") as HTMLParagraphElement
        price.textContent = Number(item.price.toString()).toFixed(2)

        const date = div.querySelector(".text-muted-date") as HTMLElement
        date.textContent = `Last updated ${item.date}`

        activeCategoryContainer?.appendChild(div)

        const btn = document.querySelector(`#open-modal-${item.id}`)

        if (btn) {
            btn.addEventListener('click', () => {

                const modalName = document.getElementById('modal-name') as HTMLParagraphElement
                const modalDescription = document.getElementById('modal-description') as HTMLParagraphElement
                const modalPrice = document.getElementById('modal-price') as HTMLParagraphElement
                const modalDate = document.getElementById('modal-date') as HTMLParagraphElement

                if (modalName) {
                    modalName.textContent = item.name || ''
                }

                if (modalDescription) {
                    modalDescription.textContent = item.description || ''
                }

                if (modalPrice) {
                    modalPrice.textContent = Number(item.price.toString()).toFixed(2)
                }

                if (modalDate) {
                    modalDate.textContent = 'Last updated ' + item.date
                }
            })
        }
    }
}

const renderModal = (): void => {
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

renderModal()

export { renderPage }