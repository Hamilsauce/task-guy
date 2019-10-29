<template>
	<div class="main">
		<div id="list-container">
			<form @submit.prevent="addItem" autocomplete="off">
				<div class="button-container">
					<input
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
							<div id="date-cell" class="task-cell">
								<span>11/29/2019</span>
							</div>
							<span class="task-cell">
								<i class="fa fa-minus-circle" v-show="revealState == id" v-on:click="deleteItem(id)"></i>
							</span>
							<div v-if="revealState === id" id="item-data-display" class="task-cell">
								<form
									v-if="editDetails === true || !task.details"
									id="update-form"
									class="task-cell bottom"
								>
									<input class="details-input" type="textarea" v-model="task.details" />
									<input class="details-save" type="button" value="OK" @click="updateItem(task.id)" />
								</form>
								<span v-else @click="editDetails = true">{{ task.details }}</span>
							</div>
							<div v-show="revealState === id" id="state-cell" class="task-cell bottom">
								<span>Reveal Status: {{revealState}}</span>
							</div>
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
				revealState: null,
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
						// id: this.newId(this.tasks),
						name: this.task,
						details: this.task.details
					});

					this.storeItems(this.tasks, "taskGuyList");
					this.updateActionBrief(this.task, "add", "success");
				}

				this.task = "";
			},

			updateItem(id) {
				console.log(id);

				this.editDetails = false;
				this.storeItems(this.tasks, "taskGuyList");
				this.updateActionBrief(this.tasks[id].name, "update", "success");
			},
			deleteItem(id) {
				const deletedItem = this.tasks.splice(id, 1);
				this.submitState = false;
				this.storeItems(this.tasks, "taskGuyList");
				this.updateActionBrief(deletedItem[0].name, "delete", "success");
				this.task = "";
			},

			toggleItemReveal(id) {
				this.submitState = false;

				if (this.revealState === id) {
					this.revealState = null;
				} else {
					this.revealState = id;
					this.editDetails = false;
				}

				//special case for the actionBrief - status is not success or error
				this.revealState != null
					? this.updateActionBrief(this.tasks[id].name, "reveal", "reveal")
					: this.updateActionBrief(this.tasks[id].name, "reveal", "conceal");
			},

			/* AUX/UTILITY FUNCTIONS - used in other functions  */

			validateItemInput(taskText) {
				let whitespaceTest = taskText.trim() === !taskText ? true : false;

				if (taskText.length === 0 || whitespaceTest === true) {
					return false;
				} else {
					return true;
				}
			},

			setId(objArr) {
				let objIds = [];
				let sortIds = () => objArr.map(u => u.id).sort((a, b) => a - b);

				objIds = sortIds();
				let userId = objIds[objIds.length - 1] + 1;
				return userId;
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
			},
			newId(itemArray){
				itemArray.forEach(item => {
					item.id = itemArray.indexOf(item);
					console.log(Object.entries(item))	;
				});
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
		/* display: flex;
										justify-content: space-evenly; */
		/* align-items: center; */
		display: grid;
		grid-template-columns: 3fr 2fr 2fr; /* justify-content: space-evenly; */
		grid-template-rows: 2;
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

	.task-cell {
		font-size: 0.8em;
		padding: 5px 10px;
		text-align: center;
	}

	.bottom {
		/* background:  #bcc0c2;
			height: 100%;
			width: 100%; */
	}

	.taskItem:hover {
		border: 1px solid #404b4b8c;
		border-right: 0px;
		border-left: 17px solid #dacb46;
		color: #304141;
		/* font-weight: 500; */
		background-color: #dce6eb;
		padding-left: 16px;
		padding-right: 21px;
	}
	.task-text {
		/* font-size: 1.5em; */
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

	#item-data-display {
		cursor: pointer;
		grid-column: 1 / span 2;
		font-size: 1em;
	}
	#update-form {
		display: flex;
		justify-content: space-evenly;
	}
	.details-input {
		display: inline-block;
		/* position: sticky; */
		margin: 3px;
		padding: 3px;
		padding-left: 5px;
		color: #425e5e;
		font-size: 1em;
		border: 2px solid white;
		border-radius: 10px;
	}
	.details-save {
		/* z-index: 2; */
		display: inline;
		padding: 5px 7px;
		/* margin-top: 5px; */
		margin: 2px;
		font-weight: 600;
		font-size: 0.8rem;
		background: #434b4be7;
		color: #e7e7e7;
		border: 1px solid hsl(0, 0%, 100%);
		border-radius: 66%;
		/* box-shadow: 0px 1px 1px 0px #ffffff83 */
		cursor: pointer;
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
		/* float: right; */
		cursor: pointer;
	}
	i:hover {
		/* float: right; */
		color: rgb(231, 65, 54);
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
			margin-top: 0px;
		}
		.taskItem {
			width: auto;
		}
		.task-text {
			font-size: 0.9em;
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
			font-size: 1rem;
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
			margin-top: 0px;
		}
		.taskItem {
			width: auto;
		}

		.details-save {
			font-size: 0.7rem;
			font-weight: 500;
			padding: 5px 5px;
		}
	}
</style>