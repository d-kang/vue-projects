<template>
  <div class="card" :class="'type-' + def.type" @click="play">
    <div class="title">{{def.title}}</div>
    <img class="separator" src="svg/card-separator.svg" alt="" />
    <div class="description">
      <div v-html="def.description"></div>
    </div>
    <div v-if="def.note" class="note">{{def.note}}</div>
  </div>
</template>


<script>
export default {
  methods: {
    play() {
      this.$emit('play-event')
      return ''
    }
  },
  props: ['def'],
}
</script>
