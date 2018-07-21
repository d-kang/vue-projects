<template>
  <div class="castle-duel-game">
    <CastleDuelGame class="castle-duel-game" />
  </div>
</template>


<script>
// @ is an alias to /src
import CastleDuelGame from '@/components/castle_duel_game/CastleDuelGame.vue';

export default {
  name: 'CastleView',
  components: {
    CastleDuelGame,
  },
};
</script>
