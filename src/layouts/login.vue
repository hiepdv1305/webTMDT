<template>
  <div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'pageLayout',
  components: { },

  data () {
    return {
      title: 'This layout is PAGE'
    }
  }
}
</script>
