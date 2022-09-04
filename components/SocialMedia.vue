<template>
  <div class="flex items-center">
    <h5 class="text-base mr-5 leading-none">Share:</h5>
    <ul class="flex space-x-4">
      <li v-for="icon in icons">
        <a :href="icon.link" target="_blank" rel="noopener">
          <Fa :icon="['fa-brands', icon.iconName]"/>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SocialMedia",
  props: {
    icons: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>

</style>
