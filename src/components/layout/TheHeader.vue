<template>
  <header>
    <nav>
      <h2>
        <base-button link to="/">Find a coach</base-button>
      </h2>
      <ul>
        <li>
          <base-button mode="flat" link to="/coaches">All Coaches</base-button>
        </li>
        <li>
          <base-button mode="flat" link to="/requests">Requests</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  margin: auto;
  width: 100%;
  height: 5.5rem;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  font-family: "Jost", sans-serif;
}

/* header a {
  text-decoration: none;

  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: none;
  transition: all 0.3s;
  border-radius: 0.5rem;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(0deg, #3f7856, #7ec384);
  color: transparent;
}

a:active,
a:hover,
a.router-link-active {
  color: white;
  background: linear-gradient(140deg, #3f7856, #7ec384);
  border: none;
  box-shadow: #7ec384 3px 3px 6px 0px inset, #3f7856 -3px -3px 6px 1px inset;
} */

h2 {
  margin: 0;
}

h2 a {
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(0deg, #3f7856, #7ec384);
  color: transparent;
  margin: 0;
}

h2 a:hover,
h2 a:active,
h2 a.router-link-active {
  border-color: transparent;
  background: transparent;
  color: #7ec384;
  box-shadow: none;
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
