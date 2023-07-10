<template>
  <form ref="form" @submit.prevent="sendEmail()">
    <div class="grid md:grid-cols-2 gap-5 md:gap-7">
      <TextField
        required
        name="name"
        placeholder="Name Here*"
      />

      <TextField
        required
        name="email"
        placeholder="Email Here*"
      />
    </div>

    <TextField
      rows="4"
      required
      multiline
      class="mt-5"
      name="message"
      placeholder="Message Here*"
    />

    <div class="flex items-center mt-5">
      <p class="!mb-0 mr-5">Are you human?</p>
      <h4>9 + {{ noForVerify }} = </h4>
      <input
        required
        type="text"
        v-model="humanTestCode"
        class="border border-neutral-200 focus:border-dark outline-0 p-2 h-8 w-16 ml-3"
      />
    </div>

    <div class="text-center md:text-right mt-5">
      <button class="bg-dark text-white text-[12px] px-6 py-3 group" type="submit" :disabled="isSubmitting">
        <span v-if="!isSubmitting">
          SEND MESSAGE
          <Fa
            :icon="['fa-regular', 'arrow-alt-circle-right']"
            class="ml-1 duration-400 group-hover:translate-x-2"
          />
        </span>
        <span v-else>
          SENDING
          <Fa
            class="icon-spin ml-1"
            :icon="['fa-solid', 'spinner']"
          />
        </span>
      </button>
    </div>
  </form>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "ContactForm",
  data() {
    return {
      noForVerify: 0,
      isSubmitting: false,
      humanTestCode: ''
    }
  },
  mounted() {
    this.noForVerify = Math.round(Math.random() * 11);
  },
  methods: {
    sendEmail() {
      const serviceId = process.env.PUBLIC_SERVICE_ID;
      const templateId = process.env.PUBLIC_TEMPLATE_ID;
      const publicId = process.env.PUBLIC_PUBLIC_KEY;

      if (parseInt(this.$data.humanTestCode) === (9 + parseInt(this.$data.noForVerify))) {
        this.$data.isSubmitting = true;
        emailjs.sendForm(serviceId, templateId, this.$refs.form, publicId)
          .then(() => {
            this.$toast.success("Thank you for contact with me!");
            this.$data.isSubmitting = false;
            this.$refs.form.reset();
          }, (error) => {
            console.log('FAILED...', error.text);
            this.$toast.error(error.text);
            this.$data.isSubmitting = false;
          });
      } else {
        console.log(this.$data.humanTestCode)
        console.log(this.$data.noForVerify)
        this.$toast.error("Number doesn't match!");
      }
    }
  }
}
</script>

<style scoped>

</style>
