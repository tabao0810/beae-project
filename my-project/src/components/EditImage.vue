<template>
  <input type="number" @change="handleInput" />
  <button @click="addToCart(item)">abc</button>
</template>

<script>
export default {
  data() {
    return {
      item: "no hope",
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    addToCart(item) {
      this.$emit("add", item);
    },
  },
};
</script>

<style></style>
