<template>
  <section class="table-wrapper">
    <div class="table-container">
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
            v-for="contact in contacts"
            :key="contact.id"
            :contact="contact"
            @openModal="(contact) => $emit('openModal', contact)"
            @deleteContact="(id) => $emit('deleteContact', id)"
          />
        </tbody>
      </table>
    </div>
    <ContactsTableFooter :recordCount="contacts.length" />
  </section>
</template>

<script>
import ContactsTableFooter from './ContactsTableFooter.vue';
import ContactsTableRow from './ContactsTableRow.vue';

export default {
  name: 'ContactsTable',
  components: { ContactsTableRow, ContactsTableFooter },
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss">

.table-wrapper {
  width: 90%;
  margin: 0 auto;
}

.table-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}

.table {
  table-layout: fixed;
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0 auto;
  margin-top: 50px;
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
