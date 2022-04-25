import {createStore} from 'vuex';
import images from './modules/images';
import slides from './modules/slides';
import products from './modules/products'


const store = createStore({
    modules:{
        images,
        slides,
        products
    }
});
export default store