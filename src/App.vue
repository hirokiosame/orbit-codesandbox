<template>
	<o-layout has-layers>
		<o-layout-sider>
			<logo />
			<br>
			<br>
			<o-nav>
				<o-nav-link to="#">My Account</o-nav-link>
				<o-nav-link to="#" active>Space posts</o-nav-link>
				<o-nav-link to="#">Logout</o-nav-link>
			</o-nav>
		</o-layout-sider>
		<page />
	</o-layout>
</template>

<script>
import { OLayout, OLayoutSider } from 'orbit-ui/components/Layout';
import { ONav, ONavLink } from 'orbit-ui/components/Nav';
import Logo from './Logo.vue';
import Page from './Page.vue';

export default {
	components: {
		OLayout,
		OLayoutSider,
		Logo,
		Page,
		ONav,
		ONavLink,
	},
};
</script>
