<template>
  <div>
    <div v-if="opponent.skippedTurn">{{ opponent.name }} turn was skipped!</div>
    <template v-else>
      <div>{{ opponent.name }} just played:</div>
      <!-- <Card :def="lastPlayedCard" /> -->
      Last Played Card Placeholder
    </template>
  </div>
</template>

<script>
import Card from '@/components/castle_duel_game/components/Card.vue'
import utils from '../../utils'
/* overlay-content-last-play */
export default {
  components: { Card },
  props: ['opponent'],
  computed: {
    lastPlayedCard() {
      return utils.getLastPlayedCard(this.opponent);
    },
  },

}
</script>
