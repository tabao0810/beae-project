<template>
  <div class="grid grid-cols-4 gap-4">
    <div class="col-span-2">
      <img
        :src="productDetail.imageSrc"
        style="width: 100%"
        :alt="productDetail.imageAlt"
      />
    </div>
    <div class="col-span-2 text-left">
      <p class="font-semibold text-3xl">{{ productDetail.name }}</p>
      <p class="font-medium text-base mt-5">Color:{{ productDetail.color }}</p>
      <p class="font-medium text-base">Price:{{ productDetail.price }}</p>
      <button
        class="h-10 px-6 font-semibold rounded-md bg-black hover:bg-red-500 text-white mt-5"
        type="submit"
        @click.prevent="addToCart(productDetail)"
      >
        Buy now
      </button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("carts");
export default {
  props: {
    productDetail: {
      type: Object,
    },
  },
  methods: {
    ...mapActions({
      addToCart: "addToCartAction",
    }),
  },
};
</script>

<style></style>
