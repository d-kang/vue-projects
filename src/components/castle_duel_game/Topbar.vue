<template>
  <div class="top-bar" :class="'player-' + currentPlayerIndex">
    <SidebarButton />
    <div class="player p0">{{ players[0].name }}</div>
    <div class="turn-counter">
      <TurnIcon class="arrow" />
      <div class="turn">Turn {{ turn }}</div>
    </div>
    <div class="player p1">{{ players[1].name }}</div>
  </div>
</template>


<script>
import TurnIcon from '@/assets/castle_duel/svg/turn.svg'
import SidebarButton from '@/components/SidebarButton.vue'

export default {
  components: { TurnIcon, SidebarButton },
  props: ['turn', 'players', 'currentPlayerIndex'],
}
</script>
