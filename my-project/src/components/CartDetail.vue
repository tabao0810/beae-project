<template>
  <div>
    <div v-for="cart in listCart" :key="cart.id" class="grid grid-cols-12 mt-6">
      <div class="col-span-2">
        <img :src="cart.imageSrc" style="width: 100%" :alt="cart.imageAlt" />
      </div>
      <div class="col-span-2">
        <p>{{ cart.name }}</p>
        <p>{{ cart.amount }} × {{ cart.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("carts");
export default {
  computed: {
    ...mapState({
      listCart: (state) => state.listCart,
    }),
  },
};
</script>

<style></style>
