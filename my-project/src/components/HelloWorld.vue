<template>
  <div class="container mx-auto px-40">
    <div class="grid grid-cols-4 gap-4">
      <div>
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
        </div>
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
        </div>
        <div>
          <h1 class="mt-20 mb-5">Edit form</h1>
          <div
            v-for="(data, index) in formContact"
            :key="index"
            class="mt-3 mb-5"
          >
            <div class="flex items-center mt-3">
              <p class="">Field type:</p>
              <select
                name=""
                id=""
                class="input-num grow w-32 ml-3"
                v-model="data.dataType"
              >
                <option value="text">text</option>
                <option value="email">email</option>
                <option value="number">number</option>
                <option value="textarea">textarea</option>
                <option value="submit">submit</option>
              </select>
            </div>
            <div class="flex items-center mt-2">
              <p class="">Placeholder:</p>
              <input
                type="text"
                v-model="data.dataPlaceholder"
                class="input-field grow w-32 ml-3"
              />
            </div>
            <div class="flex items-center mt-2">
              <p class="">Name:</p>
              <input
                type="text"
                v-model="data.dataName"
                class="input-field grow w-20 ml-3"
              />
            </div>
            <div class="flex items-center mt-2">
              <p class="">Value:</p>
              <input
                type="text"
                v-model="data.dataValue"
                class="input-field grow w-20 ml-3"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-3">
        <the-image :numImg="theImg"></the-image>
        <the-slider :numSlide="theSlide"></the-slider>
        <form-input :formCon="formContact"></form-input>
      </div>
    </div>
  </div>
</template>

<script>
import TheImage from "./TheImage.vue";
import FormInput from "./FormInput.vue";
import TheSlider from "./TheSlider.vue";
export default {
  data() {
    return {
      theImg: {
        colums: 4,
        spacex: 4,
        spacey: 4,
      },
      theSlide: {
        isPagination: true,
        isNavigation: true,
        sildesView: 1,
        sildeGroup: 1,
        spaceSlides: 30,
      },
      formContact: [
        {
          dataLabel: "",
          dataType: "text",
          dataPlaceholder: "Your name",
          dataName: "name",
          dataValue: "",
          dataClass: "form_contact-input",
        },
        {
          dataLabel: "",
          dataType: "text",
          dataPlaceholder: "Your name",
          dataName: "name",
          dataValue: "",
          dataClass: "form_contact-input",
        },
        {
          dataLabel: "",
          dataType: "text",
          dataPlaceholder: "Your name",
          dataName: "name",
          dataValue: "",
          dataClass: "form_contact-input",
        },
        {
          dataLabel: "",
          dataType: "text",
          dataPlaceholder: "Your name",
          dataName: "name",
          dataValue: "",
          dataClass: "form_contact-input",
        },
      ],
    };
  },
  components: {
    TheImage,
    FormInput,
    TheSlider,
  },
};
</script>

<style></style>
<style scoped>
.input-num {
  padding: 2px 10px;
}
.input-field {
  padding: 2px 10px;
  background-color: #f3f3f3;
}
.input-field:focus {
  background-color: #fff;
  outline-color: #ff343b;
}
</style>
