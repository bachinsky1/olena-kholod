function setState2(state: string) {
    const url = window.location.origin + state
    history.pushState(null, '', url)
    localStorage.setItem('state', state)
}

export { setState2 }