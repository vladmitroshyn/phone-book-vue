<template>
  <ValidationProvider
    v-slot="{ errors, invalid, valid, validated }"
    tag="div"
    class="input"
    mode="aggressive"
    :rules="rules"
    :name="providerName"
  >
    <input
      type="text"
      aria-label="ariaLabel"
      class="input__inner"
      :class="{
        'input__inner_success': valid && validated,
        'input__inner_error': invalid && validated,
      }"
      :value="value"
      :placeholder="placeholder"
      @input="updateValue($event.target.value)"
    >
    <span
      v-if="errors.length"
      class="input__error-message"
    >{{ errors[0] }}</span>
  </ValidationProvider>
</template>

<script>

export default {
  name: 'CInput',
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: null,
    },
    rules: {
      type: Object,
      default: null,
    },
    providerName: {
      type: String,
      required: true,
    },
  },
  watch: {
  },
  methods: {
    updateValue(value) {
      this.$emit('updateValue', value);
    },
  },
};

</script>

<style lang="scss" scoped>

.input {
  height: 68px;

  &__inner {
    display: block;
    width: 100%;
    padding: 10px;
    border: 2px solid #aaa;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &_success {
      border: 2px solid $success-color;
    }

    &_error {
      border: 2px solid $error-color;
    }
  }

  &__error-message {
    font-size: 12px;
    color: $error-color;
  }
}

</style>
