<template>
	<o-table :row-data="tableData">
		<o-table-col property="name">
			Planet
			<template
				slot="formatter"
				slot-scope="props"
			>
				{{ props.content }}<br>
				({{ props.data.type }})
			</template>
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
			property="mass"
			align="right"
		>
			Mass
			<template
				slot="formatter"
				slot-scope="props"
			>
				{{ formatNumber(props.content) }} × 10<sup>24</sup> kg
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
			tableData: [
				{
					name: 'Mercury',
					type: 'Terrestrial Planet',
					diameter: 4879,
					mass: 0.330,
				},
				{
					name: 'Venus',
					type: 'Terrestrial Planet',
					diameter: 12104,
					mass: 4.87,
				},
				{
					name: 'Earth',
					type: 'Terrestrial Planet',
					diameter: 12756,
					mass: 5.97,
				},
			],
		};
	},
 
	methods: {
		formatNumber: n => n.toLocaleString('en-US'),
		editRow(row) {
			this.modalLayer.open(
				EditRowData,
				{
					props: { row },
					on: {
						update: newData => Object.assign(row, newData),
					},
				},
			);
		},
	},
};
</script> 