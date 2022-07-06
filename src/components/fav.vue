<template>
	<h3>{{ normalize }}</h3>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	computed: {
		...mapGetters(["normalize"]),
	},
};
</script>
