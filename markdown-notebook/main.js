const data = function() {
  return {
    notes: helpers.getNotes(),
    selectedId: helpers.getId(),
    noteNumber: 0,
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
    return this.notes
      .sort((a, b) => {
        return a.created - b.created
      })
      .sort((a, b) => {
        if (a.favorite === b.favorite) {
          return 0
        } else if (a.favorite) {
          return -1
        } else {
          return 1
        }
      })
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
  deleteNote() {
    this.notes = this.notes.filter(n => n.id !== this.selectedId)
    this.selectedId = null
  },
  favoriteNote() {
    this.selectedNote.favorite = !this.selectedNote.favorite
  },
  favoriteNote2(n) {
    n.favorite = !this.selectedNote.favorite
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
}

Vue.config.productionTip = false
new Vue(options)



