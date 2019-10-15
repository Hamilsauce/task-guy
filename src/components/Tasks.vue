/* eslint-disable */

<template>
	<div class="main">
		<div id="list-container">
			<form @submit.prevent="addTask" autocomplete="off">
				<div class="button-container">
					<input
						ref="inputField"
						type="text"
						placeholder="Enter a task"
						v-model="task"
						v-validate="'min:5'"
						name="task"
						id="task-input"
					/>
					<input type="submit" value="+" id="submit-button" />
				</div>
			</form>
			<div class="task-list-view">
				<ul>
					<transition-group
						name="list"
						enter-active-class="animated bounceInUp"
						leave-active-class="animated bounceOutDown"
					>
						<li v-for="(data, index) in tasks" :key="index" class="taskItem">
							<span @click="toggleItemReveal" class="task-text">{{ data.task }}</span>
							<i class="fa fa-minus-circle" v-on:click="deleteTask(index)"></i>
							<div v-if="revealStatus === true" id="item-data-display">
								Bid data yeah
								<p>{{ task }}</p>
							</div>
						</li>
					</transition-group>
				</ul>
			</div>
			<p v-if="tasks.length > 1" class="messageBox">You got some tasks!</p>
			<p v-else-if="tasks.length == 1" class="messageBox">You gone and got yourself a task!</p>
			<p v-else-if="tasks.length < 1" class="messageBox">Not a damn task!</p>
		</div>
		<div v-bind:class="{alert: showAlert}"></div>
	</div>
</template>

<script>
	/* eslint-disable */
	export default {
		name: "Tasks",
		data() {
			return {
				task: "",
				tasks: [],
				revealStatus: false,
				showAlert: false
			};
		},
		props: {
			placeholder: Array
		},
		methods: {
			addTask() {
				let isValid = this.validateTaskInput(this.task);

				if (isValid === false) {
					alert("Enter task informatio before submitting.");
					return;
				} else {
					this.tasks.push({ task: this.task });
					this.task = "";

					this.storeTasks(this.tasks, "taskGuyList");
					this.$refs.inputField.focus();
				}
			},

			deleteTask(id) {
				this.tasks.splice(id, 1);

				this.storeTasks(this.tasks, "taskGuyList");
			},
			toggleItemReveal() {
				this.revealStatus = !this.revealStatus;
			},

			/* AUX/UTILITY FUNCTIONS - used in other functions  */

			validateTaskInput(taskText) {
				let whitespaceTest = taskText.match(/^\s*$/) ? true : false;

				if (taskText.length === 0 || whitespaceTest === true) {
					return false;
				} else {
					return true;
				}
			},

			storeTasks(taskList, itemName) {
				if (!taskList || taskList.length == 0) {
					// eslint-disable-next-line
					console.log("No tasks found in list; clearing storage items");
					localStorage.removeItem(itemName);
					return;
				} else if (!itemName) {
					// eslint-disable-next-line
					console.error(
						"No item name supplied for storage reference; tasks not saved!"
					);
					return;
				}
				localStorage.setItem(itemName, JSON.stringify(taskList));
			},

			initalizeTasks() {
				let storedTasks = localStorage.getItem("taskGuyList")
					? JSON.parse(localStorage.getItem("taskGuyList"))
					: [{ task: "See tasks here!" }];
				this.tasks = storedTasks;
			}
		},
		mounted() {
			this.initalizeTasks();
		}
	};
	/* eslint-disable */
</script>


