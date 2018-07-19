(function() {
  /**
   * Overlay-content-player-turn shows the beginning of the turn
   *    • The first overlay will display two different messages to the current
   *      player, depending on whether it is skipping their turn or not.
   *    • The player prop will receive the current player so that we can access
   *      its data.
   *    • We will use a v-if directive paired with a v-else directive and the
   *      skipTurn property we just added to the players
   *
   * Overlay-content-last-play displays the last card played by the opponent
   *
   * Overlay-content-game-over shows when the game is over
   *     • player-result that will show whether a player is victorious or defeated.
   *     • We will display the name of the player passed with a prop.
   *     • We will compute the result for this player with a computed property,
   *       which we will also use as a dynamic CSS class
   */

  const template = `
    <div class="overlay" @click="handleClick">
      <div class="content">
        <slot />
      </div>
    </div>
  `

  const methods = {
    handleClick() {
      console.log('click ran Overlay')
      this.$emit('close')
    }
  }
  Vue.component('Overlay', {
    template,
    methods,
  })

  /* overlay-content-player-turn */
  Vue.component('overlay-content-player-turn', {
    template: `
      <div>
        <div class="big" v-if="player.skipTurn">
          {{ player.name }},
          <br>
          your turn is skipped!
        </div>
        <div class="big" v-else>
          {{ player.name }},
          <br>your turn has come!
        </div>
        <div>Tap to continue</div>
      </div>
    `,
    props: ['player'],
  })

  /* overlay - content - last - play */
  Vue.component('overlay-content-last-play', {
    template: `
    <div>
      <div v-if="opponent.skippedTurn">{{ opponent.name }} turn was skipped!</div>
      <template v-else>
        <div>{{ opponent.name }} just played:</div>
        <card :def="lastPlayedCard" />
      </template>
    </div>
  `,
    props: ['opponent'],
    computed: {
      lastPlayedCard() {
        return utils.getLastPlayedCard(this.opponent)
      },
    },
  })



  /* overlay-content-game-over */
  Vue.component('player-result', {
    template: `
    <div class="player-result" :class="result">
      <span class="name">{{ player.name }}</span> is
      <span class="result">{{ result }}</span>
    </div>
    `,
    props: ['player'],
    computed: {
      result() {
        return this.player.dead ? 'defeated' : 'victorious'
      },
    },
  })

  Vue.component('overlay-content-game-over', {
    template: `
    <div>
      <div class="big">Game Over</div>
      <player-result v-for="(player, i) in players" :key="i" :player="player" />
    </div>`,
    props: ['players'],
  })


})();