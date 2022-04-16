<template>
  <div id="app">
    <transition name="modal">
      <ModalWindow
        v-if="isModalVisible"
        :editedContact="editedContact"
        @closeModal="closeModal"
        @updateContact="editContact"
      />
    </transition>
    <div class="wrapper">
      <header>
        <h1 class="app-title">
          Vue Phone Book
        </h1>
      </header>
      <ContactForm @updateContact="addContact" />
      <ContactTable
        v-if="contacts.length"
        :contacts="contacts"
        @openModal="openModal"
        @deleteContact="deleteContact"
      />
      <span
        v-else
        class="no-contacts"
      >
        No contacts.
      </span>
    </div>
  </div>
</template>

<script>
import ContactForm from './components/ContactForm.vue';
import ContactTable from './components/table/ContactsTable.vue';
import ModalWindow from './components/ModalWindow.vue';

export default {
  name: 'App',
  components: {
    ContactForm,
    ContactTable,
    ModalWindow,
  },
  data() {
    return {
      contacts: [],
      editedContact: {},
      isModalVisible: false,
    }
  },
  beforeMount() {
    if (localStorage.getItem('contacts')) {
      try {
        this.contacts = JSON.parse(localStorage.getItem('contacts'));
      } catch (e) {
        localStorage.removeItem('contacts');
      }
    }
  },
  methods: {
    saveContacts() {
      const parsedContacts = JSON.stringify(this.contacts);
      localStorage.setItem('contacts', parsedContacts);
    },
    addContact(contact) {
      this.contacts.push(contact);
      this.saveContacts();
    },
    editContact(contact) {
      this.contacts = this.contacts.map((el) => {
        if (el.id === contact.id) {
          return { ...contact };
        }
        return el;
      });
      this.closeModal();
      this.saveContacts();
    },
    deleteContact(id) {
      this.contacts = this.contacts.filter((contact) => contact.id !== id);
      this.saveContacts();
    },
    openModal(contact) {
      this.editedContact = { ...contact };
      this.isModalVisible = true;
    },
    closeModal() {
      this.editedContact = {};
      this.isModalVisible = false;
    },
  },
};
</script>

<style lang="scss">

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.app-title {
  margin: 50px 0;
  font-size: 32px;
  font-weight: 600;
  text-transform: uppercase;
}

.no-contacts {
  display: block;
  margin: 50px 0;
  font-size: 20px;
}

.modal-enter-active, .modal-leave-active {
  transition: opacity .5s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
}

</style>
