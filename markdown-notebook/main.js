const data = function() {
  return {
    content: '',
  }
}

const created = function() {
  this.loadContent()
}

const computed = {
  notePreview() {
    return window.marked(this.content)
  }
}

const watch = {
  content: 'saveNote',
}

const methods = {
  saveNote(val, oldVal) {
    console.log('new note:', val, 'old note:', oldVal)
    localStorage.setItem('content', val)
  },
  loadContent() {
    const content = localStorage.getItem('content')
    this.content = content !== 'null' ? content : 'You can write in **markdown**'
  }

}

const options = {
  el: '#notebook',
  name: "Notebook",
  data,
  computed,
  watch,
  methods,
  created,
}

Vue.config.productionTip = false
new Vue(options)
