<template>
	<div class="todolist">
		<!-- 输入框 -->
		<input
			class="addInput"
			type="text"
			placeholder="请输入任务名称，按回车键添加"
			v-model="addContent"
			ref="inputRef"
			@keyup.enter="addTask()"
		/>
		<!-- 任务列表 -->
		<ul style="margin: 10px 0">
			<li class="task" v-for="(task, index) in taskList" :key="task.id">
				<div>
					<input type="checkbox" name="task" v-model="task.isFinish" @click="show" />
					<span>{{ task.content }}</span>
				</div>
				<button @click="deleteTask(index)">删除</button>
			</li>
		</ul>
		<!-- 状态操作 -->
		<div style="overflow:hidden">
			<div style="float:left">
				<input type="checkbox" style="margin:0 10px 0 5px" v-model="allFinish" />
				<span>已完成 {{ finishCount }} / 全部 {{ taskList.length }}</span>
			</div>
			<button style="float:right" @click="clear">删除已完成任务</button>
		</div>
	</div>
</template>
<script lang="ts">
	import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from "vue";

	interface Task {
		id: number;
		content: string;
		isFinish: boolean;
	}

	export default {
		setup() {
			const oriTaskList: Task[] = JSON.parse(localStorage.getItem("taskList") || "[]");
			let taskList = reactive<Task[]>(oriTaskList);
			const addContent = ref("");
			const inputRef = ref<HTMLInputElement | null>(null);
			// const finishCount = ref(0);

			function addTask(): boolean {
				if (addContent.value == "") {
					return false;
				}

				taskList.unshift({
					id: Date.now() + Math.random() * 10,
					content: addContent.value,
					isFinish: false,
				});
				// localStorage.setItem("taskList", JSON.stringify(taskList));
				addContent.value = "";
				return true;
			}

			function deleteTask(index: number): boolean {
				if (index >= taskList.length) {
					return false;
				}
				taskList.splice(index, 1);
				// localStorage.setItem("taskList", JSON.stringify(taskList));
				console.log("delete");
				return true;
			}
			function clear(): boolean {
				if (taskList.length === 0) {
					return false;
				}
				taskList.splice(0, taskList.length);
				// localStorage.removeItem("taskList");
				return true;
			}
			function updateStorage() {
				localStorage.setItem("taskList", JSON.stringify(taskList));
			}
			function show() {
				console.log(finishCount);
			}

			const finishCount = computed(() => {
				return taskList.reduce((pre, cur) => {
					return pre + (cur.isFinish ? 1 : 0);
				}, 0);
			});

			const allFinish = computed({
				get() {
					return taskList.length !== 0 && finishCount.value === taskList.length;
				},
				set(val: boolean) {
					taskList.map((task) => {
						task.isFinish = val;
					});
				},
			});
			// watch(allFinish, (val) => {
			// 	console.log("watch");
			// 	taskList.map((task) => {
			// 		task.isFinish = val;
			// 	});
			// });
			onMounted(() => {
				console.log("Component is mounted!");
				inputRef.value && inputRef.value.focus();

				window.onbeforeunload = updateStorage;
			});
			onBeforeUnmount(() => {
				// alert(123);
				window.removeEventListener("beforeunload", updateStorage);
				// localStorage.setItem((Math.random() * 10).toString(), JSON.stringify(Date.now()));
			});
			return {
				finishCount,
				allFinish,
				inputRef,
				taskList,
				addContent,
				addTask,
				deleteTask,
				clear,
				show,
			};
		},
		// beforeUnmount() {},
	};
</script>
<style scoped>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.todolist {
		width: 400px;
		/* background-color: skyblue; */
		border: 1px solid black;
		margin: 50px auto;
		padding: 10px 5px;
	}
	.todolist > .addInput {
		height: 30px;
		width: 100%;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.todolist ul {
		/* border-color: 1px solid 1px solid 1px solid; */
	}
	/* .stateOpera {
		display: flex;
		align-content: space-around;
	} */
	.task {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 50px;
		border: 1px solid;
		margin-bottom: -1px;
	}
	.task:hover {
		background-color: #ccc;
		box-shadow: #ccc 2px 2px 2px 2px;
	}
	.task button {
		height: 30px;
	}
	.task input {
		margin: 0 5px;
	}
	.task.span {
		/* vertical-align: center;l */
		line-height: auto;
	}
</style>
