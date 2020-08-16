<template>
  <section class="grid">
    <div class="card" v-for="(note, index) in notes" :key="index">
      <h3 class="card-item card-header">{{ note.title }}</h3>
      <div class="note-item">
        <ul>
          <li class="card-item" v-bind:class="{ checked: note.completed }">
            {{ note.item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Note",
  props: {
    notes: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
ul {
  font-weight: bold;
}

input {
  margin: 1rem;
}
</style>
