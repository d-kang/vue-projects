(function() {
  const template =`
    <div>
      <top-bar
        :turn="turn"
        :players="players"
        :current-player-index="currentPlayerIndex"
      />
      <card
        :def="testCard"
        @play = "handlePlay"
      />
    </div>`

  const state = initializeState();

  new Vue({
    el: '#app',
    name: 'Game',
    template,
    data: state,
    methods: {
      handlePlay() {
        console.log('you played a card!')
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
    },
    created() {
      this.testHand = this.createTestHand()
    },
    computed: {
      testCard() {
        return this.CARDS.archers
      }
    },

  })

  window.addEventListener('resize', (e) => {
    state.worldRatio = getWorldRatio()
  })

})();
