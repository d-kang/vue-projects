<template>
  <div class="player-result" :class="result">
    <span class="name">{{ player.name }}</span> is
    <span class="result">{{ result }}</span>
  </div>
</template>

<script>
/* overlay-content-game-over */
export default {
  props: ['player'],
  computed: {
    result() {
      return this.player.dead ? 'defeated' : 'victorious';
    },
  },
}
</script>

