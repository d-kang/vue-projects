const data = function() {
  return {
    content: '',
    notes: [],
    title: '',
    favorite: 'false',
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
  notes: 'saveNotes',
}

const methods = {
  saveNote(val, oldVal) {
    console.log('new note:', val, 'old note:', oldVal)

    localStorage.setItem('content', val)
  },
  loadContent() {
    const content = localStorage.getItem('content')
    const notes = JSON.parse(localStorage.getItem('notes'))
    this.content = content || 'You can write in **markdown**'
    this.notes = notes || []
  },
  addToDeck() {
    const note = {
      id: Math.ceil(Math.random() * 10000),
      title: this.title,
      content: this.content,
      created: new Date(),
      favorite: this.favorite
    }
    this.title = ''
    this.notes.push(note)
  },
  saveNotes(val, oldVal) {
    localStorage.setItem('notes', JSON.stringify(val))
  },
  purgeStorage()  {
    localStorage.removeItem('content')
    localStorage.removeItem('notes')
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



