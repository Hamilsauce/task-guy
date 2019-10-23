<template>
	<div class="item-container">
		<span @click="toggleItemReveal(index)" class="item-text">{{ item.name }}</span>
		<div v-if="revealStatus === index" id="item-data-display">
			Big data yeah
			<p>{{ item }}</p>
		</div>
		<i class="fa fa-minus-circle" v-on:click="deleteItem(index)"></i>
	</div>
</template>

<script>
	export default {
		name: "CollectionItem",
		data() {
			return {
				revealStatus: false
			};
		},
		props: {
			item: Object
		},
		methods: {
			toggleItemReveal(id) {
				this.submitState = false;

				if (this.revealStatus === id) {
					this.revealStatus = null;
				} else {
					this.revealStatus = id;
					this.editDetails = false;
				}

				//special case for the actionBrief - status is not success or error
				this.revealStatus != null
					? this.updateActionBrief(this.tasks[id].name, "reveal", "reveal")
					: this.updateActionBrief(this.tasks[id].name, "reveal", "conceal");
			},

			validateItemInput(taskText) {
				let whitespaceTest = taskText.trim() === !taskText ? true : false;

				if (taskText.length === 0 || whitespaceTest === true) {
					return false;
				} else {
					return true;
				}
			},

			updateItem(id) {
				this.editDetails = false;
				this.storeItems(this.tasks, "taskGuyList");
				this.updateActionBrief(this.tasks[id].name, "update", "success");
			}
		}
	};
</script>

<style>
</style>