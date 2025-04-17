<script>
import TodoItem from './TodoItem.vue'
import TodoInput from './TodoInput.vue'

export default {
  name: 'TodoList',
  components: {
    TodoItem,
    TodoInput,
  },
  data() {
    return {
      todos: [],
    }
  },
  async created() {
    this.todos = await window.electron.loadTodos()
  },
  methods: {
    toggleTodo(index) {
      this.todos[index].completed = !this.todos[index].completed
      this.saveTodos()
    },
    addTodo(text) {
      if (text.trim()) {
        this.todos.push({ text, completed: false })
        this.saveTodos()
      }
    },
    async saveTodos() {
      const todosToSave = this.todos.map((todo) => ({
        text: todo.text,
        completed: todo.completed,
      }))
      await window.electron.saveTodos(todosToSave)
    },
  },
}
</script>

<template>
  <div>
    <TodoInput @add="addTodo" />

    <ul>
      <TodoItem
        v-for="(todo, index) in todos"
        :key="index"
        :text="todo.text"
        :completed="todo.completed"
        @toggle="toggleTodo(index)"
      />
    </ul>
  </div>
</template>

<style scoped>
ul {
  margin: 1rem 0 0;
  padding: 0;
  list-style-type: none;
}
</style>
