const data = function() {
  return {
    notes: [],
    selectedId: null,
  }
}

const created = function() {
  this.loadContent()
}

const computed = {
  notePreview() {
    return this.selectedId ? window.marked(this.selectedNote.content) : ''
  },
  addButtonTitle() {
    return `${this.notes.length} note(s) already`
  },
  selectedNote() {
    return this.notes.find(n => n.id === this.selectedId)
  },
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
  addNote() {
    const note = {
      id: Math.ceil(Math.random() * 10000),
      title: `New Note ${this.notes.length}`,
      content: '** Hi! ** This notebook is using *markdown* for formatting!',
      created: new Date(),
      favorite: false
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
  },
  selectNote(id) {
    this.selectedId = id
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



