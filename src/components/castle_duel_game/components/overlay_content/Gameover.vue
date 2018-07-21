<template>
  <div>
    <div class="big">Game Over</div>
    <PlayerResult v-for="(player, i) in players" :key="i" :player="player" />
  </div>
</template>

<script>
/* overlay-content-game-over */
import PlayerResult from './PlayerResult'
export default {
  components: { PlayerResult },
  props: ['players'],
}
</script>

