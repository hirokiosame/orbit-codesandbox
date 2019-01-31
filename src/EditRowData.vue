<template>
	<o-modal>
		<o-modal-pane :title="clonedRow.name">
			<template
				slot="actions"
				slot-scope="modal"
			>
				<o-button
					variant="primary"
					@click="saveData(modal)"
				>
					Save
				</o-button>
			</template>

			<o-form @submit.prevent>
				<o-form-item label="Planet name">
					<o-input v-model="clonedRow.name" />
				</o-form-item>
					<o-form-item label="Planet type">
					<o-input v-model="clonedRow.type" />
				</o-form-item>
				<o-grid>
					<o-form-item
						label="Diameter"
						slot="grid-item"
					>
						<o-input
							v-model="clonedRow.diameter"
							suffix="km"
						/>
					</o-form-item>
					<o-form-item
						label="Mass"
						slot="grid-item"
					>
						<o-input v-model="clonedRow.mass">
							<template slot="suffix">
								× 10<sup>24</sup> kg
							</template>
						</o-input>
					</o-form-item>
				</o-grid>
			</o-form>
		</o-modal-pane>
	</o-modal>
</template>
 
<script>
import { OModal, OModalPane } from 'orbit-ui/components/Modal';
import { OGrid } from 'orbit-ui/components/Grid';
import { OForm, OFormItem } from 'orbit-ui/components/Form';
import { OInput } from 'orbit-ui/components/Input';
import { OButton } from 'orbit-ui/components/Button';
 
export default {
	components: {
		OModal,
		OModalPane,
		OForm,
		OFormItem,
		OGrid,
		OInput,
		OButton,
	},

	props: {
		row: {
			type: Object,
			required: true,
		},
	},

	data() {
		return {
			clonedRow: { ... this.row },
		};
	},

	methods: {
		saveData(modal) {
			this.$emit('update', this.clonedRow);
			modal.close();
		},
	},
};
</script> 