<template>
  <section class="pt-[80px] lg:pt-[100px] pb-[60px] lg:pb-[125px]">
    <div class="container">
      <SectionTitle
        title="About Me"
        classes="lg:hidden"
      />

      <div class="md:grid grid-cols-12 items-center">
        <div class="col-span-4 sm:text-center md:text-left">
          <div
            class="inline-block md:block leading-none drop-shadow-thumb relative sm:before:absolute sm:before:bottom-[-20px] lg:before:bottom-[-45px] sm:before:right-[-25px] sm:before:border-2 sm:before:border-white-light sm:before:h-full sm:before:w-[calc(100%-20px)] sm:before:rounded-br-3xl"
          >
            <img
              class="rounded-md thumb relative z-10"
              alt="Rokstar - Vue Portfolio Template"
              :src="require(`~/static/images/${about.thumb}`)"
            />
          </div>
        </div>

        <div class="col-start-6 col-end-13">
          <div class="mt-5 sm:mt-10 md:mt-0">
            <SectionTitle
              title="About Me"
              className="hidden lg:block"
            />

            <div v-html="about.bio"/>

            <SocialMedia :icons="about.socialMedia" classes="mt-10"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from "~/data/about.json"

export default {
  name: "About",
  data() {
    return {
      about: data,
    }
  },
}
</script>

<style scoped>
img.thumb {
  width: 350px;
  height: 470px;
}
</style>
