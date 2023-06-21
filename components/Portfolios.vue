<template>
  <section class="bg-gray-50 relative pt-[100px] pb-[100px] lg:pb-[200px]" id="portfolio">
    <div class="container">
      <SectionTitle title="Portfolios"/>

      <nav class="mb-10 space-x-5">
        <button
          data-filter="*"
          class="filter-button"
          @click="onFilter('*')"
          :class="{active: selCategory === '*'}"
        >
          All
        </button>

        <button
          :data-filter="category"
          @click="onFilter(category)"
          v-for="category in categories"
          :class="`filter-button ${selCategory === category ? 'active': 'in-active'}`"
        >
          {{ category }}
        </button>
      </nav>


      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
        <div
          :key="index"
          v-for="(portfolio, index) in portfolios"
          class="relative duration-400 rounded-md overflow-hidden hover:drop-shadow-portfolio"
        >
          <div v-if="portfolio?.type === 'video'" class="absolute w-full h-full left-0 top-0 bg-black opacity-25"/>
          <img
            class="cursor-pointer"
            :alt="portfolio.title"
            :src="portfolio.thumbnail"
            @click="handleLightGalleryBox(portfolio)"
          />
          <button
            v-if="portfolio?.type === 'video'"
            @click="handleLightGalleryBox(portfolio)"
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-white z-40"
          >
            <Fa :icon="['fa-regular', 'circle-play']"/>
          </button>
        </div>
      </div>
    </div>
    <Shape/>
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
      categories: [],
      lightboxOpen: false,
      lightboxIndex: 0
    }
  },
  mounted() {
    const filteredCategories = this.portfolios.map(portfolio => portfolio.categories);
    this.categories = [...new Set(filteredCategories.flat())];
  },
  methods: {
    onFilter(category) {
      this.selCategory = category;
      const portfolioFiltered = data.map(portfolio => {
        return {
          ...portfolio,
          category: portfolio.categories.find(cate => cate === category)
        }
      }).filter(item => item.category === category);

      category === "*" ? this.portfolios = data : this.portfolios = portfolioFiltered;
    },

    handleLightGalleryBox(item) {
      this.$silentbox.open(item)
    }
  },
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
