<template>
  <header class="fixed bg-dark left-0 top-0 w-full z-30 duration-400 py-2 md:py-5">
    <div class="container">
      <diV class="sm:flex items-center justify-between">
        <diV class="flex items-center justify-between">
          <Logo/>

          <button class="sm:hidden" @click.prevent="handleShowMobileMenu">
            <Hamburger :isActive="showMobileMenu"/>
          </button>
        </diV>

        <!-- Desktop Navbar -->
        <Navbar/>

        <!-- Mobile Navbar -->
        <nav
          class="bg-black overflow-hidden duration-300 sm:hidden"
          :class="{'mt-3 h-[160px]': showMobileMenu, 'mt-0 h-0': !showMobileMenu}"
        >
          <MobileMenu/>
        </nav>
      </diV>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showMobileMenu: false
    }
  },
  methods: {
    handleShowMobileMenu() {
      this.$data.showMobileMenu = !this.$data.showMobileMenu
    }
  }
}
</script>

<style scoped>

</style>
