(function() {
  const template = `
    <div class="hand">
      <div class="wrapper">
        <transition-group name="card" class="cards">
          <card v-for="(c, i) in cards" :key="c.uid" :def="c.def" @play-event="handlePlay(c)" />
        </transition-group>
      </div>
    </div>
  `
  Vue.component('hand', {
    template,
    props: ['cards'],
    methods: {
      handlePlay(card) {
        console.log('2. handlePlay');
        this.$emit('card-play-event', card)
      },
    },
  })


})();