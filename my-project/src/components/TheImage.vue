<template>
  <div class="">
    <h1 class="mb-10">The image</h1>
    <div
      :class="`grid gap-x-${numImg.spacex} gap-y-${numImg.spacey} grid-cols-${numImg.colums} `"
    >
      <div v-for="(item, index) in items" :key="index">
        <div class="w-full h-full">
          <img
            :src="item.img"
            :alt="item.title"
            class="w-full h-full object-fill rounded-md"
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
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("images");
export default {
  data() {
    return {
      isActive: false,
      currentIamge: 0,
    };
  },
  methods: {
    handleToOpen(item) {
      this.isActive = true;
      this.currentIamge = item.id - 1;
      console.log(item.id);
    },
    handleToClose() {
      this.isActive = false;
    },
  },
  props: {
    numImg: {
      type: Object,
    },
  },
  computed: {
    ...mapState({
      items: (state) => state.listImage,
    }),
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
.img-size {
  width: 100px;
  height: 100px;
}
</style>
