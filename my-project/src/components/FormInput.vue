<template>
  <div class="container mx-auto mt-20 mb-20">
    <h2>Form contact</h2>
    <div class="grid grid-col-1 grid-flow-col gap-4">
      <div class="">
        <form action="form_contact" @submit="checkForm">
          <div
            class="mt-2 grid grid-cols-1 form-contact-tex"
            v-for="(data, index) in formCon"
            :key="index"
          >
            <label :for="data.dataName" class="mr-2">{{
              data.dataLabel
            }}</label>
            <textarea
              v-if="data.dataType === 'textarea'"
              :name="data.dataName"
              :placeholder="data.dataPlaceholder"
              :value="data.dataValue"
              :class="data.dataClass"
              :required="data.dataRequired"
              rows="5"
            ></textarea>
            <input
              :type="data.dataType"
              :name="data.dataName"
              :placeholder="data.dataPlaceholder"
              :value="data.dataValue"
              :class="data.dataClass"
              :required="data.dataRequired"
              v-else
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        {
          dataLabel: "",
          dataType: "text",
          dataPlaceholder: "Your name",
          dataName: "name",
          dataValue: "",
          dataClass: "form_contact-input",
          dataModel: "info.fullName",
        },
        {
          dataLabel: "",
          dataType: "email",
          dataPlaceholder: "Your email",
          dataName: "email",
          dataValue: "",
          dataClass: "form_contact-input",
          dataModel: "info.email",
        },
        {
          dataLabel: "",
          dataType: "number",
          dataPlaceholder: "Number",
          dataName: "number",
          dataValue: "1",
          dataClass: "form_contact-input",
          dataModel: "",
        },
        {
          dataLabel: "",
          dataType: "textarea",
          dataPlaceholder: "Message",
          dataName: "textarea",
          dataValue: "",
          dataClass: "form_contact-input",
          dataModel: "info.mess",
        },
        {
          dataLabel: "",
          dataType: "checkbox",
          dataPlaceholder: "Number",
          dataName: "checkbox",
          dataValue: "",
          dataClass: "form_contact-input-checkbox",
          dataModel: "info.isCheck",
        },
        {
          dataLabel: "",
          dataType: "submit",
          dataPlaceholder: "Message",
          dataName: "submit",
          dataValue: "Submit",
          dataClass: "form_contact-input-submit",
          dataModel: "",
        },
      ],
      info: {
        fullName: "",
        email: "",
        mess: "",
        isCheck: false,
      },
    };
  },
  props: {
    formCon: {
      type: Array,
    },
  },
  methods: {
    checkForm() {
      if (fullName.length !== 0) {
      } else {
        alert("asa");
      }
    },
  },
};
</script>

<style></style>
<style scoped>
.form_contact-input {
  background-color: #f3f3f3;
  padding: 10px;
  flex: 0.6;
}
.form_contact-input:focus {
  background-color: #fff;
  outline-color: #ff343b;
}
.form_contact-input-submit {
  background-color: #f3f3f3;
  padding: 10px;
  width: 200px;
  cursor: pointer;
}
.form_contact-input-submit:hover {
  background-color: #ff343b;
  color: #f3f3f3;
}
.form_contact-input-checkbox {
  accent-color: #ff343b;
  height: 24px;
  width: 20px;
  cursor: pointer;
}
.form-contact-tex {
  display: flex;
  justify-content: flex-start;
}
</style>
