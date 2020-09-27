<template>
  <div id="app">
    <div class="head">
      <router-link class="route" to="/"> List</router-link>

      <router-link class="route" to="/new-task">Create new task</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.head {
  min-height: 80px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
}
.route {
  color: white;
  text-decoration: none;
  border: 1px solid black;
  background-color: saddlebrown;
  padding: 10px;
  text-transform: uppercase;
}

.route:hover {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
