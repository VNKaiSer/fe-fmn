<template>
  <form class="w-full max-w-lg">
    <div
      v-if="isModalOpen"
      class="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center"
    >
      <div class="bg-gray-900 bg-opacity-50 absolute inset-0"></div>

      <div class="relative bg-white rounded-lg max-w-md w-full">
        <!-- Nội dung modal ở đây -->
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-4">{{ title }}</h2>
          <p>{{ content }}</p>
        </div>
        <button class="absolute top-0 right-0 mt-4 mr-4" @click="closeModal">&times;</button>

        <div class="flex justify-end p-2">
          <button
            class="w-full ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            @click="onYesClick()"
          >
            Chấp nhận
          </button>
        </div>

        <div class="flex justify-end p-2">
          <button
            class="w-full ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="reset"
            @click="onNoClick()"
          >
            Huỷ
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    isModalOpen: {
      type: Boolean,
      default: false
    },
    closeModal: {
      type: Function
    },
    openModal: {
      type: Function
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    onYesClick: {
      type: Function
    },
    onNoClick: {
      type: Function
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
