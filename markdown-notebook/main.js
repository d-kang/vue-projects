const initialState = () => {
  return {
    notes: helpers.getNotes(),
    selectedId: helpers.getId(),
    noteNumber: 0,
  }
}

const data = function() {
  return initialState()
}

const filters = {
  date(time) {
    return moment(time).format('DD/MM/YY, HH:mm')
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
  sortedNotes() {
    const favorites = []
    const nonFavorites = []

    this.notes.forEach(n => {
      n.favorite ? favorites.push(n) : nonFavorites.push(n)
    })

    favorites.sort((a, b) => a.id - b.id)
    nonFavorites.sort((a, b) => a.id - b.id)

    return [...favorites, ...nonFavorites]
  },
  wordCount() {
    const s = this.selectedNote.content.replace(/\s\s+/g, ' ').split(' ').length
    console.log('s', s)
    return s
  },
  characterCount() {
    return this.selectedNote.content.length
  },
  lineCount() {
    return this.selectedNote.content.split(/\r\n|\r|\n/).length
  }
}

const watch = {
  notes: {
    handler: 'saveNotes',
    deep: true,
  },
  selectedId: 'saveId',
}

const created = function() {
  this.setNoteNumber()
}

const methods = {
  setNoteNumber() {
    let last = -1;
    this.notes.forEach(n => {
      if (n.id > last) {
        last = n.id
      }
    })
    this.noteNumber = last + 1
  },
  addNote() {
    const note = {
      id: this.noteNumber,
      title: `New Note ${this.notes.length}`,
      content: '** Hi! ** This notebook is using *markdown* for formatting!',
      created: new Date(),
      favorite: false
    }
    this.selectedId = this.noteNumber
    this.noteNumber++
    this.title = ''
    this.notes.push(note)
  },
  saveNotes(val, oldVal) {
    localStorage.setItem('notes', JSON.stringify(val))
  },
  resetWindow() {
    this.notes = helpers.getNotes()
    this.selectedId = helpers.getId()
    this.noteNumber = 0
  },
  purgeStorage()  {
    if (confirm('Are you sure you want to delete all of your notes?')) {
      localStorage.removeItem('content')
      localStorage.removeItem('notes')
      console.log('this.$data', this.$data)
      this.resetWindow()
      console.log('this.$data', this.$data)
    }
  },
  selectNote(id) {
    this.selectedId = id
  },
  saveId() {
    window.localStorage.setItem('selected-id', this.selectedId)
  },
  deleteNote() {
    this.notes = this.notes.filter(n => n.id !== this.selectedId)
    this.selectedId = null
  },
  favoriteNote() {
    this.selectedNote.favorite = !this.selectedNote.favorite
  },
}

const options = {
  el: '#notebook',
  name: "Notebook",
  data,
  computed,
  watch,
  methods,
  created,
  filters,
}

Vue.config.productionTip = false
new Vue(options)



