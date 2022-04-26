<template>
  <div>
    <div
      class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
    >
      <img
        :src="product.imageSrc"
        :alt="product.imageAlt"
        class="w-full h-full object-center object-cover lg:w-full lg:h-full cursor-pointer"
        @click="handleOpenDetail"
      />
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-2xl text-gray-700">
          <a :href="product.href">
            <span aria-hidden="true" class="" />
            {{ product.name }}
          </a>
        </h3>
        <!-- <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p> -->
      </div>
      <p class="text-2xl font-semibold text-gray-900">{{ product.price }}</p>
    </div>
    <div class="mt-4 flex justify-end">
      <button
        class="h-10 px-6 font-semibold rounded-md bg-black hover:bg-red-500 text-white"
        type="submit"
        @click.prevent="addToCart(product)"
      >
        Buy now
      </button>
    </div>
  </div>
  <teleport to="#app">
    <app-modal :isOpen="isOpenDetail" :handleCloseDetail="handleCloseDetail">
      <product-detail :productDetail="product"></product-detail>
    </app-modal>
  </teleport>
</template>

<script>
import AppModal from "./AppModal.vue";
import ProductDetail from "./ProductDetail.vue";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("carts");
export default {
  data() {
    return {
      isOpenDetail: false,
    };
  },
  components: {
    AppModal,
    ProductDetail,
  },
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    handleOpenDetail() {
      this.isOpenDetail = true;
    },
    handleCloseDetail() {
      this.isOpenDetail = false;
    },
    ...mapActions({
      addToCart: "addToCartAction",
    }),
  },
};
</script>

<style></style>
