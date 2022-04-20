<template>
  <div class="container px-3 md:px-10">
    <div
      class="grid"
      :class="`gap-${gaps} lg:grid-cols-${colums} md:grid-cols-${tabCol} sm:grid-cols-${mobCol}`"
    >
      <div v-for="(item, index) in items" :key="index">
        <div class="w-full h-full">
          <img
            :src="item.img"
            :alt="item.title"
            class="w-full h-full object-fill rounded-xl"
            @click="handleToOpen(item)"
          />
        </div>
        <div class="lightbox" :class="{ active: isActive }">
          <span class="close-icon" @click="handleToClose">&times;</span>
          <img
            :src="items[currentIamge].img"
            alt=""
            class="image-placeholder w-full h-full px-60 py-10"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
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
          img: "data:image/jpeg;base64,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",
          title: "hinh anh",
        },
      ],
      colums: 6,
      tabCol: 2,
      mobCol: 1,
      gaps: 4,
      isActive: false,
      currentIamge: 0,
    };
  },
  methods: {
    handleToOpen(item) {
      this.isActive = true;
      this.currentIamge = item.id - 1;
    },
    handleToClose() {
      this.isActive = false;
    },
  },
};
</script>

<style>
.lightbox {
  display: none;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  background-color: rgba(0, 0, 0, 0.8);
}
.active {
  display: block;
}
.close-icon {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 50px;
  cursor: pointer;
}
</style>
