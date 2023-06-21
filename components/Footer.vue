<template>
  <footer class="bg-gray-50 pt-10 md:pt-14 lg:pt-5 pb-5 relative">
    <div class="container">
      <div class="text-center lg:text-left lg:flex justify-between items-center">
        <Logo variant="dark"/>

        <p>
          &copy; Rokstar {{ new Date().getFullYear() }}, Made with
          <Fa
            class="inline text-red-600"
            :icon="['fa-solid', 'heart']"
          />
          By Divergent Studio.
        </p>
      </div>
    </div>

    <button
      @click="scrollToTop"
      class="absolute left-1/2 -top-[35px] -translate-x-1/2 bg-white w-14 md:w-[70px] h-14 md:h-[70px] rounded-full text-center shadow-scroll-top"
    >
      <Fa :icon="['fa-solid', 'angle-up']" class="inline text-2xl mt-2"/>
    </button>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }
}
</script>
