<template>
  <div
    class="modal"
    @click.self="closeModal"
    @keydown="closeModalByEsc"
  >
    <div class="modal__window">
      <div
        class="modal__close"
        @click="closeModal"
        @keydown="closeModalByEsc"
      >
        <span>
          &times;
        </span>
      </div>
      <h3 class="modal__title">
        Edit record
      </h3>
      <div class="modal__content">
        <ContactForm
          :editedContact="editedContact"
          :editMode="true"
          @updateContact="(contact) => $emit('updateContact', contact)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from './ContactForm.vue';

export default {
  name: 'ModalWindow',
  components: { ContactForm },
  props: {
    editedContact: {
      type: Object,
      default: null,
    },
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
    closeModalByEsc(e) {
      if (e.key === 'Escape') {
        this.$emit('closeModal');
      }
    },
  },
}
</script>

<style lang="scss" scoped>

.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  &__window {
    position: relative;
    background-color: #fff;
    padding: 15px;
    @include default-border-radius;
  }

  &__title {
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__close {
    cursor: pointer;
    border-radius: 50%;
    color: #fff;
    background-color: $main-color;
    position: absolute;
    width: 30px;
    height: 30px;
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      display: block;
      font-size: 20px;
    }
  }

  &__content {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>
