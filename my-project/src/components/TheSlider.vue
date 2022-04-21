<template>
  <swiper
    :slidesPerView="numSlide.sildesView"
    :spaceBetween="numSlide.spaceSlides"
    :slidesPerGroup="numSlide.sildeGroup"
    :loop="false"
    :loopFillGroupWithBlank="false"
    :pagination="numSlide.isPagination"
    :navigation="numSlide.isNavigation"
    :modules="modules"
    class="mySwiper mt-20"
  >
    <swiper-slide v-for="(data, index) in datas" :key="index">
      <img
        :src="data.image"
        :alt="data.description"
        class="w-full h-full object-cover"
      />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default {
  data() {
    return {
      datas: [
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
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    numSlide: {
      tpye: Object,
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style>
.swiper {
  width: 500px;
  height: 300px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  object-fit: cover;
}
.btn {
  padding: 10px;
  border: 1px solid black;
  margin-right: 10px;
}
.btn:hover {
  color: #fff;
  background-color: #111;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
input[type="number"] {
  border: 1px solid black;
  outline: none;
}
input[type="number"]:focus {
  border: none;
  outline: 1px solid #ff343b;
}
</style>
