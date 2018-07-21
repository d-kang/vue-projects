<template>
  <div id="app" class="app-container">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/markdown-notebook">Markdown Notebook</router-link> |
      <router-link to="/castle-duel-game">Castle Duel Game</router-link>
    </div>
    <router-view class="content"/>
  </div>
</template>

<style lang="scss" scoped>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}

// .app-container {
//   display: flex;
//   flex-flow: column;
//   height: 100%;
// }

// .nav {
  // flex: 0 1 auto;
  /* The above is shorthand for:
  flex-grow: 0,
  flex-shrink: 1,
  flex-basis: auto
  */
// }

// .content {
  // flex: 1 1 auto;
  // display: flex;
  // flex-direction: column;
// }

.nav {
  text-align: center;
  padding: 5px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
