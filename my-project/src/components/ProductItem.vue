<template>
  <div
    class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
  >
    <img
      :src="product.imageSrc"
      :alt="product.imageAlt"
      class="w-full h-full object-center object-cover lg:w-full lg:h-full"
    />
  </div>
  <div class="mt-4 flex justify-between">
    <div>
      <h3 class="text-2xl text-gray-700">
        <a :href="product.href">
          <span aria-hidden="true" class="" />
          {{ product.name }}
        </a>
      </h3>
      <!-- <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p> -->
    </div>
    <p class="text-2xl font-semibold text-gray-900">{{ product.price }}</p>
  </div>
  <div class="mt-4 flex justify-end">
    <button
      class="h-10 px-6 font-semibold rounded-md bg-black hover:bg-red-500 text-white"
      type="submit"
    >
      Buy now
    </button>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
    },
  },
};
</script>

<style></style>
