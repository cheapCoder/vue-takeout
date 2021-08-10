<template>
	<div :style="{ color }">
		grandSong
	</div>
  <div>{{color}}</div>
</template>
<script type="text/ecmascript-6" lang="ts">
	import { inject } from "@vue/runtime-core";
	export default {
		setup() {
			const color = inject("color");
      return {
        color
      }
		},
	};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus"></style>
