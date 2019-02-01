<template>
	<div>
		<o-search
			v-model="searchQuery"
			placeholder="Search for a post"
		/>

		<br>

		<o-table :row-data="filteredData">
			<o-table-col
				width="90px"
				property="thumbnail"
			>
				<template
					slot="formatter"
					slot-scope="{ content }"
				>
					<img
						v-if="content.startsWith('http')"
						:src="content"
						width="50px"
					>
				</template>
			</o-table-col>

			<o-table-col property="title">
				Title
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
						@click.stop="viewPost(props.data)"
					>
						View
					</o-button>
				</template>
			</o-table-col>
 		</o-table>
	</div>
</template>
 
<script>
import { OTable, OTableCol } from 'orbit-ui/components/Table';
import { OSearch } from 'orbit-ui/components/Search';
import { OButton } from 'orbit-ui/components/Button';
import { ModalLayer } from 'orbit-ui/components/Modal';
import ViewPost from './ViewPost';

export default {
	components: {
		OTable,
		OTableCol,
		OSearch,
		OButton,
	},

	inject: {
		modalLayer: ModalLayer,
	},
 
	data() {
		return {
			searchQuery: '',
			tableData: [],
		};
	},
 
	computed: {
		filteredData() {
			const { searchQuery, tableData } = this;
			const pattern = new RegExp(searchQuery, 'i');
			return !searchQuery ? tableData : tableData.filter(row => row.title.match(pattern));
		},
	},

	created() {
		this.fetchData();
	},

	methods: {
		async fetchData() {
			const { data } = await fetch('https://www.reddit.com/r/spaceporn/new.json').then(data => data.json());
			this.tableData = data.children.map(({ data }) => data).filter(data => data.url).slice(0, 5);
		},
		viewPost(post) {
			this.modalLayer.open(
				ViewPost,
				{ props: { post } },
			);
		},
	},
};
</script> 