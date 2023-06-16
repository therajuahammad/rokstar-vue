<template>
  <span class="relative" :class="{'group active': isActive}">
      <span class="relative flex overflow-hidden items-center justify-center transform transition-all duration-200"
      >
          <span class="flex flex-col justify-between h-[20px] transform transition-all duration-300 origin-center overflow-hidden"
          >
              <span class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-[.active]:translate-x-10"/>
              <span class="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-[.active]:translate-x-10 delay-75"/>
              <span class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-[.active]:translate-x-10 delay-150"/>

              <span class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-[.active]:translate-x-0 flex w-0 group-[.active]:w-12"
              >
                  <span class="absolute bg-white h-[2px] w-7 transform transition-all duration-500 rotate-0 delay-300 group-[.active]:rotate-45"/>
                  <span class="absolute bg-white h-[2px] w-7 transform transition-all duration-500 -rotate-0 delay-300 group-[.active]:-rotate-45"/>
              </span>
          </span>
      </span>
  </span>
</template>

<script>
export default {
  name: "Hamburger",
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
