<template>
	<div v-if="showModal === true" class="modal-container">
	<div v-if="showModal === true" @click="toggleModal" @keypressc="hideModal" class="modal-dimmer">
	</div>
		<div class="modal">
			<h2>{{ message1 }}</h2>
			<p>{{ message }}</p>

			<form @submit.prevent="submitModal">
				<input v-model="username" id="name-field" type="text" name />
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name: "IntroductionModal",
		components: {},
	
		data() {
			return {
				message1: `Hello, I am Mr. Task Guy.`,
				message: ` Don't believe we've met before; what's your name?`,
				showModal: false,
				username: ""
			};
		},

		methods: {
			toggleModal() {
				if (this.showModal === true) {
					this.showModal = false;
				} else {
					this.showModal = true;
				}
			},
			submitModal() {
				this.$emit("add:username", this.username);
				this.showModal = false;
			},
			initialDispay() {
				if (this.username === "" || this.username === "jake") {
					this.showModal = true;
				}
			},
			hideModal() {
				this.showModal = false;
			}
		},
		computed: {},
		watch: {},

		/* Vue lifecycle hooks (Ref: https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks) */
		created() {},
		mounted() {
			this.initialDispay();
		},
		updated() {},
		destroyed() {}
	};
</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

	.modal-container {
		display: flex;
		justify-content: center;
		align-items: center;
		top: 0;
		left: 0;
		box-sizing: border-box;
		z-index: 2;
		position: absolute;
		width: 100%;
		height: 100%;
		background: #aaaaaa00;

		/* display: none; */
	}
	.modal-dimmer {
		display: flex;
		justify-content: center;
		align-items: center;
		top: 0;
		left: 0;
		box-sizing: border-box;
		z-index: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		background: #434b4b94;

		/* display: none; */
	}
	.modal {
		display: block;
		box-sizing: border-box;
		z-index: 1;
		position: absolute;
		width: 300px;
		height: 300px;
		padding: 15px 20px;
		text-align: center;
		font-family: "Montserrat", sans-serif;
		color: #434b4b;
		background: rgba(228, 228, 228, 0.911);
		border: 4px solid #434b4bd7;
		border-radius: 5%;
		box-shadow: 0px 8px 15px 8px rgba(96, 102, 104, 0.479);
		/* display: none; */
	}

	.modal > p {
		font-size: 16px;
		padding: 10px;
		margin: auto;
		margin-bottom: 20px;
		max-width: 80%;
	}

	#name-field {
		font-size: 16px;
		padding: 3px 5px;
		color: rgba(44, 46, 48, 0.938);
		border: 2px solid rgba(121, 121, 121, 0.767);
		border-radius: 5px;
	}
</style>