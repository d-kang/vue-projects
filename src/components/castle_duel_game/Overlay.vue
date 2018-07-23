<template>
  <div class="overlay" @click="handleClick" >
    <div class="content">
      <slot />
    </div>
  </div >
</template>


<script>
export default {
  methods: {
    handleClick() {
      this.$emit('close');
    },
  },
  // render() {
  //   return (
  //     <div class="overlay" onClick={this.handleClick} >
  //       <div class="content">
  //         { this.$slots.default }
  //       </div>
  //     </div >
  //   )
  // }
}
</script>
