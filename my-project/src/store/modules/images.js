const state = () =>{
    return{
        listImage: [
            {
          id: 1,
          img: "https://thuelens.com/wp-content/uploads/2020/08/iStock-517188688.jpg",
          title: "hinh anh",
        },
        {
          id: 2,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzyGCXTCW9XcTdTctWOuVoevVnfXZ47kVsx6cqd2rasEEG4w02lw6vjwEv3KQjTPQ2Ixc&usqp=CAU",
          title: "hinh anh",
        },
        {
          id: 3,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr7MdlZ0hbU16RaPqVF9wC1nvjP9c1AOdQrDQu8jDVxKz3a0pnRoCgw6E4YyM3IZqv2ho&usqp=CAU",
          title: "hinh anh",
        },
        {
          id: 4,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5tgxw11-QcQe2Brg7k0rBks5njMTrtgBMW1LnNFXkzsLmCXi1Q6AXyrw6nsQFmHNqaAk&usqp=CAU",
          title: "hinh anh",
        },
        {
          id: 5,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiVGfn0mLTCZUKzEue46LCOILEAbq-zIIYFSoiUAMBLeVPiY4k3CvFwoS4PkH2csNhPmc&usqp=CAU",
          title: "hinh anh",
        },
        {
          id: 6,
          img: "https://pis.vn/wp-content/uploads/2021/04/chup-anh-phong-canh-hieu-qua-voi-cac-thu-thuat-can-ban-4_wuzi.jpg",
          title: "hinh anh",
        },
        {
          id: 7,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKiJfHEC-2bZpzuFX_T2Ns05mPtzW0YG3xWgij_RKIO2lW9-S9zMV3DWocjgiHNg1o6yo&usqp=CAU",
          title: "hinh anh",
        },
        {
          id: 8,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKiJfHEC-2bZpzuFX_T2Ns05mPtzW0YG3xWgij_RKIO2lW9-S9zMV3DWocjgiHNg1o6yo&usqp=CAU",
          title: "hinh anh",
        },       
        ],
    }
}
const mutations ={
    addImageMutation(state,payload){
        state.listImage.push(payload);
    },
    deleteImageMutation(state){
        state.listImage.pop();
    }
}
const actions={
    addImageactions(context,payload){
        context.commit("addImageMutation",payload)
    },
    deleteImageActions(context){
        context.commit("deleteImageMutation")
    }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions
}