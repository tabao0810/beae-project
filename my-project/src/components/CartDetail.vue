<template>
  <div>
    <div v-if="listCart.length !== 0">
      <div
        v-for="cart in listCart"
        :key="cart.id"
        class="grid grid-cols-12 mt-16 mb-4"
      >
        <div class="col-span-2">
          <img :src="cart.imageSrc" style="width: 100%" :alt="cart.imageAlt" />
        </div>
        <div class="col-span-10 flex justify-between ml-5">
          <div>
            <p class="font-semibold">{{ cart.name }}</p>
            <p>{{ cart.amount }} × ${{ cart.price }}</p>
          </div>
          <div>
            <p class="font-semibold">${{ subTotal(cart) }}</p>
            <a
              href=""
              @click.prevent="removeProduct(cart.id)"
              class="hover:text-red-600 text-xs"
              >Remove</a
            >
          </div>
        </div>
      </div>
      <hr />
      <div class="flex justify-between mt-4 mb-4">
        <p>Tổng tiền tạm tính</p>
        <p class="font-semibold">{{ sumTotal }}</p>
      </div>
    </div>
    <div class="mx-auto mt-60" v-else>
      <h2 class="text-4xl">Giỏ hàng trống</h2>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("carts");
export default {
  computed: {
    ...mapState({
      listCart: (state) => state.listCart,
    }),
    sumTotal() {
      let x = this.listCart.reduce(
        (sum, cart) => (sum += this.subTotal(cart)),
        0
      );
      return "$" + x;
    },
  },
  methods: {
    subTotal(cart) {
      return cart.amount * Number(cart.price);
    },
    ...mapActions({
      removeProduct: "removeProductAction",
    }),
  },
};
</script>

<style></style>
