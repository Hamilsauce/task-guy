<template>
	<li class="taskItem" :class="{taskItemSelected: revealState === id}">
		<div class="task-name-cell" @click="toggleItemReveal(id)">
			<span class="task-text">{{ task.name }}</span>
		</div>
		<div id="completion-cell" class="task-cell">
			<select
				v-model="task.completion"
				@change="changeCompletionStatus"
				id="complete-status"
				class="select-control"
			>
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
				class="task-cell"
				@click="editDetailHack = true"
			>
				<form
					v-if="editDetails === true || !task.details"
					id="update-form"
					class="task-cell bottom"
					@keypress.enter="updateItem"
					@submit.prevent="updateItem(task.name)"
				>
					<textarea rows="4" class="details-input" type="textarea" v-model="task.details"></textarea>
				</form>
				<span v-show="editDetails === false">{{ task.details }}</span>
			</div>
			<div
				v-show="revealState === id && editDetails === true"
				id="save-buttton-cell"
				class="task-cell bottom"
			>
				<input class="details-save" type="button" value="OK" @click="updateItem(task.name)" />
			</div>
		</div>
		<div v-show="revealState === id" id="date-cell" class="task-cell bottom">{{task.date}}</div>
	</li>
</template>

<script>
	/* eslint-disable */
	// import MessageCenter from "./MessageCenter.vue";

	export default {
		name: "TaskItem",
		components: {},
		data() {
			return {
                id: 1,
				editDetails: true,
				submitState: false,
				revealState: null,
				showAlert: false,
				actionBrief: {
					itemName: "",
					actionType: "",
					status: "" //looking for success, error, or none
				},
				newTaskDate: "",
				updatedCompletionStatus: ""
			};
		},
		props: {
			task: Object
		},
		methods: {
			toggleEditDetails() {
				this.editDetails = !this.editDetails;
			},

			// *!replace wotj event emitter
			changeCompletionStatus(id) {
				this.storeItems(this.tasks, "taskGuyList");
				this.updateActionBrief(this.task.name, "update", "success");

				this.updatedCompletionStatus = "";
				this.task = "";
			},
			editDetailHack() {
			//*keeps giving me false error that editDetail doesnt exit, so making a function for it
			this.editDetails = true;

},

			// *!replace wotj event emitter
			updateItem(name) {
				console.log(name);

				this.editDetails = false;
				this.storeItems(this.tasks, "taskGuyList");
				this.updateActionBrief(name, "update", "success");
			},

			// *!replace wotj event emitter
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

			//accepts generic actionProerty, so that it can be called at various points in the process to populate different prperties
			updateActionBrief(name, type, status) {
				this.actionBrief = { name, type, status };

				return;
			}
		},
		computed: {},
		mounted() {},
		watch: {}
	};
</script>

<style scoped>
	input:focus,
	textarea:focus,
	select:focus {
		outline: none;
	}

	.taskItem {
		display: grid;
		grid-template-columns: 3fr 2fr 1fr; /* justify-content: space-evenly; */
		grid-template-rows: 2;
		align-items: center;
		padding: 10px;
		padding-left: 24px;
		padding-right: 20px;
		font-size: 1.1em;
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
		border: 1px solid #404b4b8c;
		border-right: 0px;
		border-left: 10px solid #dacb46;
		color: #304141;
		background-color: #dce6eb;
		padding-left: 25px;
	}

	/*
	    TODO: need to add persistent highlighting for selected items */
	.taskItemSelected {
		border-left: 17px solid #4f727a;
		padding-left: 20px;
	}

	.task-cell {
		font-size: 0.9em;
		padding: 5px 5px;
	}

	.bottom {
		padding: 0px 5px;
		margin: 0px 5px;
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

	i {
		float: right;
		cursor: pointer;
		font-size: 1.5em;
		text-align: right;
	}
	i:hover {
		color: rgb(231, 65, 54);
	}

	@media screen and (max-width: 600px) {
		.taskItem,
		.task-text {
			position: inherit;
			width: 100%;
		}

		.taskItem {
			width: auto;
		}
		.task-text {
			font-size: 0.9em;
		}
	}

	@media screen and (max-width: 450px) {
		.taskItem {
			position: inherit;
			/* width: 100%; */
			font-size: 1rem;
			margin: auto;

			width: auto;
			padding: 3px;
		}

		.taskItem:hover {
			font-size: 1rem;
			border: 1px solid #404b4b8c;
			border-right: 0px;
			border-left: 15px solid #dacb46;
			color: #304141;
			background-color: #dce6eb;
			padding-left: 5px;
		}

		#item-data-display {
			cursor: pointer;
			grid-column: 2 / span 1;
			margin-left: 0px;
		}

		.details-input-input {
			font-size: 1.4em;
			margin-left: 0px;
		}

		.details-save-button {
			font-size: 0.9rem;
			font-weight: 500;
			padding: 5px 5px;
		}

		.task-cell {
			box-sizing: border-box;
			padding: 5px 3px;
			cursor: pointer;
			margin-left: 0px;
		}

		#complete-status-input {
			width: 100px;

			font-size: 1em;
		}

		#completion-cell {
			padding: 3px 0px;
			margin: auto;
		}
	}
</style>
