<template>
  <section class="footer">
      <div class="container">
        <div class="row py-5">
          <div class="col-12 my-auto">
            <p class="text-center footer-text">get in touch</p>
            <div class="icons-tray">
              <a v-for="brand in brands" :key="brand.icon" :href="brand.link" target="_blank" class="social-link">
                <i :class="'text-[#ff6600] fa-brands fa-' + brand.icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>
<script lang="ts" setup>

const brands = ref([
  {
    icon: 'github',
    link: 'https://github.com/clintlosee'
  },
  {
    icon: 'instagram',
    link: 'https://instagram.com/clintlosee'
  },
  {
    icon: 'facebook',
    link: 'https://facebook.com/clintlosee'
  },
  {
    icon: 'linkedin',
    link: 'https://linkedin.com/in/clintlosee'
  },
  {
    icon: 'x-twitter',
    link: 'https://x.com/clintlosee'
  },
  // {
  //   icon: 'codepen',
  //   link: 'https://codepen.io/'
  // },
])
</script>
