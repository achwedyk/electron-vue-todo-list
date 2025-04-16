<script setup>
import Hero from './components/Hero.vue'
import TodoList from './components/TodoList.vue'
</script>

<template>
  <header>
    <Hero />
  </header>

  <main>
    <TodoList />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  padding: 1rem;
  background: var(--color-background-accent);
}

main {
  padding: 1rem;
}
</style>
