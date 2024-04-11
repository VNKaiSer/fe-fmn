<template>
  <HeaderComponent />
  <SideBar />
  <div class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2">
          <fieldset class="border border-solid border-gray-300 p-3">
            <legend class="text-lg text-gray-500 font-bold">Thông tin đăng kí</legend>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label
                  for="loai-san"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Loại sân
                </label>
                <select
                  v-model="pitch_type"
                  class="w-full border border-gray-300 text-md p-2 rounded-lg loai-san"
                >
                  <option value="5">5</option>
                  <option value="7">7</option>
                  <option value="11">11</option>
                </select>
              </div>

              <div>
                <label
                  for="khung-gio"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Ngày đặt sân
                </label>
                <input
                  type="date"
                  id="khung-gio"
                  class="w-full border border-gray-300 text-md p-2 rounded-lg"
                  name="khung-gio"
                  v-model="date"
                />
              </div>

              <div>
                <label
                  for="so-gio"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Số phút
                </label>
                <input
                  type="number"
                  id="so-gio"
                  class="w-full border border-gray-300 text-md p-2 rounded-lg"
                  name="so-gio"
                  value="90"
                  disabled
                />
              </div>
              <div>
                <label
                  for="khung-gio"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Khung giờ
                </label>
                <select
                  name="khung-gio"
                  id="khung-gio"
                  class="w-full border border-gray-300 text-md p-2 rounded-lg"
                >
                  <option value="">6h - 7h30</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          </fieldset>
          <fieldset class="border border-solid border-gray-300 p-3">
            <legend class="text-lg text-gray-500 font-bold">Thông tin khách hàng</legend>
            <div class="grid grid-cols-4 gap-2">
              <div class="col-span-3">
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  <span class="text-red-500">(*)</span> Điện thoại/ Gmail
                </label>
                <input
                  type="text"
                  id="phone"
                  class="w-full border border-gray-300 text-md p-2 rounded-lg"
                  name="phone"
                  required
                />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-dark dark:text-white">
                  Tìm kiếm
                </label>
                <button
                  class="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
                >
                  Tìm kiếm
                </button>
              </div>
              <div class="col-span-2">
                <label class="block mb-2 text-sm font-medium text-dark dark:text-white">
                  <span class="text-red-500">(*)</span>Họ và tên
                </label>
                <input type="text" class="w-full border border-gray-300 text-md p-2 rounded-lg" />
              </div>
              <div class="col-span-2">
                <label class="block mb-2 text-sm font-medium text-dark dark:text-white">
                  Ngày sinh</label
                >
                <input type="date" class="w-full border border-gray-300 text-md p-2 rounded-lg" />
              </div>

              <div class="col-span-2">
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  <span class="text-red-500">(*)</span>CMND/ CCCD
                </label>
                <input
                  type="text"
                  id="phone"
                  class="w-full border border-gray-300 text-md p-2 rounded-lg"
                  name="text"
                />
              </div>
              <div class="col-span-2">
                <label
                  for="address"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Địa chỉ
                </label>
                <input
                  type="text"
                  id="address"
                  class="w-full border border-gray-300 text-md p-2 rounded-lg"
                  name="address"
                />
              </div>

              <div class="col-span-2">
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  <span class="text-red-500">(*)</span>
                  Điện thoại
                </label>
                <input
                  type="text"
                  id="phone"
                  class="w-full border border-gray-300 text-md p-2 rounded-lg"
                  name="phone"
                />
              </div>

              <div class="col-span-1">
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Giới tính
                </label>
                <select class="w-full border border-gray-300 text-md p-2 rounded-lg">
                  <option value="">Nam</option>
                  <option value="">Nữ</option>
                </select>
              </div>

              <div class="col-span-1">
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Hình thức thanh toán
                </label>
                <select class="w-full border border-gray-300 text-md p-2 rounded-lg">
                  <option value="">Tiền mặt</option>
                  <option value="">Chuyển khoản</option>
                </select>
              </div>
            </div>
          </fieldset>
        </div>
        <div>
          <fieldset class="border border-solid border-gray-300 p-3">
            <legend class="text-lg text-gray-500 font-bold">Thông tin sân</legend>
            <div>
              <label
                for="loai-san"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Loại sân</label
              >
              <input
                type="text"
                class="w-full border border-gray-300 text-md p-2 rounded-lg"
                value="5"
                readonly
              />

              <label
                for="so-gio"
                class="mt-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Tên sân</label
              >
              <input
                type="text"
                class="w-full border border-gray-300 text-md p-2 rounded-lg"
                value="A5.1"
                readonly
              />

              <label
                for="so-gio"
                class="mt-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Giá tiền</label
              >
              <input
                type="text"
                class="w-full border border-gray-300 text-md p-2 rounded-lg"
                value="250.000đ/h"
                readonly
              />
            </div>
          </fieldset>
          <fieldset class="border border-solid border-gray-300 p-3">
            <legend class="text-lg text-gray-500 font-bold">Chức năng</legend>
            <div>
              <button
                class="w-full bg-green-500 text-white border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
              >
                Đặt sân
              </button>
              <button
                class="w-full border bg-red-500 text-white border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
              >
                Huỷ
              </button>
              <button
                class="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
              >
                Làm mới
              </button>
            </div>
          </fieldset>
        </div>
      </div>
      <p class="text-md font-medium text-gray-900 dark:text-white mt-5 mb-3">
        <span class="text-red-500">(*)</span> Theo quy định của sân bóng bạn phải cọc trước 100.000đ
        để giữ sân.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookingPage',
  data() {
    return {
      tab: '',
      pitch: '',
      pitch_type: 5,
      date: new Date().toISOString().slice(0, 10)
    }
  },
  created() {
    this.tab = this.$route.query.tab
    console.log(this.tab)
  }
}
</script>
