<template>
  <ValidationObserver
    ref="contactForm"
    tag="section"
    class="form-wrapper"
  >
    <form
      class="form"
      @submit.prevent="updateContact"
    >
      <CInput
        :value="newContact.firstName"
        :placeholder="'First name'"
        :providerName="'firstName'"
        :rules="{ required: true,
                  onlyLetters: true,
                  startsWithCapital: true,
                  atLeastTwoLetters: true }"
        @updateValue="(val) => newContact.firstName = val"
      />
      <CInput
        :value="newContact.lastName"
        :placeholder="'Last name'"
        :providerName="'secondName'"
        :rules="{ required: true,
                  onlyLetters: true,
                  startsWithCapital: true,
                  atLeastTwoLetters: true }"
        @updateValue="(val) => newContact.lastName = val"
      />
      <CInput
        :value="newContact.phone"
        :placeholder="'Phone'"
        :providerName="'phone'"
        :rules="{ required: true, possiblePhoneNumber: true }"
        @updateValue="(val) => newContact.phone = val"
      />
      <CInput
        :value="newContact.email"
        :placeholder="'Email'"
        :providerName="'email'"
        :rules="{ validEmail: true }"
        @updateValue="(val) => newContact.email = val"
      />
      <button
        class="form__submit-button"
        type="submit"
      >
        {{ getButtonText }}
      </button>
    </form>
  </ValidationObserver>
</template>

<script>
import CInput from './CInput.vue';

export default {
  name: 'ContactForm',
  components: {
    CInput,
  },
  props: {
    editedContact: {
      type: Object,
      default: null,
    },
    editMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      newContact: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
      },
    };
  },
  computed: {
    getButtonText() {
      return this.editMode ? 'Update' : 'Add';
    },
  },
  created() {
    if (this.editedContact) {
      this.newContact = { ...this.editedContact };
    }
  },
  methods: {
    updateContact() {
      this.$refs.contactForm.validate().then((success) => {
        if (!success) {
          return;
        }

        this.$emit('updateContact', { id: new Date().valueOf(), ...this.newContact });

        Object.keys(this.newContact).forEach((key) => {
          this.newContact[key] = '';
        });

        this.$refs.contactForm.reset();
      });
    },
  },
};
</script>

<style lang="scss" scoped>

.form-wrapper {
  width: 50%;
  min-width: 300px;
  max-width: 450px;
}

.form {
  width: 100%;

  &__submit-button {
    cursor: pointer;
    width: 100%;
    padding: 10px;
  }
}

</style>
