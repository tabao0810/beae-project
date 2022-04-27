<template>
  <div>
    <h1 class="mt-20 mb-5">Edit slide</h1>
    <div class="flex items-center">
      <p class="">Slide per View:</p>
      <input
        type="number"
        v-model="theSlide.sildesView"
        min="1"
        class="input-num grow w-32 ml-3"
      />
    </div>
    <div class="flex items-center mt-2">
      <p class="">Slide per group:</p>
      <input
        type="number"
        v-model="theSlide.sildeGroup"
        min="1"
        class="input-num grow w-32 ml-3"
      />
    </div>
    <div class="flex items-center mt-2">
      <p class="">Space per slide:</p>
      <input
        type="number"
        v-model="theSlide.spaceSlides"
        min="1"
        class="input-num grow w-20 ml-3"
      />
    </div>
    <div class="mt-10 flex">
      <button
        @click="theSlide.isNavigation = !theSlide.isNavigation"
        class="btn"
      >
        Hidden Navigation
      </button>
      <button
        @click="theSlide.isPagination = !theSlide.isPagination"
        class="btn"
      >
        Hidden Pagination
      </button>
    </div>
    <div class="flex items-center mt-2">
      <p class="">Thêm slide:</p>
      <input type="file" ref="file" @change="handleUploadSlide()" />
    </div>
    <div class="flex items-center mt-2">
      <button
        @click.prevent="addSlide(slideItem)"
        class="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900"
      >
        Upload
      </button>
      <button
        @click.prevent="deleteSlide()"
        class="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900 ml-3"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      slideItem: {
        image: "",
        description: "",
      },
    };
  },
  props: {
    theSlide: {
      type: Object,
    },
  },
  methods: {
    handleUploadSlide() {
      this.slideItem.image = this.$refs.file.files[0];
    },
    deleteSlide() {
      this.$store.dispatch("slides/deleteSlideActions");
    },
    async addSlide(slideItem) {
      const data = new FormData();
      data.append("file", slideItem.image);
      data.append("upload_preset", "uploads");
      try {
        const uploads = await axios.post(
          "https://api.cloudinary.com/v1_1/dwdezrrqh/upload",
          data
        );
        slideItem.image = uploads.data.url;
        this.$store.dispatch("slides/addSlideActions", slideItem);
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>

<style></style>
