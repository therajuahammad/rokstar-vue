<template>
  <form>
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
      <h4>11 + {{ noForVerify }} = </h4>
      <input
        required
        type="text"
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
export default {
  name: "ContactForm",
  data() {
    return {
      noForVerify: 0,
      isSubmitting: false
    }
  },
  mounted() {
    this.noForVerify = Math.round(Math.random() * 11);
  }
}
</script>

<style scoped>

</style>
