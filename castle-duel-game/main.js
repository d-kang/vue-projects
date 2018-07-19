(function() {
  const template = `
    <div>
      <top-bar
        :turn="turn"
        :players="players"
        :current-player-index="currentPlayerIndex"
      />
      <transition name="hand">
        <hand
          v-if="!activeOverlay"
          :cards="testHand"
          @card-play-event="testPlayCard"
        />
      </transition>

      <overlay><overlay-content-player-turn:player="players[0]" /></overlay>

      <overlay><overlay-content-last-play:opponent="players[1]"/></overlay>

      <overlay><overlay-content-game-over:players="players" /></overlay>

    </div>
  `

  const methods = {
    handlePlayCard(card) {
      console.log('3. handlePlayCard')
      this.testPlayCard(card)
    },
    createTestHand() {
      const cards = []
      const ids = Object.keys(this.CARDS)
      for (let i = 0; i < 5; i++) {
        cards.push(this.testDrawCard())
      }
      return cards
    },
    testDrawCard() {
      const ids = Object.keys(this.CARDS)
      const randomId = ids[Math.floor(Math.random() * ids.length)]
      return {
        uid: gameState.cardUid++,
        id: randomId,
        def: this.CARDS[randomId],
      }
    },
    testPlayCard(card) {
      // Remove the card from player hand
      console.log('3. testPlayCard')
      const index = this.testHand.indexOf(card)
      this.lastPlayedCard = this.testHand.splice(index, 1)[0]
    },

  }

  const state = initializeState();
  Vue.config.productionTip = false

  new Vue({
    el: '#app',
    name: 'Game',
    template,
    data: state,
    methods,
    created() {
      this.testHand = this.createTestHand()
    },
    computed: {},
  })

  window.addEventListener('resize', (e) => {
    state.worldRatio = gameState.getWorldRatio()
  })

})();
