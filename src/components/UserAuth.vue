<template>
	<button @click="login" v-if="!userAuthentication">Login</button>
	<button @click="logout" v-if="userAuthentication">Logout</button>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";

	export default {
		methods: {
			...mapActions(["login", "logout"]),
		},
		computed: {
			...mapGetters(["userAuthentication"]),
		},
	};
</script>
