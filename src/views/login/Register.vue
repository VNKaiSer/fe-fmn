<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div
      class="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
    >
      <!-- left side -->
      <div class="flex flex-col justify-center p-8 md:p-14">
        <span class="mb-3 text-4xl font-bold">Đăng kí</span>
        <span class="font-light text-gray-400 mb-8"> Tạo tài khoản </span>
        <!-- form -->
        <form method="post" @submit.prevent="validateLoginForm()">
          <div class="py-4">
            <span class="mb-2 text-md">Email</span>
            <input
              v-model="email"
              placeholder="Nhập email"
              type="email"
              class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
            />
          </div>
          <div class="py-4">
            <span class="mb-2 text-md">Mật khẩu</span>
            <input
              v-model="password"
              placeholder="Nhập mật khẩu"
              type="password"
              name="pass"
              id="pass"
              class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div class="py-4">
            <span class="mb-2 text-md">Xác nhận mật khẩu</span>
            <input
              v-model="repeat_password"
              placeholder="Xác nhận mật khẩu"
              type="password"
              name="pass"
              id="pass"
              class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <!-- <div class="flex justify-between w-full py-4">
            <div class="mr-24">
              <input type="checkbox" name="ch" id="ch" class="mr-2" />
              <span class="text-md">Ghi nhớ 30 ngày</span>
            </div>
            <span class="font-bold text-md">Quên mật khẩu</span>
          </div> -->
          <button
            type="submit"
            class="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Đăng kí
          </button>
        </form>
        <div class="text-center text-gray-400">
          Đã có tài khoản?
          <span class="font-bold text-black">
            <router-link to="/login">Đăng nhập</router-link>
          </span>
        </div>
      </div>
      <!-- {/* right side */} -->
      <div class="relative">
        <img
          src="@/assets/images/nen-chinh.jpg"
          alt="img"
          class="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
        />
        <!-- text on image  -->
        <div
          class="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
        >
          <span class="text-white text-xl"
            >We've been uesing Untitle to kick"<br />start every new project and can't <br />imagine
            working without it."
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/api/AuthenticationService'

export default {
  name: 'RegisterPage',
  data() {
    return {
      email: '',
      password: '',
      repeat_password: ''
    }
  },
  mounted() {},
  methods: {
    validateLoginForm() {
      if (!this.email) {
        this.$notify({
          title: 'Cảnh báo',
          text: 'Gmail chưa được nhập',
          type: 'warn',
          duration: 3000
        })
        return false
      }
      if (!this.password) {
        this.$notify({
          title: 'Error',
          text: 'Mật khẩu chưa được nhập',
          type: 'warn',
          duration: 3000
        })
        return false
      }

      if (this.password !== this.repeat_password) {
        this.$notify({
          title: 'Error',
          text: 'Xác nhận mật khẩu không khớp',
          type: 'warn',
          duration: 3000
        })
        return false
      }

      // validate thành công tiến hành đăng kí
      this.register()
    },
    register() {
      AuthenticationService.register({
        user_name: this.email,
        password: this.password
      })
        .then(() => {
          this.$notify({
            title: 'Thông báo',
            text: 'Đăng kí thành công',
            type: 'success',
            duration: 3000
          })
          this.$router.push({ name: 'login' })
        })
        .catch((err) => {
          this.$notify({
            title: 'Lỗi',
            text: 'Đăng kí thất bại',
            type: 'error',
            duration: 3000
          })
          console.log(err)
        })
    }
  }
}
</script>
