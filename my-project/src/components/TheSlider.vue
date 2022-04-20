<template>
  <swiper
    :slidesPerView="sildesView"
    :spaceBetween="spaceSlides"
    :slidesPerGroup="sildeGroup"
    :loop="false"
    :loopFillGroupWithBlank="false"
    :pagination="isPagination"
    :navigation="isNavigation"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(data, index) in datas" :key="index">
      <img :src="data.image" :alt="data.description" />
    </swiper-slide>
  </swiper>
  <div class="mt-10">
    <button @click="isNavigation = !isNavigation" class="btn">
      Hidden Navigation
    </button>
    <button @click="isPagination = !isPagination" class="btn">
      Hidden Pagination
    </button>
    <div>
      Slide per View:<input
        type="number"
        v-model="sildesView"
        class="ml-5 mt-5"
        min="1"
      />
    </div>
    <div>
      Slide per group:<input
        type="number"
        v-model="sildeGroup"
        class="ml-5 mt-5"
        min="1"
      />
    </div>
    <div>
      Space per slide:<input
        type="number"
        v-model="spaceSlides"
        class="ml-5 mt-5"
        min="1"
      />
    </div>
  </div>
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
            "data:image/jpeg;base64,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",
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
      isPagination: true,
      isNavigation: true,
      sildesView: 1,
      sildeGroup: 1,
      spaceSlides: 30,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
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
  width: 30%;
  height: 30%;
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
