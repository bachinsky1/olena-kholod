import { fetchData } from "./api"
import { renderPage } from "./render"

const setState = async (state: string) => {
    const url = window.location.origin + state
    history.pushState(null, '', url)
    // localStorage.setItem('state', url)
    const data = await fetchData(window.location.origin + '/api' + state)
    renderPage(data)
}

export { setState }