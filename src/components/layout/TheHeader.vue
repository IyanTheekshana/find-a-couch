<template>
  <header>
    <nav>
      <h1><router-link to="/">Find a coach</router-link></h1>
      <ul>
        <li><router-link to="/coaches">All Coaches</router-link></li>
        <li><router-link to="/requests">Requests</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 5.5rem;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #3f7856;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: none;
  font-family: "Roboto Slab", serif;
  transition: all 0.3s;
  border-radius: 0.5rem;
}

a:active,
a:hover,
a.router-link-active {
  color: white;
  background: linear-gradient(140deg, #3f7856, #7ec384);
  border: none;
}

h1 {
  margin: 0;
}

h1 a {
  color: #3f7856;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
  background: transparent;
  color: #7ec384;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
