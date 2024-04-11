<template>
  <div
    class="h-screen bg-cover bg-no-repeat"
    style="
      background-image: url('https://cdn.vox-cdn.com/uploads/chorus_asset/file/22726052/SPILLER_SCHED_1.jpg');
    "
  >
    <div class="text-2xl font-bold items-center mt-[100px] absolute ml-5">
      <p>
        <img
          src="https://images.cooltext.com/5695469.png"
          width="700"
          height="194"
          alt="Mừng đã đến sân bóng Bạch Trữ"
        />
      </p>
      <button
        class="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white mt-5"
      >
        <a href="/home/booking" title="Đặt sân cho trận đấu của bạn">ĐẶT SÂN</a>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  mounted() {
    console.log('home page')
    const token = this.$cookies.get('token')
    console.log(token)
    if (!token) {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
