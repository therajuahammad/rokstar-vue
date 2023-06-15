<template>
  <section
    id="hero"
    :style="{backgroundImage: `url(${heroBg})`}"
    class="relative bg-cover bg-no-repeat bg-center-top h-[300px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[800px] flex items-center"
  >
    <div class="container">
      <div class="mt-8 font-light">
        <h1 class="text-white font-light text-3xl sm:text-[45px] md:text-[55px] leading-none">I'M LUCY DOE</h1>
        <h2 class="text-white font-light text-md sm:text-lg tracking-4 mt-2 sm:mt-4">WEB DEVELOPER</h2>
      </div>
    </div>

    <Shape
      class="hidden md:block"
    />
  </section>
</template>

<script>
import heroBgImg from "~/static/images/hero-bg.jpg"

export default {
  name: "HeroArea",
  data() {
    return {
      heroBg: heroBgImg
    }
  },
}
</script>

<style scoped>

</style>
