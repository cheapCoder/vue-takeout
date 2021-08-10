<template>
	<button @click="textColor = 'red'">red</button>
	<button @click="textColor = 'skyblue'">skyblue</button>
	<button @click="textColor = 'hotpink'">hotpink</button>
	<hr>
	<Child/>
</template>
<script lang="ts">
	import { provide, ref } from "vue";
	import Child from './components/Child.vue'
	export default {
		setup() {
			let textColor = ref("black");
			provide("color", textColor);
			return {
				textColor,
			};
			
		},
		components: {
			Child
		}
	};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus"></style>
