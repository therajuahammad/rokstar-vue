<template>
  <ul class="nav p-2">
    <li v-for="navItem in navItems">
      <a
        href="#"
        @click.prevent="scrollTo(navItem.href)"
        :data-hover="navItem.name.toLowerCase()"
        class="block text-white font-medium text-sm relative cursor-pointer py-1 px-3 duration-400 hover:bg-white hover:text-dark"
      >
        {{ navItem.name }}
      </a>
    </li>
  </ul>
</template>

<script>
import navItems from "~/data/navbar.json";

export default {
  name: "MobileMenu",
  data() {
    return {
      navItems
    }
  },
  methods: {
    scrollTo(target) {
      const element = document.getElementById(target);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    },
  }
}
</script>
