<template>
  <tr scope="row">
    <td data-label="First Name">
      {{ contact.firstName }}
    </td>
    <td data-label="Second Name">
      {{ contact.lastName }}
    </td>
    <td data-label="Phone">
      {{ contact.phone }}
    </td>
    <td data-label="Email">
      {{ contact.email }}
    </td>
    <td data-label="Edit">
      <EditButton
        :contact="contact"
        @openModal="(contact) => $emit('openModal', contact)"
      />
    </td>
    <td data-label="Delete">
      <DeleteButton
        :contactId="contact.id"
        @deleteContact="(id) => $emit('deleteContact', id)"
      />
    </td>
  </tr>
</template>

<script>
import DeleteButton from '../buttons/DeleteButton.vue'
import EditButton from '../buttons/EditButton.vue'

export default {
  name: 'ContactsTableRow',
  components: { EditButton, DeleteButton },
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>

tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 5px;
}

td {
    padding: 10px;
    text-align: center;
    min-height: 40px;
}

td:nth-child(5),
td:nth-child(6) {
  padding: 0;
}

@media screen and (max-width: 600px) {
  tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: 15px;
      &:last-child {
        margin: 0;
      }
  }

  td {
    border-bottom: 1px solid #ddd;
    display: block;
    text-align: right;
    position: relative;

    &::before {
      content: attr(data-label);
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translate(0, -50%);
      @include table-row-headers;
    }

    &:nth-child(5),
    &:nth-child(6) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 10px;
    }

    &:last-child {
        border-bottom: 0;
    }
  }
}

</style>
