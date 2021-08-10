<template>
	<h2>App</h2>
	fistName: <input v-model="user.firstName" /><br />
	lastName: <input v-model="user.lastName" /><br />
	fullName1: <input v-model="fullName1" /><br />
	fullName2: <input v-model="fullName2" /><br />
	fullName3: <input v-model="fullName3" /><br />
</template>

<script lang="ts">
	import { reactive, ref, computed, watch, watchEffect } from "vue";

	export default {
		setup() {
			const user = reactive({
				firstName: "li",
				lastName: "heng",
			});

			const fullName1 = computed({
				get() {
					return user.firstName + " " + user.lastName;
				},
				set(val: string) {
					user.firstName = val.split(" ")[0];
					user.lastName = val.split(" ")[1];
				},
			});

			// console.log(fullName1);
			let fullName2 = ref("");
			watchEffect(() => {
				fullName2.value = user.firstName + " " + user.lastName;
			});
			watchEffect(() => {
				user.firstName = fullName2.value.split(" ")[0];
				user.lastName = fullName2.value.split(" ")[1];
			});

			const fullName3 = ref("");
			watch(
				[() => user.firstName, () => user.lastName],
				(pre, cur) => {
					console.log("pre:" + pre + " cur:" + cur);
					fullName3.value = user.firstName + " " + user.lastName;
				},
				{ immediate: true, deep: true }
			);
			watch(
				fullName3,
				(pre, cur) => {
					console.log("pre:" + pre + " cur:" + cur);
					user.firstName = fullName3.value.split(" ")[0];
					user.lastName = fullName3.value.split(" ")[1];
				},
				{ immediate: true, deep: true }
			);

			return {
				user,
				fullName1,
				fullName2,
				fullName3,
			};
		},
	};
</script>
