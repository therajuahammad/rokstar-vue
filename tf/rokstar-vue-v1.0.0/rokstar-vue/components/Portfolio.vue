<template>
  <div class="relative duration-400 rounded-md overflow-hidden hover:drop-shadow-portfolio">
    <div v-if="portfolio?.type === 'video'" class="absolute w-full h-full left-0 top-0 bg-black opacity-25"/>
    <img
      class="cursor-pointer"
      :alt="portfolio?.title"
      :src="portfolio?.thumbnail"
      @click="handleLightGalleryBox(portfolio)"
    />
    <button
      v-if="portfolio?.type === 'video'"
      @click="handleLightGalleryBox(portfolio)"
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-white z-10"
    >
      <Fa :icon="['fa-regular', 'circle-play']"/>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    portfolio: {
      type: Object,
      default: {}
    }
  },

  methods:{
    handleLightGalleryBox(item) {
      this.$silentbox.open(item)
    }
  }
}
</script>

<style scoped>

</style>
