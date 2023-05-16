
import { createRouter } from 'routerjs'

const router = createRouter()

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
    route = window.location.origin + route
    const response = await fetch(route)

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

function renderPage(data: IData) {

    if (data.categories.length === 0) return

    const categoriesContainer = document.getElementById('categoriesContainer')
    const activeCategoryContainer = document.getElementById('goodsContainer')

    if (activeCategoryContainer === null || categoriesContainer === null) return

    const div = document.createElement('div')

    div.classList.add('list-group')

    for (const item of data.categories) {

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

    activeCategoryContainer.classList.add('card-group')
    activeCategoryContainer.innerHTML = ''

    for (const item of data.active) {
        const div = document.createElement('div')
        div.classList.add('card')
        div.setAttribute('style', 'width: 18rem;')
        div.innerHTML = /*html*/`
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <p class="card-text">${item.price.toFixed(2)}</p>
                <p class="card-text"><small class="text-muted">Last updated ${item.date}</small></p>
            </div>
        `
        activeCategoryContainer?.appendChild(div)
    }
}

router.get('/categories', async () => {
    const data: IData = await fetchData('api/categories')
    renderPage(data)
    console.log(data)
})

router.get('/categories/:id', async (req, context) => {
    const id: string = req.params.id.toString()
    const data: IData = await fetchData(`/api/categories/${id}`)
    renderPage(data)
})

router.get('/', async () => {
    const data: IData = await fetchData(`/api/categories`)
    renderPage(data)
})

router.run()