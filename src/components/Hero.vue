<template>
  <div class="top">
    <img alt="Checkbox logo" class="logo" src="../assets/logo.svg" width="80" height="80" />
    <h1>Todo List</h1>
  </div>
  <h3>
    Do the things. Check the boxes.
  </h3>
</template>

<style scoped>
h1 {
  font-size: 3rem;
  font-weight: 700;

  color: var(--color-heading);
}

h3 {
  font-size: 1.2rem; 
}

@media (min-width: 600px) {
  .top {
    display: flex;
    align-items: center;
  }

  .logo {
    margin-right: 1rem;
  }
}
</style>
