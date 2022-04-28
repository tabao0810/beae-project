<template>
  <div class="mx-auto">
    <h1 class="mt-20 mb-5">Edit form</h1>
    <div
      v-for="(data, index) in formContact"
      :key="index"
      class="mt-3 mb-5 mx-auto"
    >
      <div class="flex items-center text-center mt-3">
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
</template>

<script>
export default {
  props: {
    formContact: {
      type: Array,
    },
  },
};
</script>

<style></style>
