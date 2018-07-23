<template>
  <div id="app" class="app-container">
    <Sidebar class="sidebar" :class="{'sidebar--hide': !$store.state.showSidebar}">
      <div>
        <router-link to="/markdown-notebook">Markdown Notebook</router-link> |
        <router-link to="/castle-duel-game">Castle Duel Game</router-link>
      </div>
    </Sidebar>
    <router-view
      class="content"
      :class="{'content--move': $store.state.showSidebar}"
      />

  </div>
</template>


<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: { Sidebar },
  created() {
    console.log('this', this)
    console.log('this.$store', this.$store)
  },
}
</script>



<style lang="scss" scoped>

// #app {
//   font-family: "Avenir", Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   color: #2c3e50;

// }

// .nav {
//   text-align: center;
//   padding: 5px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }


.sidebar__button {
  // position: relative;
  // display: inline;
  // bottom: -10px;
  // left: 1300px;
  z-index: 100;
  background-position: right 10px top 9px;
  height: 40px;
	margin-top: 10px;
	border: 1px solid #e6e6e6;
	padding-left: 15px;
	padding-right: 50px;

  background: #f5f5f5 url(http://i.imgur.com/5xD8KRw.png);
	background-repeat: no-repeat;
	background-position: right 10px center;
}
</style>




