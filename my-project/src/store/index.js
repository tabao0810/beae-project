import {createStore} from 'vuex';
import images from './modules/images';
import slides from './modules/slides'


const store = createStore({
    modules:{
        images,
        slides
    }
});
export default store