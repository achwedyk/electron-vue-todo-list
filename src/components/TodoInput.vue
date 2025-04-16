<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    submit() {
      if (this.inputValue.trim()) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>

<template>
  <form @submit.prevent="submit">
    <input v-model="inputValue" type="text" placeholder="Add a todo" />
    <button type="submit">Add</button>
  </form>
</template>

<style scoped>
input {
  padding: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
}
</style>
