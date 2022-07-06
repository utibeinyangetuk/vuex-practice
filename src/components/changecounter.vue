<template>
	<!-- you can simply pass your payload as an arguement -->
	<button @click="increasing({ value: 2 })">Add 2</button>
</template>

<script>
	import { mapActions } from 'vuex'
	export default {
		methods: {
			...mapActions(['increasing']),
		},
	}
</script>
