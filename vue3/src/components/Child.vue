<template>
	<div>child</div>
	<hr>
	<GrandSon />
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import GrandSon from "./GrandSon.vue";
	export default defineComponent({
		name: "Child",
		props: {
			msg: String,
		},
		components: {
			GrandSon,
		},
	});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
</style>
