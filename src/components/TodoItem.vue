<script>
export default {
  name: 'TodoItem',
  props: {
    text: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggle() {
      this.$emit('toggle')
    }
  }
}
</script>

<template>
  <li>
    <label>
      <input type="checkbox" :checked="completed" @change="toggle" />
      <span :class="{ done: completed }">{{ text }}</span>
    </label>
  </li>
</template>

<style scoped>
input {
  margin-right: 0.5rem;
}

.done {
  text-decoration: line-through;
}
</style>
