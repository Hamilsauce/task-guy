<template>
	<div class="main">
		<div id="list-container">
			<form @submit.prevent="addItem()" autocomplete="off">
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

						<li v-for="(task, id) in tasks" :key="id" class="taskItem" :class="{taskItemSelected: revealState === id}">
							<div class="task-name-cell" @click="toggleItemReveal(id)">
								<span  class="task-text">{{ task.name }}</span>
							</div>
							<div id="completion-cell" class="task-cell">
								<select  v-model="task.completion" @change="changeCompletionStatus"  id="complete-status-input" class="select-control">
									<option>Not-started</option>
									<option>In-Progress</option>
									<option>Complete</option>
								</select>
							</div>
							<span class="task-cell">
								<i class="fa fa-minus-circle" v-on:click="deleteItem(id)"></i>
							</span>
							<div class="task-cell" id="details-cell">
								<div
									v-if="revealState === id"
									id="item-data-display"
									@click="editDetails = true"

									class="task-cell"
								>
									<form
										v-if="editDetails === true || !task.details"
										id="update-form"
										class="task-cell bottom"
										@keypress.enter="updateItem"
										@submit.prevent="updateItem(task.name)"
									>
										<textarea rows="5" class="details-input-input" type="textarea" v-model="task.details"></textarea>
									</form>
									<span v-show="editDetails === false">{{ task.details }}</span>
								</div>
								<div
									v-show="revealState === id && editDetails === true"
									id="save-buttton-cell"
									class="task-cell bottom"
								>
									<input class="details-save-button" type="button" value="OK" @click="updateItem(task.name)" />
								</div>
							</div>
							<div v-show="revealState === id" id="date-cell" class="task-cell bottom">{{task.date}}</div>

							<!-- <div>11/29/2019</div> -->
						</li>
					</transition-group>
				</ul>
			</div>
			<message-center v-bind:actionBrief="actionBrief" :itemCount="itemCount" class="messageBox" />
			<!-- <p v-if="tasks.length > 1"  class="messageBox">You got some tasks!</p>
			<p v-else-if="tasks.length == 1" class="messageBox">You gone and got yourself a task!</p>
			<p v-else-if="tasks.length < 1" class="messageBox">Not a damn task!</p>-->
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
				task: '',

				tasks: [],
				submitState: false,
				revealState: null,
				showAlert: false,
				actionBrief: {
					itemName: "",
					actionType: "",
					status: "" //looking for success, error, or none
				},
				newTaskDate: '',
				updatedCompletionStatus: ''
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
				} else if (isValid === true && this.submitState === true) {
					this.newTaskDate = new Date();

					this.tasks.push({

						id: this.itemCount,
						name: this.task,
						details: "Click here to add notes!",
						date: this.newTaskDate.toDateString(),
						completion: this.updatedCompletionStatus
					});

					this.storeItems(this.tasks, "taskGuyList");
					this.updateActionBrief(this.task, "add", "success");
				}
				this.newTaskDate = '';
				this.task = "";
			},

			changeCompletionStatus(id) {

				this.storeItems(this.tasks, "taskGuyList");
				this.updateActionBrief(this.task.name, "update", "success")

				this.updatedCompletionStatus = '';
				this.task = '';
			},

			updateItem(name) {
				console.log(name);

				this.editDetails = false;
				this.storeItems(this.tasks, "taskGuyList");
				this.updateActionBrief(name, "update", "success");
			},

			deleteItem(id) {
				const deletedItem = this.tasks.splice(id, 1);
				this.submitState = false;
				this.storeItems(this.tasks, "taskGuyList");
				this.updateActionBrief(deletedItem[0].name, "delete", "success");
				this.task = "";
				this.revealState = null;
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
			toggleEditDetails() {
				this.editDetails = !this.editDetails;
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

			setId(itemArray, item) {
				let newId = [];

				console.log(itemArray);
				console.log(item);
				let objIndex = itemArray.indexOf(item);
				console.log(objIndex);

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
					: [
							{ name: "See tasks here...", details: "Details go here!" },
							{ name: "Oh such task!" }
					  ];
				this.tasks = storedTasks;
				// this.$refs.inputField.focus();
			}
		},
		computed: {
			itemCount() {
				let count = this.tasks.length + 1;
				return count;
			}
		},
		mounted() {
			this.initializeItemList();
		},
		watch: {
			// updatedCompletionStatus() {
			// 	this.changeCompletionStatus(this.task.id);
			// }
		},
	};
	/* eslint-disable */
</script>


<style scoped>