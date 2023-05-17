import { createRouter } from 'routerjs' 
import { setState } from './state'

const router = createRouter()

router.get('/categories', async () => {
    setState(`/categories`) 
})

router.get('/categories/:id', async (req, context) => {
    const id: string = req.params.id.toString()
    setState(`/categories/${id}`) 
})

router.get('/categories/:id/:sort', async (req, context) => {
    const id: string = req.params.id.toString()
    const sort: string = req.params.sort.toString()
    setState(`/categories/${id}/${sort}`) 
})

router.get('/', async () => {
    setState(`/categories`) 
})

router.run()
