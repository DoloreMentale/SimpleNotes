<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  background-image: linear-gradient(
    to left bottom,
    #40597e,
    #057491,
    #008d8e,
    #4fa278,
    #98b061
  );
  margin: 0;
  width: 100%;
  min-height: 100vh;
}

.card {
  background-color: white;
  padding: 1rem;
  margin: 1rem;
  border-radius: 25px;
  color: #4fa278;
}

.card-header {
  text-align: center;
}

.card-item {
  margin: 1rem;
}

.note-item {
  display: flex;
  align-items: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1vw;
}

.checked {
  text-decoration: line-through;
}
</style>
