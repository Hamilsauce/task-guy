<template>
	<div>
		<p>{{ evaluateBrief(this.actionBrief) }}</p>
	</div>
</template>

<script>
	export default {
		name: "MessageCenter",
		props: {
			actionBrief: Object,
			itemCount: Number,
			currentUser: String
		},
		data() {
			return {
				message: "Welcome to Task Guy"
			};
		},

		methods: {


			evaluateBrief(brief) {
				const { name, type, status } = brief;
				let output = "";
				switch (type) {

					case "add":
						if (status === "success") {
							output = `The item ${name} was successfully ${type}ed`;
						} else if (status === "error") {
							output = `The item ${name} was not ${type}ed`;
						} else {
							//no status included...will depend on action type
						}
						break;
					case "delete":
						if (status === "success") {
							output = `The item ${name} was successfully ${type}d`;
						} else if (status === "error") {
							output = `The item ${name} was not ${type}d`;
						} else {
							//no status included...will depend on action type
						}
						break;
					case "reveal": //item reveal toggle is turned on...display name of item
						if (status === "reveal") {
							output = `Viewing details of ${name}`;
						} else {
							if (this.itemCount > 1) {
								output = `You got ${this.itemCount} tasks!`;
							} else if (this.itemCount === 1) {
								output = "You gone and got yourself a task!";
							} else {
								output = "Not a damn task to your name!";
							}
						}
						break;
					case "update": //item reveal toggle is turned on...display name of item
					if (status === "success") {
							output = `The item ${name} was successfully ${type}d`;
						} else if (status === "error") {
							output = `The item ${name} was not ${type}d`;
						} else {
							//no status included...will depend on action type
						
						}
						break;
					default:
						if (this.itemCount > 1) {
							output = `You got ${this.itemCount} tasks!`;
						} else if (this.itemCount === 1) {
							output = "You gone and got yourself a task!";
						} else {
							output = "Not a damn task to your name!";
						}
						break;
				}

				return output;

			}
		},
		computed: {

		},
		watch: {},

		/* Vue lifecycle hooks (Ref: https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks) */
		created() {},
		mounted() {},
		updated() {},
		destroyed() {}
	};
</script>

<style scoped></style>