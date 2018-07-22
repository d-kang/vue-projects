<template>
  <div class="hand">
    <div class="wrapper">
      <transition-group name="card" class="cards">
        <Card v-for="c in cards" :key="c.uid" :def="c.def" @play-event="handlePlay(c)" />
      </transition-group>
    </div>
  </div>
</template>


<script>
import Card from './Card.vue'

export default {
  components: { Card },
  props: ['cards'],
  methods: {
    handlePlay(card) {
      console.log('2. handlePlay');
      this.$emit('card-play-event', card)
    },
  },
}
</script>

