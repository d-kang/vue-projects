(function() {
  const template = `
    <div class="hand">
      <div class="wrapper">
        <div v-for="card in cards" :def="card.def">
          hi
        </div>
      </div>
    </div>
  `
  Vue.component('hand', {
    template,
    data() {
      return {
        id: '',
        def: {},
      }
    },
    props: ['cards'],

  })


})();