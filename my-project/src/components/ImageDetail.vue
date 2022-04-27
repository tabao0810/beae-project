<template>
  <edit-image @add="addTo" @input="abcs"></edit-image>
  <div class="">
    <h1 class="mb-10">The image</h1>
    <div class="grid gap-x-4 gap-y-4" :class="grid - cols - `${a.colums}`">
      <div v-for="(item, index) in items" :key="index">
        <div class="w-full h-full">
          <img
            :src="item.img"
            :alt="item.title"
            class="w-full h-full object-fill rounded-md"
            @click="handleToOpen(item)"
          />
        </div>
        <!-- <div class="lightbox" :class="{ active: isActive }">
          <span class="close-icon" @click="handleToClose">&times;</span>
          <img
            :src="items[currentIamge].img"
            alt=""
            class="image-placeholder w-full h-full px-60 py-10"
          />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import EditImage from "./EditImage.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("images");
export default {
  data() {
    return {
      numImg: {
        colums: 0,
        spacex: 0,
        spacey: 0,
      },
    };
  },
  components: {
    EditImage,
  },
  methods: {
    addTo(a) {
      console.log(a);
    },
    abcs(a) {
      console.log(a);
      this.numImg.colums = a;
    },
  },
  computed: {
    ...mapState({
      items: (state) => state.listImage,
    }),
  },
};
</script>

<style></style>
