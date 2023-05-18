import { IData } from "./types"

const fetchData = async (route: string): Promise<IData | never[] | undefined> => {

    const activeCategoryContainer = document.getElementById('goodsContainer')

    if (activeCategoryContainer === null) return

    activeCategoryContainer.innerHTML = ''

    const spinner = document.getElementById('spinner')
    spinner?.setAttribute('style', 'display: flex;')

    const response = await fetch(route)
    spinner?.setAttribute('style', 'display: none !important;')

    if (response.ok) {
        const result: IData = await response.json()
        return result
    } else {
        console.log("HTTP error: " + response.status)
    }

    return []
}

export { fetchData }