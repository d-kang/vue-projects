<template>
  <div class="castle-duel-game">
    <Topbar
      :turn="turn"
      :players="players"
      :current-player-index="currentPlayerIndex"
    />
    <transition name="hand">
      <Hand
        v-if="!activeOverlay"
        :cards="testHand"
        @card-play-event="testPlayCard"
      />
    </transition>

    <!-- <overlay>
      <PlayerTurn :player="players[0]" />
    </overlay> -->

    <!-- <overlay>
      <LastPlay :opponent="players[1]"/>
    </overlay>

    <overlay>
      <Gameover :players="players" />
    </overlay> -->

  </div>
</template>


<script>
import Topbar from '@/components/castle_duel_game/components/Topbar.vue'
import Hand from '@/components/castle_duel_game/components/Hand.vue'
import { initializeState, gameState, worldRatio } from './state'


import Overlay from '@/components/castle_duel_game/components/Overlay.vue'
import PlayerTurn from '@/components/castle_duel_game/components/overlay_content/PlayerTurn.vue'
import LastPlay from '@/components/castle_duel_game/components/overlay_content/LastPlay.vue'
import Gameover from '@/components/castle_duel_game/components/overlay_content/Gameover.vue'
import Hello from '@/components/castle_duel_game/components/Hello.vue'

import '@/components/castle_duel_game/assets/castle_duel.scss'
import '@/components/castle_duel_game/assets/transitions.scss'

const methods = {
  handlePlayCard(card) {
    console.log('3. handlePlayCard');
    this.testPlayCard(card);
  },
  createTestHand() {
    const cards = [];
    const ids = Object.keys(this.CARDS);
    for (let i = 0; i < 5; i++) {
      cards.push(this.testDrawCard());
    }
    return cards;
  },
  testDrawCard() {
    const ids = Object.keys(this.CARDS);
    const randomId = ids[Math.floor(Math.random() * ids.length)];
    return {
      uid: gameState.cardUid++,
      id: randomId,
      def: this.CARDS[randomId],
    };
  },
  testPlayCard(card) {
    // Remove the card from player hand
    console.log('3. testPlayCard');
    const index = this.testHand.indexOf(card);
    this.lastPlayedCard = this.testHand.splice(index, 1)[0];
  },
};


const initialState = initializeState();



export default {
  name: 'CastleDuel',
  components: { Topbar, Hand, Overlay, PlayerTurn, LastPlay, Gameover },
  data: initialState,
  methods,
  created() {
    this.testHand = this.createTestHand();
  },
}



window.addEventListener('resize', e => {
  // initialState.worldRatio = gameState.getWorldRatio();
});

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
</script>


