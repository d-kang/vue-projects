<template>
  <div class="notebook">
    <div class="side-bar">
      <div class="toolbar">
        <button @click="addNote" :title="addButtonTitle">
          <font-awesome-icon icon='plus' /> Add note
        </button>
      </div>
      <div class="notes" v-cloak>
        <div
          class="note"
          v-for="(n, i) in sortedNotes"
          :key="i"
          @click="selectNote(n.id)"
          :class="{ selected: n === selectedNote }"
        >
          {{n.title}}
          <span v-if="n.id === selectedId" @click="favoriteNote">
            <font-awesome-icon :icon="['fas', 'star']" v-if="n.favorite" />
            <font-awesome-icon :icon="['far', 'star']" v-else />
          </span>
          <font-awesome-icon :icon="['fas', 'star']" v-else-if="n.favorite" />
        </div>
      </div>
    </div>

    <div v-if="selectedNote">
      <section class="main">
        <div class="toolbar">
          <input
            v-model="selectedNote.title"
            type="text"
            placeholder="title"
            maxlength="25"
          >

          <button @click="favoriteNote" title="Favorite Note">
            <font-awesome-icon :icon="['fas', 'star']" v-if="selectedNote.favorite" />
            <font-awesome-icon :icon="['far', 'star']" v-else />
          </button>
          <button @click="deleteNote" title="Delete Note">
            <font-awesome-icon :icon="['far', 'trash-alt']" />
          </button>
        </div>
        <textarea v-model.trim="selectedNote.content" placeholder="This is a note.">
        </textarea>
        <div class="toolbar status-bar">
          <span class="date">
            <span class="label">Created</span>
            <span class="value">{{ selectedNote.created | date }}</span>
          </span>
          <span class="lines">
            <span class="label">Lines</span>
            <span class="value">{{lineCount}}</span>
          </span>
          <span class="words">
            <span class="label">Words</span>
            <span class="value">{{wordCount}}</span>
          </span>
          <span class="characters">
            <span class="label">Characters</span>
            <span class="value">{{characterCount}}</span>
          </span>
          <button @click="purgeStorage">purge</button>
        </div>
      </section>
    </div>
    <div class="preview" v-html="notePreview"></div>

  </div>
</template>



<script>
import moment from 'moment'
import marked from 'marked'
import helpers from './helpers'
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faStar as fasStar,
  faHeart as fasHeart,
  faPlus
} from '@fortawesome/free-solid-svg-icons'

import {
  faStar as farStar,
  faHeart as farHeart,
  faTrashAlt
} from '@fortawesome/free-regular-svg-icons'

const faLoad = [fasStar, farStar, fasHeart, farHeart, faTrashAlt, faPlus]

library.add(faLoad)
Vue.component('font-awesome-icon', FontAwesomeIcon)


const initialState = () => {
  return {
    notes: helpers.getNotes(),
    selectedId: helpers.getId(),
    noteNumber: 0,
  };
};

const data = function() {
  return initialState();
};

const filters = {
  date(time) {
    return moment(time).format('DD/MM/YY, HH:mm');
  },
};

const computed = {
  notePreview() {
    return this.selectedId ? marked(this.selectedNote.content) : '';
  },
  addButtonTitle() {
    return `${this.notes.length} note(s) already`;
  },
  selectedNote() {
    return this.notes.find(n => n.id === this.selectedId);
  },
  sortedNotes() {
    const favorites = [];
    const nonFavorites = [];

    this.notes.forEach(n => {
      n.favorite ? favorites.push(n) : nonFavorites.push(n);
    });

    favorites.sort((a, b) => a.id - b.id);
    nonFavorites.sort((a, b) => a.id - b.id);

    return [...favorites, ...nonFavorites];
  },
  wordCount() {
    const s = this.selectedNote.content.replace(/\s\s+/g, ' ').split(' ')
      .length;
    console.log('s', s);
    return s;
  },
  characterCount() {
    return this.selectedNote.content.length;
  },
  lineCount() {
    return this.selectedNote.content.split(/\r\n|\r|\n/).length;
  },
};

const watch = {
  notes: {
    handler: 'saveNotes',
    deep: true,
  },
  selectedId: 'saveId',
};

