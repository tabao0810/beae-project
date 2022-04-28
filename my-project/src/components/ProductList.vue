<template>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div class="flex justify-between">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
          Customers also purchased
        </h2>
        <h2 @click="handleOpenDetail" class="cursor-pointer myCart">
          <i class="fa-solid fa-cart-arrow-down text-3xl"></i>
          <span class="cartAmout">{{ sumCart }}</span>
        </h2>
      </div>

      <div
        class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative"
        >
          <product-item :product="product"></product-item>
        </div>
      </div>
    </div>
  </div>
  <teleport to="#app">
    <app-modal :isOpen="isOpenDetail" :handleCloseDetail="handleCloseDetail">
      <cart-detail></cart-detail>
    </app-modal>
  </teleport>
</template>

<script>
import AppModal from "./AppModal.vue";
import CartDetail from "./CartDetail.vue";
import ProductItem from "./ProductItem.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("products");
const cartState = createNamespacedHelpers("carts");
export default {
  data() {
    return {
      isOpenDetail: false,
    };
  },
  components: {
    ProductItem,
    AppModal,
    CartDetail,
  },
  computed: {
    ...mapState({
      products: (state) => state.listProduct,
    }),
    ...cartState.mapState({
      listCart: (state) => state.listCart,
    }),
    sumCart() {
      return this.listCart.reduce((sum, cart) => (sum += cart.amount), 0);
    },
  },
  methods: {
    handleOpenDetail() {
      this.isOpenDetail = true;
    },
    handleCloseDetail() {
      this.isOpenDetail = false;
    },
  },
};
</script>

<style>
.myCart {
  position: relative;
}
.cartAmout {
  position: absolute;
  top: -6px;
  right: -10px;
  background-color: rgb(255, 30, 67);
  border-radius: 50%;
  padding: 1px;
  font-size: 16px;
  width: 25px;
  height: 25px;
  text-align: center;
  color: #fff;
}
</style>
