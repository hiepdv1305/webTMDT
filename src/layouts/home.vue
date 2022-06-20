<template>
  <div>
    <header>
      <ScHeader />
    </header>
    <div class="home">
    <body class="left-sidebar">
        <div id="page" class="hfeed site">
            <div id="content" class="site-content" tabindex="-1">
              <router-view />
              <ScSidebar />
              </div><!-- #content -->
        </div><!-- #page -->
    </body>
  </div>
    <ScFooter />
  </div>
</template>

<script>
// import Navigation from '@/components/Navigation'
import ScHeader from '@/components/Header_1.vue'
import ScFooter from '@/components/Footer.vue'
import ScSidebar from '@/components/Sidebar.vue'
export default {
  name: 'defaultLayout',
  components: {
    ScSidebar,
    ScHeader,
    ScFooter
  }
}
</script>
