<template>
  <div :class="`mb-12 ${classes}`">
    <h2
      class="text-3xl font-heading tracking-normal text-dark pb-4 relative before:absolute before:left-0 before:bottom-0 before:h-[5px] before:w-[55px] before:bg-dark after:absolute after:left-0 after:bottom-[2px] after:h-[1px] after:w-[255px] after:bg-dark"
    >
      {{ title }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: {
      type: String,
      default: ""
    },
    classes: {
      type: String,
      default: ""
    },
  },
}
</script>

<style scoped>

</style>
