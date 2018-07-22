<template>
  <div class="sidebar">
    <slot />
  </div>
</template>


// <style lang="scss" >
.sidebar {

  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  background-color: rgb(242, 242, 242);
  overflow-x: hidden;
  padding-top: 20px;
  a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;


    display: block;
  }

  a:hover {
    color: #2c3e50;
  }
}

.sidebar--hide {
  display: none;
}

.content--move {
  margin-left: 150px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
}
</style>