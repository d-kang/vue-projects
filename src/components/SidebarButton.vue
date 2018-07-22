<template>
  <button class="sidebar__button" @click="$store.commit('flipSidebar')">
    <svg v-if="$store.state.showSidebar" width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><path d="M12.537 14.946a.714.714 0 0 0 .463-.66V5.714a.715.715 0 0 0-.463-.66.777.777 0 0 0-.817.155l-4.5 4.286A.696.696 0 0 0 7 10a.7.7 0 0 0 .22.505l4.5 4.286a.777.777 0 0 0 .817.155"></path></svg>
    <svg v-else class="tw-svg__asset tw-svg__asset--glypharrright tw-svg__asset--inherit" width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><path d="M7.463 5.054a.714.714 0 0 0-.463.66v8.572c0 .289.183.55.463.66.28.11.603.05.817-.155l4.5-4.286A.696.696 0 0 0 13 10a.7.7 0 0 0-.22-.505L8.28 5.21a.777.777 0 0 0-.817-.155"></path></svg>
  </button>
</template>


<style lang="scss" scoped>
.sidebar__button {
  align-content: center;
  align-items: flex-start;
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgb(255, 255, 255);
  background-image: none;
  background-origin: padding-box;
  background-position-x: 0%;
  background-position-y: 0%;
  background-size: auto;
  border-bottom-color: rgb(25, 23, 28);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: none;
  border-bottom-width: 0px;
  border-image-outset: 0px;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(25, 23, 28);
  border-left-style: none;
  border-left-width: 0px;
  border-right-color: rgb(25, 23, 28);
  border-right-style: none;
  border-right-width: 0px;
  border-top-color: rgb(25, 23, 28);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: none;
  border-top-width: 0px;
  box-sizing: border-box;
  cursor: default;
  margin: 0px;
  padding: 0px;
  height: 25px;
  text-align: start;
  width: 25px;
  opacity: 0.25;
  position: absolute;
}
</style>

