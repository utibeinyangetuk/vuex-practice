<template>
	<Container title="working with vuex" v-if="userAuthentication">
		<Counter />
		<fav />
		<button @click="normal({ value: 10 })">Add 10</button> |
		<changecounter />
	</Container>
	<br />
	<container title="authentication">
		<UserAuth />
	</container>
</template>

<script>
	import UserAuth from "./components/UserAuth.vue";
	import fav from "./components/fav.vue";
	import changecounter from "./components/changecounter.vue";
	import Counter from "./components/Counter.vue";
	import Container from "./components/Container.vue";
	import { mapActions, mapGetters } from "vuex";
	export default {
		components: {
			Container,
			Counter,
			changecounter,
			fav,
			UserAuth,
		},

		methods: {
			...mapActions(["normal"]),
		},
		computed: {
			...mapGetters(["userAuthentication"]),
		},
	};
</script>
