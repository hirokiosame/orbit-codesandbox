<template>
	<o-table :row-data="tableData">
		<o-table-col property="icon">
			Planet
			<template
				slot="formatter"
				slot-scope="props"
			>
				<img
					:src="props.content"
					align="middle"
				>
			</template>
		</o-table-col>
		<o-table-col property="planet">
			Name
		</o-table-col>
		<o-table-col
			property="diameter"
			align="right"
		>
			Diameter
			<template
				slot="formatter"
				slot-scope="props"
			>
				{{ formatNumber(props.content) }} km
			</template>
		</o-table-col>
		<o-table-col
			width="10%"
			align="right"
		>
			<template
				slot="formatter"
				slot-scope="props"
			>
				<o-button
					variant="muted"
					@click.stop="editRow(props.data)"
				>
					Edit
				</o-button>
			</template>
		</o-table-col>
	</o-table>
</template>
 
<script>
import { OTable, OTableCol } from 'orbit-ui/components/Table';
import { OButton } from 'orbit-ui/components/Button';
import { ModalLayer } from 'orbit-ui/components/Modal';
import EditRowData from './EditRowData';

export default {
	components: {
		OTable,
		OTableCol,
		OButton,
	},

	inject: {
		modalLayer: ModalLayer,
	},
 
	data() {
		return {
			tableData: [],
		};
	},
 
	methods: {
		formatNumber: n => parseFloat(n).toLocaleString('en-US'),
		editRow(planet) {
			this.modalLayer.open(
				EditRowData,
				{
					props: { planet },
					on: {
						update: newData => Object.assign(planet, newData),
					},
				},
			);
		},
		async fetchData() {
			const data = await fetch('https://gist.githubusercontent.com/hirokiosame/8af28509864aed5657693aef99005477/raw/b58d0d03e4b42cea25783125370925e138ed4506/planets.json').then(data => data.json());

			this.tableData = data;
		},
	},

	created() {
		this.fetchData();
	},
};
</script> 