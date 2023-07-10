<template>
  <div
    :class="{'z-10 opacity-0 pointer-events-none after:animate-preloaded before:animate-preloaded': !isPreloader}"
    class="fixed flex inset-0 after:absolute after:w-1/2 after:h-full after:bg-dark after:left-0 after:top-0 before:absolute before:w-1/2 before:h-full before:bg-dark before:right-0 before:top-0 z-50"
  >
    <div
      :class="{'!h-full opacity-0 pointer-events-none after:opacity-0': !isPreloader}"
      class="w-[1px] h-[250px] m-auto relative z-50 overflow-hidden duration-300 after:absolute after:w-full after:h-full after:bg-[#777] after:left-0 after:top-0 after:animate-lineround before:absolute before:w-full before:h-0 before:bg-white before:left-0 before:top-1/2 before:-translate-y-1/2 before:animate-lineheight"/>
  </div>
</template>

<script>
export default {
  props: {
    isPreloader: {
      type: Boolean,
      default: true
    }
  }
}
</script>
