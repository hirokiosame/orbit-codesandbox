<template>
	<o-layout>
		<o-layout-header>
			<o-heading>
				Planet Data
			</o-heading>
		</o-layout-header>
		<o-layout-content>
			<data-table />
		</o-layout-content>
	</o-layout>
</template>

<script>
import { OLayout, OLayoutHeader, OLayoutContent } from 'orbit-ui/components/Layout';
import { OHeading } from 'orbit-ui/components/Heading';
import DataTable from './DataTable.vue';

export default {
	components: {
		OLayout,
		OLayoutHeader,
		OLayoutContent,
		OHeading,
		DataTable,
	},
};
</script>
