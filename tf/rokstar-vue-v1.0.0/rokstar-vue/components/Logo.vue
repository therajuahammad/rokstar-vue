<template>
  <NuxtLink class="inline-block" to="/">
    <img
      class="logo"
      v-if="variant === 'light'"
      src="~/static/images/logo-light.png"
      alt="Rokstar - Vue Portfolio Template"
    />
    <img
      class="logo"
      v-if="variant === 'dark'"
      src="~/static/images/logo-dark.png"
      alt="Rokstar - Vue Portfolio Template"
    />
  </NuxtLink>
</template>

<script>
export default {
  name: "Logo",
  props: {
    variant: {
      type: String,
      default: "light"
    }
  }
}
</script>

<style scoped>
.logo {
  width: 50px;
  height: 55px;
}
</style>
