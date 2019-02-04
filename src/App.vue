<template>
  <o-table
      :row-data="names"
      :checked="checkList"
  >
      <o-table-col property="first">
          First name
      </o-table-col>
      <o-table-col property="last">
          Last name
      </o-table-col>
  </o-table>
</template>

<script>
import { OTable, OTableCol } from 'orbit-ui/components/Table';

export default {
  components: {
    OTable,
    OTableCol,
  },

  data() {
    return {

      names: [
        { first: 'Jacob', last: 'Rex' },
        { first: 'Hiroki', last: 'Osame' },
        { first: 'Lokesh', last: 'Dhakar' },
      ],

      checkList: [],
    };
  },
};
</script>
