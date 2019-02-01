<template>
	<o-modal>
		<o-modal-pane title="Edit Planet">
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
				<o-grid>
					<o-form-item
						label="Planet name"
						slot="grid-item"
					>
						<o-input v-model="clonedPlanet.planet" />
					</o-form-item>
					<o-form-item
						label="Diameter"
						slot="grid-item"
					>
						<o-input
							v-model="clonedPlanet.diameter"
							suffix="km"
						/>
					</o-form-item>
				</o-grid>
				<o-form-item label="Icon URL">
					<o-input v-model="clonedPlanet.icon" />
				</o-form-item>
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
		planet: {
			type: Object,
			required: true,
		},
	},

	data() {
		return {
			clonedPlanet: { ... this.planet },
		};
	},

	methods: {
		saveData(modal) {
			this.$emit('update', this.clonedPlanet);
			modal.close();
		},
	},
};
</script> 