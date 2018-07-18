(function() {
  const template =`
    <div>
      <top-bar
        :turn="turn"
        :players="players"
        :current-player-index="currentPlayerIndex"
      />
      <card :def="testCard"  @play="handlePlay" />
      <transition name="hand">
        <hand
          v-if="!activeOverlay"
          :cards="testHand"
          @card-play="handlePlayCard"
        />
      </transition>
    </div>`

  const state = initializeState();

  new Vue({
    el: '#app',
    name: 'Game',
    template,
    data: state,
    methods: {
      handlePlayCard() {
        console.log('3 handlePlayCard ran!')
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
        const index = this.testHand.indexOf(card)
        this.testHand.splice(index, 1)
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
    state.worldRatio = gameState.getWorldRatio()
  })

})();
