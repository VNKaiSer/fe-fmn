<template>
  <form class="w-full max-w-lg" @submit.prevent="checkFormCreatePitch()">
    <div
      v-if="isModalOpen"
      class="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center"
    >
      <div class="bg-gray-900 bg-opacity-50 absolute inset-0"></div>

      <div class="relative bg-white rounded-lg max-w-md w-full">
        <!-- Nội dung modal ở đây -->
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-4">Tạo sân bóng</h2>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold m-2" for="pitch_name">
              Tên sân bóng
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pitch_name"
              type="text"
              placeholder="Tên sân bóng"
              v-model="pitch_name"
              required
            />

            <label class="block text-gray-700 text-sm font-bold m-2" for="pitch_description">
              Giá tiền
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pitch_description"
              type="text"
              placeholder="Giá theo giờ"
              v-model="pitch_price"
              required
            />

            <label class="block text-gray-700 text-sm font-bold m-2" for="pitch_address">
              Địa điểm
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pitch_address"
              type="text"
              placeholder="Địa điểm"
              v-model="pitch_address"
              required
            />

            <label class="block text-gray-700 text-sm font-bold m-2" for="pitch_address">
              Loại sân
            </label>
            <select
              v-model="pitch_size"
              class="w-full border border-gray-300 text-md p-2 rounded-lg ="
            >
              <option value="5">Sân 5</option>
              <option value="7">Sân 7</option>
              <option value="11">Sân 11</option>
            </select>
          </div>
        </div>
        <button class="absolute top-0 right-0 mt-4 mr-4" @click="closeModal">&times;</button>

        <div class="flex justify-end p-2">
          <button
            class="w-full ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {{ pitchUpdate == null ? 'Tạo sân bóng' : 'Cập nhật sân bóng' }}
          </button>
        </div>

        <div class="flex justify-end p-2">
          <button
            class="w-full ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="reset"
          >
            Làm mới
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import AuthenticationService from '@/api/AuthenticationService'
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
    pitchUpdate: {
      type: Object
    },
    callBack: {
      type: Function()
    }
  },
  created() {
    console.log('Vào ')
    if (this.pitchUpdate != null) {
      this.pitch_name = this.pitchUpdate.name
      this.pitch_address = this.pitchUpdate.location
      this.pitch_size = this.pitchUpdate.type_id
      this.pitch_id = this.pitchUpdate.id
      this.pitch_price = this.pitchUpdate.price
    }
  },
  watch: {
    pitchUpdate: function (newVal) {
      this.pitch_name = newVal.name
      this.pitch_address = newVal.location
      this.pitch_size = newVal.type_id
    }
  },
  // mounted() {
  //   console.log(this.pitchUpdate.id)
  //   if (this.pitchUpdate != null) {
  //     this.pitch_name = this.pitchUpdate.name
  //     this.pitch_address = this.pitchUpdate.location
  //     this.pitch_size = this.pitchUpdate.type_id
  //   }
  // },
  data() {
    return {
      pitch_name: '',
      pitch_address: '',
      pitch_size: 5,
      pitch_id: '',
      pitch_price: 0
    }
  },
  methods: {
    checkFormCreatePitch() {
      if (this.pitchUpdate) {
        AuthenticationService.updatePitch(this.pitchUpdate.id, {
          pitch_name: this.pitch_name,
          pitch_address: this.pitch_address,
          pitch_size: Number.parseInt(this.pitch_size),
          pitch_price: Number.parseFloat(this.pitch_price),
          id: this.pitchUpdate.id
        })
          .then(() => {
            this.$notify({
              title: 'Thông báo',
              text: 'Cập nhật sân bóng thành công',
              type: 'success',
              duration: 3000
            })
          })
          .catch(() => {
            this.$notify({
              title: 'Lỗi',
              text: 'Cập nhật sân bóng thất bại',
              type: 'error',
              duration: 3000
            })
          })
      } else {
        if (this.pitch_name.length <= 3 || this.pitch_address.length <= 3) {
          this.$notify({
            title: 'Cảnh báo',
            text: 'Tên sân bóng hoặc địa điểm tối thiểu là 3 kí tự',
            type: 'warn',
            duration: 3000
          })
        }
        const obj = {
          pitch_name: this.pitch_name,
          pitch_address: this.pitch_address,
          pitch_size: Number.parseInt(this.pitch_size),
          pitch_price: Number.parseFloat(this.pitch_price)
        }
        AuthenticationService.createPitch(obj)
          .then(() => {
            this.$notify({
              title: 'Thông báo',
              text: 'Thêm sân bóng thành công',
              type: 'success',
              duration: 3000
            })
            this.callBack()
            this.closeModal()
          })
          .catch((err) => {
            this.$notify({
              title: 'Lỗi',
              text: 'Thêm thất bại ',
              type: 'error',
              duration: 3000
            })
            console.log(err)
          })
      }
      this.callBack()
      this.closeModal()
    }
  }
}
</script>
