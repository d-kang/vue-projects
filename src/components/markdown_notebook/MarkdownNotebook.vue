<template>
  <div class="notebook">
    <SidebarButton />
    <div class="side-bar">
      <div class="toolbar">
        <button @click="addNote" :title="addButtonTitle">
          <font-awesome-icon icon='plus' /> Add Note
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

    <div v-if="selectedNote" class="main">
      <!-- <section > -->
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
      <!-- </section> -->
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

import SidebarButton from '@/components/SidebarButton.vue'
import '@/components/markdown_notebook/mardown.scss'

const faLoad = [fasStar, farStar, fasHeart, farHeart, faTrashAlt, faPlus]

library.add(faLoad)
Vue.component('font-awesome-icon', FontAwesomeIcon)


const initialState = () => {
  return {
    notes: helpers.getNotes(),
    selectedId: helpers.getId(),
    noteNumber: 0,
    stack: [],
  };
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

export default {
  name: 'markdown',
  components: { SidebarButton },
  data() {
    return initialState()
  },
  watch: {
    notes: {
      handler: 'saveNotes',
      deep: true,
    },
    selectedId: 'saveId',
  },
  created() {
    this.setNoteNumber();
  },
  filters: {
    date(time) {
      return moment(time).format('DD/MM/YY, HH:mm');
    },
  },
  computed,
  methods,
};

</script>
