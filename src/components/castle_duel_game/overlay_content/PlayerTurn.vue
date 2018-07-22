<template>
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
</template>


<script>
/* overlay-content-player-turn */
export default {
  props: ['player'],
}
</script>

