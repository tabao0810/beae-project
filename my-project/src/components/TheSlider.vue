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
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("slides");
export default {
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapState({
      datas: (state) => state.listSlide,
    }),
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
