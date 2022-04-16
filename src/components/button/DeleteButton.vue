<template>
  <button
    class="delete-button"
    @click="deleteContact(contactId)"
  >
    &#215;
  </button>
</template>

<script>
export default {
  name: 'DeleteButton',
  props: {
    contactId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    deleteContact(id) {
      this.$emit('deleteContact', id);
    },
  },
}
</script>

<style lang="scss" scoped>

.delete-button {
  background-color: transparent;
  border: none;
  font-weight: 800;
  color: $delete-button-color;
  font-weight: 800;
  font-size: 20px;
}

@media screen and (max-width: 600px) {
  .delete-button {
    font-size: 25px;
  }
}

</style>
