(function() {
  const template = `
    <div class="top-bar" :class="'player-' + currentPlayerIndex">
      <div class="player p0">{{ players[0].name }}</div>
      <div class="turn-counter">
        <img class="arrow" src="svg/turn.svg" />
        <div class="turn">Turn {{ turn }}</div>
      </div>
      <div class="player p1">{{ players[1].name }}</div>
    </div>
  `

  Vue.component('TopBar', {
    template,
    data() {
      return {}
    },
    methods: {},
    props: ['turn', 'players', 'currentPlayerIndex'],

  })
})();