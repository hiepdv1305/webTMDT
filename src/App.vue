<template>
  <div id="app">
    <notifications group="foo" />
    <vue-extend-layouts loading="loading" />
  </div>
</template>

<script>
import VueExtendLayouts from 'vue-extend-layout'
import api from './api/api'
export default {
  name: 'App',
  components: { VueExtendLayouts },
  data () {
    return {
      winners: []
    }
  },
  mounted () {
    this.getAllWinner()
  },
  methods: {
    async getAllWinner () {
      let today = new Date()
      let result = await api.getAllWinner()
      console.log(result)
      this.winners = result.data.data.Items
      this.winners.forEach(item => {
        if (today - new Date(item.createdAt)<60000) {
          this.$notify({
            group: 'foo',
            title: 'Thông báo trúng thưởng',
            text: 'Chúc mừng ' + item.username + ' đã thắng ' + item.eventName + ' với con số may mắn ' + item.result,
            duration: 10000,
            speed: 1000,
            closeOnClick: true
          })
        }
      })
    }
  }
}
</script>
