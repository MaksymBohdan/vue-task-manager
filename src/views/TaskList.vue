<template>
  <div>
    <Select
      v-bind:options="filterOptions"
      v-bind:value="filter"
      v-on:on-change="changeFilterValue"
    />

    <List v-bind:list="allTasks" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Select from '@/components/Select.vue';
import List from '@/components/TaskList.vue';

import { filterOptions } from '@/assets/constants';

export default {
  name: 'TaskList',

  components: {
    Select,
    List,
  },

  beforeCreate() {
    this.filterOptions = filterOptions;
  },

  methods: {
    ...mapMutations(['changeFilterValue']),
  },
  computed: mapGetters(['allTasks', 'filter']),
};
</script>
