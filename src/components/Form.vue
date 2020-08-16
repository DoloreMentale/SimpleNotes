<template>
  <section>
    <div class="container">
      <form>
        <div>
          <p>New Title</p>
          <label for="title">
            <input
              id="title"
              v-model="notes.title"
              placeholder="enter new title"
              required
            />
          </label>
        </div>

        <div>
          <p>New Item</p>
          <div class="note-item">
            <label>
              <input v-model="notes.item" placeholder="enter new task" />
            </label>
          </div>
        </div>

        <div>
          <input
            class="button"
            v-on:click.prevent="addNote"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
    <div class="grid">
      <div class="card">
        <h3 class="card-header">Note Preview</h3>
        <h3 class="card-item card-header">{{ notes.title }}</h3>
        <div class="note-item">
          <p class="card-item" v-bind:class="{ checked: notes.completed }">
            {{ notes.item }}
          </p>
        </div>
      </div>
    </div>

    <div class="help-text">
      <h1 class="edit-area">Here you can change your notes</h1>
    </div>

    <section class="grid">
      <div class="card" v-for="(note, index) in notes" :key="index">
        <h3 class="card-item card-header">{{ note.title }}</h3>
        <div class="note-item">
          <label>
            <input
              type="checkbox"
              v-on:change="note.completed = !note.completed"
            />
          </label>
          <p class="card-item" v-bind:class="{ checked: note.completed }">
            {{ note.item }}
          </p>
        </div>
        <input
          v-on:click="removeNote(index)"
          type="submit"
          class="button"
          value="delete note"
        />
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "Form",
  props: {
    notes: {
      title: String,
      item: String,
      checked: Boolean,
      type: Array,
      required: true
    }
  },
  methods: {
    addNote() {
      if (!this.notes.title && !this.notes.item) {
        return;
      }

      let newNote = {
        title: this.notes.title,
        item: this.notes.item,
        completed: this.notes.completed
      };

      this.notes.push(newNote);
      this.notes.title = null;
      this.notes.item = null;
      this.saveNotes();
    },

    removeNote(x) {
      this.notes.splice(x, 1);
      this.saveNotes();
    },

    saveNotes() {
      const parsed = JSON.stringify(this.notes);
      localStorage.setItem("notes", parsed);
    }
  }
};
</script>

<style scoped>
form {
  background-color: white;
  padding: 2rem;
  border-radius: 25px;
  flex-direction: column;
}

.container {
  display: flex;
  justify-content: center;
}

.button {
  background-color: #4fa278;
  color: white;
  padding: 0.5rem;
  border-color: transparent;
  border-radius: 10px;
  font-weight: bold;
  margin: 0.5rem;
}

.button:hover {
  background-color: white;
  color: #4fa278;
}

input {
  margin: 0.5rem;
}

p {
  margin: 0.5rem;
  font-weight: bold;
  color: #4fa278;
}

.help-text {
  border-style: dashed;
  color: white;
  margin: 1rem;
}

.edit-area {
  color: white;
  text-align: center;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
