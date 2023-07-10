<template>
  <div class="service-area relative pb-[100px] lg:pb-[200px]">
    <div class="container md:grid md:grid-cols-3 lg:gap-7">
      <div v-for="service in services" class="service group">
        <div class="mr-4 bg-white group-hover:bg-gray-50 relative flex-shrink-0 self-start w-[50px] md:w-auto">
          <img :src="require(`~/static/images/${service.icon}`)" :alt="service.title">
        </div>

        <div>
          <h2 class="font-semibold text-base mb-3">{{ service.title }}</h2>
          <p>{{ service.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '~/data/services.json'

export default {
  name: "Services",
  data() {
    return {
      services: data
    }
  },
}
</script>

<style scoped>
.service {
  @apply relative flex px-3 py-5 rounded-md duration-300 hover:bg-gray-50 before:absolute before:left-10 before:top-9 before:h-[calc(100%-60px)] before:w-[1px] before:bg-gray-300 after:absolute after:left-9 after:bottom-4 after:h-[10px] after:w-[10px] after:rounded-full after:bg-gray-300;
}
</style>
