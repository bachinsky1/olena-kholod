// import { setState } from "./state"

const fetchData = async (route: string) => {

    
    const activeCategoryContainer = document.getElementById('goodsContainer')

    if (activeCategoryContainer === null) return

    activeCategoryContainer.innerHTML = ''
    // route = window.location.origin + apiPrefix + route

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

export { fetchData }