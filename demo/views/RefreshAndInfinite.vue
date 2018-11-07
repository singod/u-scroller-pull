<template>
  <div>
    <v-scroller css-class="custom-clazz" :onRefresh="onRefresh" :enableInfinite="false">
      <h1 class="plugin-name">Refresh</h1>
      <div :class="['row', index % 2 === 1 ? 'grey-bg' : '']" v-for="(item, index) in list" :key="index">滚动区域内容{{index + 1}}</div>
    </v-scroller>


  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [...Array(15)]
      }
    },
    methods: {
      onRefresh(done) {
        setTimeout(() => {
          done()
        }, 2000)
      },
      onInfinite(done) {
        setTimeout(() => {
          if (this.list.length > 20) {
            done(false)
            return
          }
          this.list = [...this.list, ...Array(10)]
          done(true)
        }, 2000)
      }
    }
  }
</script>

<style scoped>

  html, body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  }

  .plugin-name {
    margin: 0;
    text-align: center;
    color: #666;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-weight: normal;
    font-stretch: normal;
    font-size: 24px;
    line-height: 48px;
    background: #f2f2f2;
  }

  .plugin-name {
    font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
  }

  .row {
    display: block;
    width: 100%;
    height: 50px;
    padding: 10px 0 10px 15px;
    font-size: 16px;
    line-height: 30px;
    color: #444;
    background-color: #ffffff;
  }

  .grey-bg {
    background-color: #eee;
  }

</style>
