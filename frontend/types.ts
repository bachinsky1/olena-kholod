
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

export { ICategory, IActiveCategory, IData }