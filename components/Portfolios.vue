<template>
  <section class="bg-gray-50 relative pt-[100px] pb-[100px] lg:pb-[200px]">
    <div class="container">
      <SectionTitle title="Portfolios"/>

      <nav class="mb-10 space-x-5">
        <button
          data-filter="*"
          :class="`filter-button ${selCategory === '*' ? 'active': 'in-active'}`"
        >
          All
        </button>

        <button
          :data-filter="category"
          v-for="category in categories"
          :class="`filter-button ${selCategory === category ? 'active': 'in-active'}`"
        >
          {{ category }}
        </button>

      </nav>


      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
        <div v-for="portfolio in portfolios" class="relative duration-400 rounded-md overflow-hidden hover:drop-shadow-portfolio">
          <a href="/" target="_blank">
<!--            <img :src="require(`/static/images/${portfolio.thumb}`)" :alt="portfolio.title">-->
            {{ portfolio.title }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from "~/data/portfolios.json";

export default {
  name: "Portfolios",
  data() {
    return {
      selCategory: "*",
      portfolios: data,
      categories: []
    }
  },
  mounted() {
    const filteredCategories = this.portfolios.map(portfolio => portfolio.categories);
    this.categories = [...new Set(filteredCategories.flat())];
  }
}
</script>

<style scoped>
.filter-button {
  @apply text-black capitalize font-medium relative;
}

.filter-button.active {
  @apply after:absolute after:h-[6px] after:w-[6px] after:rounded-full after:bg-slate-700 after:left-1/2 after:-translate-x-1/2 after:-bottom-1;
}
</style>
