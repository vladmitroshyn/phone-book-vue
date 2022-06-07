<template>
  <section class="table-wrapper">
    <div class="table-container">
      <div class="filters">
        <button
          class="filters__toggle-button"
          :class="isFiltersVisible ? 'active' : ''"
          @click.prevent="isFiltersVisible = !isFiltersVisible"
        >
          Filters
        </button>
        <transition
          name="filters__panel"
          @enter="startToggle"
          @after-enter="endToggle"
          @before-leave="startToggle"
          @after-leave="endToggle"
        >
          >
          <FiltersPanel
            v-show="isFiltersVisible"
            :filters="filters"
            @updateFilterFirstName="(val) => filters.firstName = val"
            @updateFilterLastName="(val) => filters.lastName = val"
            @updateFilterPhone="(val) => filters.phone = val"
            @updateFilterEmail="(val) => filters.email = val"
          />
        </transition>
      </div>
      <table class="table">
        <caption>My contacts</caption>
        <thead>
          <tr>
            <th scope="col">
              First Name
            </th>
            <th scope="col">
              Last Name
            </th>
            <th scope="col">
              Phone
            </th>
            <th scope="col">
              Email
            </th>
            <th scope="col">
              &nbsp;
            </th>
            <th scope="col">
              &nbsp;
            </th>
          </tr>
        </thead>
        <tbody>
          <ContactsTableRow
            v-for="contact in getContacts"
            :key="contact.id"
            :contact="contact"
            @openModal="(contact) => $emit('openModal', contact)"
            @deleteContact="(id) => $emit('deleteContact', id)"
          />
        </tbody>
      </table>
    </div>
    <ContactsTableFooter :recordCount="getContacts.length" />
  </section>
</template>

<script>
import ContactsTableFooter from './ContactsTableFooter.vue';
import ContactsTableRow from './ContactsTableRow.vue';
import FiltersPanel from './FiltersPanel.vue';

export default {
  name: 'ContactsTable',
  components: {
    ContactsTableRow, ContactsTableFooter, FiltersPanel,
  },
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isFiltersVisible: false,
      filters: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
      },
    }
  },
  computed: {
    getContacts() {
      return this.filterContacts(this.contacts);
    },
  },
  methods: {
    startToggle(el) {
      el.style.height = `${el.scrollHeight}px`;
    },
    endToggle(el) {
      el.style.height = '';
    },
    filterContacts(contacts) {
      Object.keys(this.filters).forEach((key) => {
        contacts = contacts
          .filter(
            (contact) => contact[key].toString().toLowerCase().includes(this.filters[key].toLowerCase()),
          );
      });
      return contacts;
    },
  },
}
</script>

<style lang="scss" scoped>

.filters {
  margin-bottom: 10px;

  &__toggle-button {
    display: block;
    color: #000;
    background-color: transparent;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
    padding-left: 20px;

    &::before {
      content: '\23F5';
      position: absolute;
      top: -15%;
      left: 0;
    }

    &.active::before {
      content: '\23F7';
    }
  }

  &__panel-enter-active, &__panel-leave-active {
    will-change: height, opacity, margin;
    transition: height 0.3s ease, opacity 0.3s ease, margin 0.3s ease;
    overflow: hidden;
  }

  &__panel-enter, &__panel-leave-to {
    height: 0 !important;
    opacity: 0;
    margin: 0;
  }
}

.table-wrapper {
  width: 90%;
  margin: 0 auto;
  margin-top: 50px;
}

.table-container {
  width: 100%;
  overflow-y: auto;
}

.table {
  table-layout: fixed;
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  min-width: 1000px;

  caption {
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  thead {
    tr {
      background-color: #f8f8f8;
      border: 1px solid #dedede;
      padding: 5px;
    }

    th {
      padding: 10px;
      text-align: center;
      min-height: 40px;
      @include table-row-headers;
    }

    th:nth-child(1),
    th:nth-child(2) {
      width: 15%;
    }

    th:nth-child(3) {
      width: 25%;
    }

    th:nth-child(4) {
      width: 35%;
    }

    th:nth-child(5),
    th:nth-child(6) {
      width: 5%;
    }
  }
}

@media screen and (max-width: 600px) {
  .table {
    border: 0;
    min-width: 0;

    thead {
      border: none;
      clip: rect(0, 0, 0, 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
  }
}

</style>
