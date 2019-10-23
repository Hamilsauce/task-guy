<template>
	<div class="main">
		<div id="list-container">
			<form @submit.prevent="addItem" autocomplete="off">
				<div class="button-container">
					<input
						ref="inputField"
						type="text"
						placeholder="Enter a task here..."
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
						<li v-for="(task, id) in tasks" :key="id" class="taskItem">
							<span @click="toggleItemReveal(id)" class="task-text">{{ task.name }}</span>
							<div v-if="revealStatus === id" id="item-data-display">

								<input v-if="editDetails === true || !task.details" type="text" v-model="task.details">
								<p v-else @click="editDetails = true">{{ task.details }} </p>
								<input v-if="editDetails === true || !task.details" type="button" value="save" @click="editDetails = false">
							</div>
							<i class="fa fa-minus-circle" v-on:click="deleteItem(id)"></i>
						</li>
					</transition-group>
				</ul>
			</div>
			<!-- <p v-if="tasks.length > 1"  class="messageBox">You got some tasks!</p>
			<p v-else-if="tasks.length == 1" class="messageBox">You gone and got yourself a task!</p>
			<p v-else-if="tasks.length < 1" class="messageBox">Not a damn task!</p>-->
			<message-center v-bind:actionBrief="actionBrief" :itemCount="itemCount" class="messageBox" />
		</div>
		<div v-bind:class="{alert: showAlert}"></div>
	</div>
</template>

