const state = () =>{
    return{
        listSlide: [
           {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0MCJOG248tA18nI7LzE75jXJs3VhsE-WslA&usqp=CAU",
          description: "",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfkR5DxjyIbQdyx5faWkcP3uwtFA6nsgjTNT4cRbhsg0eMLEf2s9FoM1_aHvV9amu9iwQ&usqp=CAU",
          description: "",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH1218SPkEEt6b2FelMtIBYrr1izh9KO92RS2KoCK11wvMNtSBXpkHJhG_yZm9LRMg78Y&usqp=CAU",
          description: "",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-7Q7Hhdo4C0ENkwe9FJAZJCro3rifQu1ZaqrQE4bJBfHLto5mbuKqclb-6YEMn6_BlU&usqp=CAU",
          description: "",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDu3Hq1SoIMIqXy6E46rTc141oBAIDpWwxH4HSD4JsHd9HZ25WnCdAjdooMyXOg-cFzoY&usqp=CAU",
          description: "",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfrB0koTASq9oEVQP_wmu__O_lBUfNbk-zRceunJGBEIZxko4nHfCTAVfaMm9Q9hqwEfE&usqp=CAU",
          description: "",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTxgeSFa0MTyEVbahF-Ab6OfIUuYWSjRt8H81cG53ARokXk43lwGm2I4y957wZPsY4iBQ&usqp=CAU",
          description: "",
        },     
        ],
    }
}
const mutations ={
    addSlideMutation(state,payload){
        state.listSlide.push(payload);
    },
    deleteSlideMutation(state){
        state.listSlide.pop();
    }
}
const actions={
    addSlideActions(context,payload){
        context.commit("addSlideMutation",payload)
    },
    deleteSlideActions(context){
        context.commit("deleteSlideMutation")
    }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions
}