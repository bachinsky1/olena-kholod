import { fetchData } from "./api"
import { renderPage } from "./render"
import { IData } from "./types"

const setState = async (state: string): Promise<void> => {
    const url = window.location.origin + state
    history.pushState(null, '', url)
    // localStorage.setItem('state', url)
    const data: IData = await fetchData(window.location.origin + '/api' + state) as IData
    renderPage(data)
}

export { setState }