const created = function() {
  this.setNoteNumber();
};

const methods = {
  setNoteNumber() {
    let last = -1;
    this.notes.forEach(n => {
      if (n.id > last) {
        last = n.id;
      }
    });
    this.noteNumber = last + 1;
  },
  addNote() {
    const note = {
      id: this.noteNumber,
      title: `New Note ${this.notes.length}`,
      content: '** Hi! ** This notebook is using *markdown* for formatting!',
      created: new Date(),
      favorite: false,
    };
    this.selectedId = this.noteNumber;
    this.noteNumber++;
    this.title = '';
    this.notes.push(note);
  },
  saveNotes(val, oldVal) {
    window.localStorage.setItem('notes', JSON.stringify(val));
  },
  resetWindow() {
    this.notes = helpers.getNotes();
    this.selectedId = helpers.getId();
    this.noteNumber = 0;
  },
  purgeStorage() {
    if (confirm('Are you sure you want to delete all of your notes?')) {
      window.localStorage.removeItem('content');
      window.localStorage.removeItem('notes');
      window.localStorage.removeItem('selected-id');
      this.resetWindow();
    }
  },
  selectNote(id) {
    this.selectedId = id;
  },
  saveId() {
    window.localStorage.setItem('selected-id', this.selectedId);
  },
  deleteNote() {
    this.notes = this.notes.filter(n => n.id !== this.selectedId);
    this.selectedId = null;
  },
  favoriteNote() {
    this.selectedNote.favorite = !this.selectedNote.favorite;
  },
};

const options = {
  name: 'Notebook',
  data,
  computed,
  watch,
  methods,
  created,
  filters,
};

export default options;


</script>


<style scoped lang="scss">
a {
  color: #40b883;
}

h1,
h2,
h3 {
  margin: 10px 0 4px;
  color: #40b883;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
}

h3 {
  font-size: 1.2em;
}

h4 {
  font-size: 1.1em;
  font-weight: normal;
}

button,
input,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  box-sizing: border-box;
  /* outline: none !important; */
}

button {
  border-radius: 3px;
  border: none;
  display: inline-block;
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background: #63c89b;
  }
}

button,
.note.selected {
  background: #40b883;
  color: white;
}

button,
input {
  height: 34px;
}

input {
  border: solid 2px #ade2ca;
  border-radius: 3px;
  padding: 6px 10px;
  background: #f0f9f5;
  color: #666;

  &:focus {
    border-color: #40b883;
    background: white;
    color: black;
  }
}

font-awesome-icon {
  font-size: 2rem;
  line-height: 1;
  vertical-align: middle;
  margin: -3px;
  padding-bottom: 1px;
}

.notebook {
  flex-grow: 1;
  height: 100%;
  // flex-flow: row;
  display: flex;
  justify-content: space-between;
}


.side-bar {
  max-width: 300px;
  background: #f8f8f8;
  width: 20%;
  box-sizing: border-box;
}

.note {
  padding: 5px;
  cursor: pointer;
  &:hover {
    background: #ade2ca;
  }
  .icon {
    float: right;
  }
}

.status-bar {
  color: #777;
  > span {
    margin-right: 6px;
    white-space: nowrap;
  }

  .label {
    color: #bbb;
  }
}

textarea {
  resize: none;
  border: none;
  box-sizing: border-box;
  margin: 0 4px;
  font-family: monospace;
}

textarea, .notes, .preview {
  flex: auto 1 1;
  overflow: auto;
}

.preview {
  padding: 15px;
  margin-right: 50px;
  max-width: 40%;
  // box-sizing: border-box;
  border-left: solid 4px #f8f8f8;

  p:first-child {
    margin-top: 0;
  }
}


.main {
  display: flex;
  flex-direction: column;
  height: 100%
}

.status-bar {
  bottom: 10px;
  flex-wrap: wrap;
  margin-top: auto;
  display: flex;
}

.star-icon {
  float: right;
}

.toolbar {
  display: flex;
  justify-content: flex-end;
  :nth-child(1) {
    margin-right: auto;
  }
}

[v-cloak] { display: none; }

// @media screen and (max-width: 1350px) {
//   .star-icon {
//     display:none;
//   }
// }

</style>
