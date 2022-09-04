<template>
  <div class="absolute left-0 bottom-0 w-full">
    <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5" :fill="fillColor">
      <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "/>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Shape",
  props: {
    fillColor: {
      type: String,
      default: "#FFFFFF"
    },
  },
}
</script>

<style scoped>

</style>
