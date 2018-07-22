<template>
  <div>
    <CastleDuelGame />
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

