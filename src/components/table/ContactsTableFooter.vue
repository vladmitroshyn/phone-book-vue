<template>
  <div class="table-footer">
    <div>Records: {{ recordCount }} </div>
    <div>...</div>
  </div>
</template>

<script>
export default {
  name: 'ContactsTableFooter',
  props: {
    recordCount: {
      type: Number,
      required: true,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>

.table-footer {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
