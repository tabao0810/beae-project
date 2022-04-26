const state = () =>{
    return{
        listCart: [
                         
        ],
    }
}
const mutations ={
    addToCartMutation(state,payload){
        const index = state.listCart.findIndex((cart) => cart.id === payload.id)
        if(index !== -1){
            state.listCart[index].amount +=1;
        }else{
            state.listCart.push(payload);
        }
    }
}
const actions={
    addToCartAction(context,payload){
        const newPro = {...payload,amount:1}
        context.commit("addToCartMutation",newPro)
    }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions
}