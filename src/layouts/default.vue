<template>
  <div>
    <header>
      <ScHeader />
    </header>
    <div class="single-product-area">
      <div class="zigzag-bottom"></div>
      <div class="container">
        <div class="row">
          <!-- <ScSidebar /> -->
          <router-view />
        </div></div></div>
    <ScFooter />
  </div>
</template>

<script>
// import Navigation from '@/components/Navigation'
import ScHeader from '@/components/Header_1.vue'
import ScFooter from '@/components/Footer.vue'

export default {
  name: 'defaultLayout',
  components: {
    // Navigation,
    ScHeader,
    ScFooter
  }
}
</script>
