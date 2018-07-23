<template>
  <div class="toggle-nav" :class="toggled" @click="$store.commit('flipSidebar')">
    &nbsp;
  </div>
</template>


<script>
export default {
  computed: {
    toggled() {
      return this.$store.state.showSidebar ? 'toggle-nav--close' : ''
    }
  }
}
</script>


<style lang="scss" scoped>
// <template>
//   <button class="sidebar__button" @click="$store.commit('flipSidebar')">
//     <svg v-if="$store.state.showSidebar" width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><path d="M12.537 14.946a.714.714 0 0 0 .463-.66V5.714a.715.715 0 0 0-.463-.66.777.777 0 0 0-.817.155l-4.5 4.286A.696.696 0 0 0 7 10a.7.7 0 0 0 .22.505l4.5 4.286a.777.777 0 0 0 .817.155"></path></svg>
//     <svg v-else class="tw-svg__asset tw-svg__asset--glypharrright tw-svg__asset--inherit" width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><path d="M7.463 5.054a.714.714 0 0 0-.463.66v8.572c0 .289.183.55.463.66.28.11.603.05.817-.155l4.5-4.286A.696.696 0 0 0 13 10a.7.7 0 0 0-.22-.505L8.28 5.21a.777.777 0 0 0-.817-.155"></path></svg>
//   </button>
// </template>

.toggle-nav {
  z-index: 1000;
  background-attachment: scroll;
  background-clip: border-box;
  background-color: black;
  background-color: rgba(0, 0, 0, 0);
  background-image: url(https://www.google.com/forms/about/images/icons-2x.png);
  background-origin: padding-box;
  background-position-x: 0px;
  background-size: 88px;
  cursor: pointer;
  display: block;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-stretch: 100%;
  font-style: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-weight: 400;
  line-height: 26.672px;
  overflow-x: hidden;
  overflow-y: hidden;
  position: absolute;
  text-indent: 100%;
  text-size-adjust: 100%;
  top: 0px;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  /* default open */
  background-position-y: -213px;
  height: 22px;
  left: 0px;
  width: 28px;
}


.toggle-nav--close {
  background-position-y: -188px;
  color: rgb(125, 125, 125);
  height: 25px;
  left: 3px;
  width: 25px;
}


</style>

