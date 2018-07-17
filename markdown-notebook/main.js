const data = function() {
  return {
    notes: helpers.getNotes(),
    selectedId: helpers.getId(),
  }
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
  notes: {
    handler: 'saveNotes',
    deep: true,
  },
  selectedId: 'saveId',
}

const methods = {
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
    console.log('save note ran')
    localStorage.setItem('notes', JSON.stringify(val))
  },
  purgeStorage()  {
    localStorage.removeItem('content')
    localStorage.removeItem('notes')
  },
  selectNote(id) {
    this.selectedId = id
  },
  saveId() {
    window.localStorage.setItem('selected-id', this.selectedId)
  },
}

const options = {
  el: '#notebook',
  name: "Notebook",
  data,
  computed,
  watch,
  methods,
}

Vue.config.productionTip = false
new Vue(options)