<script>
	/* eslint-disable */
	import MessageCenter from "./MessageCenter.vue";

	export default {
		name: "Tasks",
		components: {
			MessageCenter
		},
		data() {
			return {
				editDetails: true,
				task: "",
				tasks: [],
				submitState: false,
				revealStatus: null,
				showAlert: false,
				actionBrief: {
					itemName: "",
					actionType: "",
					status: "" //looking for success, error, or none
				}
			};
		},
		props: {
			placeholder: Array,
			username: String
		},
		methods: {
			addItem() {
				this.submitState = true;
				let isValid = this.validateItemInput(this.task);

				if (isValid === false && this.submitState === true) {


					this.updateActionBrief("", "add", "error");
					// this.submitState = false;
					// this.$refs.inputField.focus();
				} else if (isValid === true && this.submitState === true) {
					this.tasks.push({
						id: this.tasks.length + 1,
						name: this.task,
						details: this.task.details
						 });
					this.storeItems(this.tasks, "taskGuyList");
					this.updateActionBrief(this.task, "add", "success");
				}

				this.task = "";
			},

			deleteItem(id) {
				const deletedItem = this.tasks.splice(id, 1);
				this.submitState = false;
				this.storeItems(this.tasks, "taskGuyList");
				this.updateActionBrief(deletedItem[0].task, "delete", "success");
				this.task = "";
			},

			toggleItemReveal(id) {
				this.submitState = false;

				if (this.revealStatus === id) {
					this.revealStatus = null;
				} else {
					this.revealStatus = id;
				}

				//special case for the actionBrief - status is not success or error
				this.revealStatus != null
					? this.updateActionBrief(this.tasks[id].task, "reveal", "reveal")
					: this.updateActionBrief(this.tasks[id].task, "reveal", "conceal");
			},

			/* AUX/UTILITY FUNCTIONS - used in other functions  */

			validateItemInput(taskText) {
				let whitespaceTest = taskText.match(/^\s*$/) ? true : false;

				if (taskText.length === 0 || whitespaceTest === true) {
					return false;
				} else {
					return true;
				}
			},

			//accepts generic actionProerty, so that it can be called at various points in the process to populate different prperties
			updateActionBrief(name, type, status) {
				this.actionBrief = { name, type, status };

				return;
			},

			storeItems(taskList, itemName) {
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

			initializeItemList() {
				let storedTasks = localStorage.getItem("taskGuyList")
					? JSON.parse(localStorage.getItem("taskGuyList"))
					: [{ task: "See tasks here..." }, { task: "Oh such task!" }];
				this.tasks = storedTasks;
				// this.$refs.inputField.focus();
			}
		},
		computed: {
			itemCount() {
				let count = 0;
				count = this.tasks.length;
				return count;
			}
		},
		mounted() {
			this.initializeItemList();
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
		width: 750px;
		margin: auto;
		padding: 0px 2px 0px 1px;
	}
	#list-container {
		box-sizing: border-box;
		margin: auto;
		width: 750px;
		background: #fff;
		box-shadow: 0px 8px 15px 8px rgba(104, 96, 96, 0.349);
		border: 0px outset #3f474752;
		border-top: 0px;
		border-radius: 5px 5px 5px 5px;
	}

	.task-list-view {
		z-id: 2;
		max-height: 300px;
		overflow: auto;
		margin: 0px 2px;

	}

	ul {
		margin: 0;
		padding: 0;
		padding-bottom: 2px;
		scrollbar-base-color: yellow;
		list-style-type: none;
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
		border: 1px solid #fafafada;
		border-bottom: 1px solid rgb(196, 194, 194);
		border-left: 10px solid #64a5be;
		border-radius: 0px 0px 3px 3px;
		margin: 0px 1px 2px 1px;
		color: #425e5e;
		transition: background-color 800ms ease-out, border 200ms ease-out,
			padding 250ms ease-out;
	}

	.taskItem:hover {
		border: 2px solid #404b4b8c;
		border-right: 0px;
		border-left: 16px solid #dacb46;
		color: #304141;
		font-weight: 500;
		font-size: 1.5em;
		background-color: #dce6eb;
		padding-left: 6px;
	}
	.task-text {
		text-decoration: none;
		cursor: pointer;
		font-weight: 500;
		transition: text-decoration 500ms ease-out;
		max-width: fit-content;
	}
	.task-text:hover {
		text-decoration: underline;
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
		margin: 0px 0px 0px 0px;
		border-radius: 5px 5px 2px 2px;

	}
	#submit-button {
		box-sizing: border-box;
		position: absolute;
		padding: 0px;
		padding-right: 30px;
		margin: 0px;
		height: 35px;
		border: 0px solid rgba(255, 255, 255, 0.8);
		text-align: center;
		color: #dbdbdb;
		font-size: 2.3rem;
		background: rgba(255, 255, 255, 0);
		cursor: pointer;
		transition: background 200ms ease-out, font-weight 200ms ease-out;
	}

	#submit-button:hover {
		/* background: rgb(255, 255, 255); */

		font-weight: bolder;
	}
	#task-input {
		width: calc(100% - 40px);
		border: 0;
		padding: 20px;
		font-size: 1.5em;
		font-family: Montserrat;
		background-color: #434b4b;
		color: #757575;
		border-radius: 5px 5px 2px 2px;
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
		body {
			position: inherit;
			width: 100%;
		}

		#list-container {
			min-width: 300px;
			margin: auto;
			height: auto;

			margin: auto;
			margin-top: 10px;
		}
		.taskItem {
			width: auto;
		}
	}

	@media screen and (max-width: 450px) {
		.taskItem,
		#task-input,
		.messageBox,
		body {
			position: inherit;
			/* width: 100%; */
			font-size: 1rem;
			margin: auto;
			padding: 15px;

			/* padding: 25px; */
		}
		#task-input {
			padding: 15px;
		}

		.taskItem:hover {
			font-size: 1.1rem;
		}
		#submit-button {
			font-size: 2rem;
			padding-right: 5px;
		}
		.main {
			justify-content: space-around;
			width: 99%;

			margin: auto;
			margin-top: 0;
		}

		#list-container {
			width: 100%;

			height: auto;

			margin: auto;
			margin-top: 0;
		}
		.taskItem {
			width: auto;
		}
	}
</style>