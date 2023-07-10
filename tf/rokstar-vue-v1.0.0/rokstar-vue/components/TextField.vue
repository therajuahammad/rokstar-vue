<template>
  <textarea v-if="multiline" class="field" resize-none/>
  <input v-else class="field h-8 outline-none"/>
</template>

<script>
export default {
  name: "TextField",
  props: {
    multiline: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style scoped>
.field {
  @apply text-[13px] border-b-[1px] outline-none w-full border-b-neutral-200 duration-300 focus:border-b-black;
}
</style>
