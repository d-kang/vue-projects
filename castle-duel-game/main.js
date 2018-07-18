const template =`<div> hello world!!! </div>`

new Vue({
  el: '#app',
  name: 'Game',
  template,
  data: initializeState()
})