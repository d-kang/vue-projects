<script>
  export default {
    methods: {
      handleClick() {
        console.log('click ran Overlay');
        this.$emit('close');
      },
    },
    render() {
      return (
        <div class="overlay" on-click="handleClick" >
          <div class="content">
            { this.$slots.default }
          </div>
        </div >
      )
    }
  }
</script>




