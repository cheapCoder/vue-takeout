<template>
	<div>hello vue3</div>
	<h1>{{ count }}</h1>
	<h1>{{ heng }}</h1>
	<h1>{{ obj }}</h1>
	<button @click="add">click it</button>
	<hr />
	<Child :msg="msg"  msg2="a attribute" />
</template>

<script lang="ts">
	import { defineComponent, reactive, ref } from "vue";
	import Child from "./components/Child.vue";
	export default defineComponent({
		name: "App",
		setup(prop, context) {

			const count = ref(0);
			console.log(count);
			let obj = { name: "liheng", age: 22 };
			const heng = reactive(obj);
			// console.log(heng);
			function add() {
				// console.log("add");
				// count.value++;
				// obj = {name:'what', age: 11};
				// obj.newProp = "newProp";
				// console.log( heng);
				// console.log(obj);
				// delete heng.name;
			}
			// obj.age = 10;
			return {
				msg: "hello",
				count,
				add,
				heng,
				obj,
			};
		},
		data() {
			return {
				num: 1,
			};
		},

		mounted() {
			// console.log(this);
		},
		components: {
			Child,
		},
	});
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
