const data = function() {
  return {
    content: '',
  }
}

const computed = {
  notePreview() {
    return window.marked(this.content)
  }
}

const options = {
  el: '#notebook',
  name: "Notebook",
  data,
  computed,
}

Vue.config.productionTip = false
new Vue(options)
