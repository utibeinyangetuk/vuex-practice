<template>
	<div id="wrapper">
		<h2>{{ title }}</h2>
		<slot />
	</div>
</template>

<script>
	export default {
		props: ["title"],
	};
</script>

<style scoped>
	#wrapper {
padding: 10px 50px;
		width: 400px;
		height: 100%;
		border-radius: 5px;
		box-shadow: 0 2px 2px 0 #999;
		background-color: #fff;
	}

	h2 {
		font-size: 35px;
		letter-spacing: 2px;
	}
</style>
