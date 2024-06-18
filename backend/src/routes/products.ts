import express from 'express';
const router = express.Router();
import { postProduct , 
    getAllProducts, 
    getProduct,
    deleteProduct, 
    editProduct
} from '../controllers/products.controller';


router.get('/', getAllProducts)
router.get('/:id', getProduct)
router.post('/',postProduct)
router.put('/', editProduct)
router.delete('/', deleteProduct)

export default router