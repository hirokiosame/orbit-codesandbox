<template>
	<o-modal>
		<o-modal-pane title="View Post">
			<template
				slot="actions"
				slot-scope="modal"
			>
				<o-button
					variant="primary"
					@click="modal.close()"
				>
					Close
				</o-button>
			</template>

			<img
				width="100%"
				:src="post.url"
			>
		</o-modal-pane>
	</o-modal>
</template>
 
<script>
import { OModal, OModalPane } from 'orbit-ui/components/Modal';
import { OButton } from 'orbit-ui/components/Button';
 
export default {
	components: {
		OModal,
		OModalPane,
		OButton,
	},

	props: {
		post: {
			type: Object,
			required: true,
		},
	},
};
</script> 