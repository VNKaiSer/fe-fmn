<template>
  <HeaderComponent />
  <SideBar />
  <div class="p-4 sm:ml-64">
    <div class="mt-[50px] mx-4">
      <button
        class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="openModal"
      >
        <vs-icon icon="search"></vs-icon> Thêm sân bóng mới
      </button>

      <!-- Modal -->
      <!-- <div class="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center"> -->
      <ModalCreatePitch
        :isModalOpen="isModalOpen"
        :closeModal="closeModal"
        :openModal="openModal"
        :pitchUpdate="pitchUpdate"
        :callBack="getAllPitch"
      />
      <!-- </div> -->
      <div class="w-full overflow-hidden rounded-lg shadow-xs">
        <div class="w-full overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr
                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
              >
                <th class="px-4 py-3">Tên sân</th>
                <th class="px-4 py-3">Giá</th>
                <th class="px-4 py-3">Loại sân</th>
                <th class="px-4 py-3">Vị trí</th>
                <th class="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              <tr
                class="text-gray-700 dark:text-gray-400"
                v-for="pitch in listPitchs"
                :key="pitch.id"
              >
                <td class="px-4 py-3 text-md font-semibold">{{ pitch.name }}</td>
                <td class="px-4 py-3 text-sm">{{ fortmatPrice(pitch.price) }}</td>
                <td class="px-4 py-3 text-sm">
                  <span
                    :class="{
                      'px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100':
                        pitch.type_id == 5,
                      'px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-red-100':
                        pitch.type_id == 7,
                      'px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full dark:bg-yellow-700 dark:text-yellow-100':
                        pitch.type_id != 5 && pitch.type_id != 7
                    }"
                  >
                    Sân {{ pitch.type_id }}
                  </span>
                </td>
                <td class="px-4 py-3 text-md">{{ pitch.location }}</td>
                <td class="px-4 py-3 text-md">
                  <button
                    class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                    @click="openModalUpdate(pitch)"
                  >
                    <vs-icon icon="edit"></vs-icon>Edit
                  </button>
                  <button
                    class="bg-red-500 ml-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    @click="deletePitch(pitch.id)"
                  >
                    <vs-icon icon="delete"></vs-icon>Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalCreatePitch from '../../components/pitch/ModalCreatePitch.vue'
import AuthenticationService from '@/api/AuthenticationService'
export default {
  name: 'ListPitch',

  created() {
    this.getAllPitch()
  },
  data() {
    return {
      isModalOpen: false,
      listPitchs: [],
      pitchUpdate: null
    }
  },

  methods: {
    openModal() {
      this.isModalOpen = true
      this.pitchUpdate = null
    },

    closeModal() {
      this.isModalOpen = false
    },

    openModalUpdate(obj) {
      this.isModalOpen = true
      this.pitchUpdate = obj
    },
    getAllPitch() {
      AuthenticationService.getPitchs()
        .then((res) => {
          console.log(res.data)
          this.listPitchs = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },

    deletePitch(id) {
      AuthenticationService.deletePitch(id)
        .then(() => {
          this.$notify({
            title: 'Thông báo',
            text: 'Xoá thành công',
            type: 'success'
          })
        })
        .catch(() => {
          this.$notify({
            title: 'Thông báo',
            text: 'Xoá không thành công',
            type: 'eror'
          })
        })
    },
    fortmatPrice(price) {
      return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
      }).format(price)
    }
  },

  components: { ModalCreatePitch }
}
</script>