<style scoped>
	@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
	@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

	input:focus,
	textarea:focus,
	select:focus {
		outline: none;
	}
	html {
		scrollbar-base-color: yellow;
	}

	.main {
		display: flex;
		box-sizing: border-box;
		/* justify-content: flex-; */
		/* padding: 0px 50px; */
		max-width: 700px;
		margin: auto;
	}
	#list-container {
		box-sizing: border-box;
		margin: auto;
		width: 80%;
		background: #fff;
		box-shadow: 0px 8px 15px 8px rgba(153, 153, 153, 0.486);
		border: 1px solid rgba(255, 255, 255, 0.37);
		border-top: 0px;
		border-radius: 5px 5px 5px 5px;
	}

	.task-list-view {
		max-height: 400px;
		overflow: auto;
		box-shadow: 0px 0px 5px 5px inset rgba(153, 153, 153, 0.486);
		margin: 0px 5px;
	}

	ul {
		margin: 0;
		padding: 0;
		padding-bottom: 2px;
		scrollbar-base-color: yellow;
		list-style-type: none;

		/* border-bottom: 3px inset #c5c5c5; */
	}

	.taskItem {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 17px;
		padding-left: 24px;
		padding-right: 20px;
		font-size: 1.5em;
		background-color: #d9dee0;
		border-bottom: 1px solid rgb(196, 194, 194);
		border-left: 10px solid #64a5be;
		border-radius: 0px 0px 3px 3px;
		margin: 0px 1px 2px 1px;
		color: #425e5e;
		/* transition : padding 500ms ease-out;
																										transition : border 500ms ease-out; */
		transition: background-color 800ms ease-out, border 200ms ease-out,
			padding 250ms ease-out;
	}

	.task-text {
		text-decoration: none;
		cursor: pointer;
		font-weight: 500;
		transition: text-decoration 500ms ease-out;
	}
	.task-text:hover {
		text-decoration: underline;
	}

	.taskItem:hover {
		border-left: 16px solid #dacb46;
		color: #304141;
		font-weight: 500;
		font-size: 1.5em;
		background-color: #dce6eb;
		padding-left: 26px;
	}

	.messageBox {
		text-align: center;
		padding: 30px 0;
		margin-left: 5px;
		margin-right: 5px;
		margin-top: 10px;
		color: gray;
		border-top: 2px solid #cccccc;

		border-radius: 0px 0px 5px 5px;
	}

	.button-container {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding-right: 15px;
		background-color: #434b4b;
		margin: 0px 1px 0px 1px;
		border-radius: 5px 5px 0px 0px;
	}
	#submit-button {
		position: absolute;
		padding: 0px;
		margin: 0px;
		width: 30px;
		height: 30px;
		border: 2px solid rgba(255, 255, 255, 0.8);
		border-radius: 50%;
		color: #394141;
		font-size: 26px;
		font-weight: bold;
		background: rgba(255, 255, 255, 0.8);
		box-shadow: 0px 0px 3px 2px inset rgba(255, 255, 255, 0.267);
		cursor: pointer;
		transition: background 200ms ease-out, font-weight 200ms ease-out;
	}

	#submit-button:hover {
		background: rgb(255, 255, 255);
		font-weight: bolder;
	}
	#task-input {
		width: calc(100% - 40px);
		border: 0;
		padding: 20px;
		font-size: 1.5em;
		font-family: Varela;
		background-color: #434b4b;
		color: #757575;
		border-radius: 5px 5px 0px 0px;
		margin-top: 0;
	}

	#task-input:focus {
		color: #c2c2c2;
	}

	.alert {
		background: #fdf2ce;
		font-weight: bold;
		display: inline-block;
		padding: 5px;
		margin-top: -20px;
	}
	.alert-in-enter-active {
		animation: bounce-in 0.5s;
	}
	.alert-in-leave-active {
		animation: bounce-in 0.5s reverse;
	}
	@keyframes bounce-in {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1.5);
		}
		100% {
			transform: scale(1);
		}
	}
	i {
		float: right;
		cursor: pointer;
	}

	@media screen and (max-width: 600px) {
		.taskItem,
		.task-text,
		#task-input,
		.main,
		p,
		body {
			position: inherit;
			width: 100%;
			font-size: 1rem;
		}

		#list-container {
			width: 80%;
			margin: auto;
			height: auto;

			margin: auto;
			margin-top: 10px;
		}
		.taskItem {
			width: auto;
		}
	}

	@media screen and (max-width: 600px) {
		.taskItem,
		.task-text,
		#task-input,
		.messageBox,
		body {
			position: inherit;
			width: 100%;
			font-size: 1rem;
			margin: auto;

			/* padding: 25px; */
		}
		.main {
			justify-content: space-around;
			width: 380px;
		}

		#list-container {
			width: 100%;

			height: auto;

			margin: auto;
		}
		.taskItem {
			width: auto;
		}
	}
</style>