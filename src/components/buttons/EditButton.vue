<template>
  <button
    class="edit-button"
    @click="openModal(contact)"
  >
    &#9998;
  </button>
</template>

<script>
export default {
  name: 'EditButton',
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openModal(contact) {
      this.$emit('openModal', contact);
    },
  },
}
</script>

<style lang="scss" scoped>

.edit-button {
  background-color: transparent;
  border: none;
  color: $edit-button-color;
  font-weight: 800;
  font-size: 16px;
}

@media screen and (max-width: 600px) {
  .edit-button {
    font-size: 20px;
  }
}

</style>
