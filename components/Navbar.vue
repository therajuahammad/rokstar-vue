<template>
  <nav class="navbar hidden sm:block">
    <ul class="nav flex space-x-10">
      <li v-for="navItem in navItems">
        <a
          href="#"
          class="navitem"
          @click.prevent="scrollTo(navItem.href)"
          :data-hover="navItem.name.toLowerCase()"
          :target="checkExternalLink(navItem.href) ? '_blank' :'_self'"
        >
          <span class="block duration-300">{{ navItem.name }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import navItems from "~/data/navbar.json";

export default {
  name: "Navbar",
  data() {
    return {
      navItems
    }
  },

  methods: {
    checkExternalLink(text) {
      const checkHttp = text.indexOf("http");

      return Boolean(checkHttp > -1);
    },
    scrollTo(target) {
      const element = document.getElementById(target);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    },
  },
}
</script>

<style scoped>
.navitem {
  @apply block text-white font-medium text-sm relative cursor-pointer after:duration-300 after:content-[attr(data-hover)] after:absolute after:left-1/2 after:top-3/4 after:whitespace-nowrap after:opacity-0 after:-translate-x-1/2 hover:after:top-1/2 hover:after:opacity-100 after:hover:-translate-x-1/2 after:hover:-translate-y-1/2
}

.navitem:hover span {
  transform: translate3d(0, -12px, 0);
  @apply opacity-0;
}
</style>
