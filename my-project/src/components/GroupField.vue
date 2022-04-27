<template>
  <div class="container mx-auto px-40">
    <div class="grid grid-cols-4 gap-4">
      <div>
        <group-image :theImg="theImg"></group-image>
        <group-slide :theSlide="theSlide"></group-slide>
        <group-form :formContact="formContact"></group-form>
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
import GroupImage from "./GroupImage.vue";
import GroupSlide from "./GroupSlide.vue";
import GroupForm from "./GroupForm.vue";
import TheImage from "./TheImage.vue";
import FormInput from "./FormInput.vue";
import TheSlider from "./TheSlider.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("images");
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
      imageItems: {
        id: Math.floor(Math.random() * 1000),
        img: "",
        title: "hinh anh",
      },
      slideItem: {
        image: "",
        description: "",
      },
    };
  },
  components: {
    TheImage,
    FormInput,
    TheSlider,
    GroupImage,
    GroupSlide,
    GroupForm,
  },
  computed: {
    ...mapState({
      items: (state) => state.listImage,
    }),
  },
  methods: {},
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
