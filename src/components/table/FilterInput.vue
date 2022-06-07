<template>
  <input
    type="text"
    aria-label="ariaLabel"
    class="filters__input"
    :value="value"
    :placeholder="placeholder"
    :name="name"
    @input="updateValue($event.target.value)"
  >
</template>

<script>
export default {
  name: 'FilterInput',
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      debounce: null,
    }
  },
  methods: {
    updateValue(value) {
      clearTimeout(this.debounce)
      this.debounce = setTimeout(() => {
        this.$emit('updateValue', value);
      }, 700)
    },
  },
}
</script>

<style lang="scss" scoped>

.filters {
  &__input {
    display: block;
    width: 90%;
    margin: 0 auto;
    padding: 5px;
    font-size: 14px;
    border: 2px solid #aaa;
  }
}

@media screen and (max-width: 600px) {
  .filters {
    &__input {
      width: 100%;
      margin-top: 5px;
    }
  }
}

</style>
