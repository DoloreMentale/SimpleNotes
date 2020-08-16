<template>
  <section>
    <!-- Navbar -->
    <nav>
      <h3 class="nav-brand">Simple Notes</h3>
      <h3 class="nav-brand">||</h3>
      <h3 class="nav-link"
          :class="{ activePage: selectedPage === page }"
          v-for="(page, index) in pages"
          :key="index"
          @click="selectedPage = page">
        {{ page }}
      </h3>
    </nav>
    <!-- end of Navbar -->

    <!-- NoteList Page (main) -->
    <div v-show="selectedPage === 'Notes'">
      <Note :notes="notes"/>
    </div>
    <!-- end of NoteList Page (main) -->

    <!-- Notes edit page -->
    <div v-show="selectedPage === 'Edit'">
      <Form :notes="notes"></Form>
    </div>
    <!-- end of Notes edit page -->
  </section>
</template>

<script>
import Note from "@/components/Note";
import Form from "@/components/Form";

export default {
  name: "NoteList",
  components: {
    Form,
    Note
  },
  data() {
    return {
      notes:
          [
            {title: "Cucold Note Title", item: "Cucold Note Item", completed: false},
            {title: "SUKA OPYAT VSE NE RABOTAET", item: "ILI RABOTAET", completed: false}
          ],
      pages: ['Notes', 'Edit'],
      selectedPage: 'Notes'
    }
  },
  mounted() {
    if (localStorage.getItem('notes')) {
      try {
        this.notes = JSON.parse(localStorage.getItem('notes'));
      } catch (e) {
        localStorage.removeItem('notes', close());
      }
    }
  },
}
</script>

<style scoped>
nav {
  display: inline-flex;
  justify-content: center;
  width: 100%;
  color: white;
}

.nav-brand {
  margin: 1rem;
}

.nav-link {
  margin: 1rem;
  border-bottom-style: dashed;
  border-bottom-width: thin;
}
</style>
