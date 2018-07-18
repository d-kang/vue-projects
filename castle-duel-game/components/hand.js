(function() {
  const template = `
    <div class="hand">
      <div class="wrapper">
        <card v-for="(c, i) in cards" :key="i" :def="c.def" @play="handlePlay(c)" />
      </div>
    </div>
  `
  Vue.component('hand', {
    template,
    props: ['cards'],
    methods: {
      handlePlay(card) {
        console.log('2 handle play ran in hand.js', card)
        this.$emit('card-play', card)
      },
    },
  })


})();