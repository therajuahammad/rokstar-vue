<template>
  <div>
    <Preloader :is-preloader="isPreloader"/>
    <Header/>
    <HeroArea/>
    <About/>
    <Services/>
    <Portfolios/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: 'HomePage',

  data() {
    return {
      isPreloader: true
    }
  },

  mounted() {
    setTimeout(() => {
      this.isPreloader = false
    }, 400);
  },
}
</script>
