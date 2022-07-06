<template>
	<h3>{{ finalcounter }}</h3>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	computed: {
		...mapGetters(["finalcounter"]),
	},
};
</script>
