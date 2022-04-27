<template>
  <div>
    <h1 class="mb-10">Edit image</h1>
    <div class="flex items-center">
      <p class="">Số cột:</p>
      <input
        type="number"
        v-model="theImg.colums"
        min="1"
        class="input-num grow w-32 ml-3"
      />
    </div>
    <div class="flex items-center mt-2">
      <p class="">Khoảng cách 2 cột:</p>
      <input
        type="number"
        v-model="theImg.spacex"
        min="1"
        class="input-num grow w-32 ml-3"
      />
    </div>
    <div class="flex items-center mt-2">
      <p class="">Khoảng cách 2 hàng:</p>
      <input
        type="number"
        v-model="theImg.spacey"
        min="1"
        class="input-num grow w-20 ml-3"
      />
    </div>
    <div class="flex items-center mt-2">
      <p class="">Thêm ảnh:</p>
      <input type="file" ref="fileImg" @change="handleUploadImage()" />
    </div>
    <div class="flex items-center mt-2">
      <button
        @click.prevent="addImage(imageItems)"
        class="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900"
      >
        Upload
      </button>
      <button
        @click.prevent="deleteImage()"
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
      imageItems: {
        id: Math.floor(Math.random() * 1000),
        img: "",
        title: "hinh anh",
      },
    };
  },
  props: {
    theImg: {
      type: Object,
    },
  },
  methods: {
    handleUploadImage() {
      this.imageItems.img = this.$refs.fileImg.files[0];
    },
    deleteImage() {
      this.$store.dispatch("images/deleteImageActions");
    },
    async addImage(imageItems) {
      const data = new FormData();
      data.append("file", imageItems.img);
      data.append("upload_preset", "uploads");
      try {
        const uploads = await axios.post(
          "https://api.cloudinary.com/v1_1/dwdezrrqh/upload",
          data
        );
        imageItems.img = uploads.data.url;
        this.$store.dispatch("images/addImageActions", imageItems);
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>

<style></style>
