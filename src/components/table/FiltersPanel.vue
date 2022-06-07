<template>
  <div class="filters__wrapper">
    <div class="filters__container">
      <FilterInput
        :value="filters.firstName"
        :placeholder="'By first name...'"
        :name="'byFirstName'"
        @updateValue="(val) => $emit('updateFilterFirstName', val)"
      />
    </div>
    <div class="filters__container">
      <FilterInput
        :value="filters.lastName"
        :placeholder="'By second name...'"
        :name="'byLastName'"
        @updateValue="(val) => $emit('updateFilterLastName', val)"
      />
    </div>
    <div class="filters__container">
      <FilterInput
        :value="filters.phone"
        :placeholder="'By phone...'"
        :name="'byPhone'"
        @updateValue="(val) => $emit('updateFilterPhone', val)"
      />
    </div>
    <div class="filters__container">
      <FilterInput
        :value="filters.email"
        :placeholder="'By email...'"
        :name="'byEmail'"
        @updateValue="(val) => $emit('updateFilterEmail', val)"
      />
    </div>
  </div>
</template>

<script>
import FilterInput from './FilterInput.vue'

export default {
  name: 'FiltersPanel',
  components: { FilterInput },
  props: {
    filters: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>

.filters {
  &__wrapper {
    width: 100%;
    min-width: 1000px;
    display: flex;
    margin: 5px 0;
  }

  &__container {
    &:nth-child(1),
    &:nth-child(2) {
      flex-basis: 15%;
    }

    &:nth-child(3) {
      flex-basis: 25%;
    }

    &:nth-child(4) {
      flex-basis: 35%;
    }
  }
}

@media screen and (max-width: 600px) {
  .filters {
    &__wrapper {
      flex-direction: column;
      align-items: start;
      min-width: 0;
    }

    &__container {
      width: 100%;
    }
  }
}

</style>
