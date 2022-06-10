<template>
  <div>
    <header>
      <ScHeader />
    </header>
    <router-view />
    <ScFooter />
  </div>
</template>

<script>
// import Navigation from '@/components/Navigation'
import ScHeader from '@/components/Header.vue'
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
