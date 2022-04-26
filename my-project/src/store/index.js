import {createStore} from 'vuex';
import images from './modules/images';
import slides from './modules/slides';
import products from './modules/products'
import carts from './modules/carts'

const store = createStore({
    modules:{
        images,
        slides,
        products,
        carts
    }
});
export default store