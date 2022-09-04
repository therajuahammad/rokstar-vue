<template>
  <section class="py-[100px]">
    <div class="container">
      <SectionTitle
        title="Get In Touch"
      />

      <div class="grid grid-cols-1 md:grid-cols-12">
        <div class="col-span-5">
          <div class="font-medium space-y-2">
            <address class="not-italic">
              100 Main St, Blacktown NSW 2148,<br/>
              Australia
            </address>
            <p>support@bold.com, info@youremail.com</p>
            <p>+256-4516-556, +(257) 56812749</p>
          </div>

          <SocialMedia :icons="socialIcons" class="mt-6 md:mt-10"/>
        </div>

        <div class="col-span-7 mt-10 md:mt-0">
          <ContactForm/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from "~/data/about.json";

export default {
  name: "Contact",
  data() {
    return {
      socialIcons: data.socialMedia
    }
  }
}
</script>

<style scoped>

</style>
