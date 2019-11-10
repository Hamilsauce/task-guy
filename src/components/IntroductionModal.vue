<template>
	<div class="modal-container"  @click="hideModal" >
		<div @click="hideModal" @keypressc="hideModal" class="modal-dimmer"></div>
		<div class="modal">
			<h2>{{ message1 }}</h2>
			<p>{{ message }}</p>

			<form @submit.prevent="submitModal">
				<input v-model="username" id="name-field" type="text" name />
				<input type="submit" value="Submit" class="username-submit-button">
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
				message: `Enter your name or die.`,
				username: '',
				showModal: false,
				updatePackage: []
			};
		},
		props: {

		},

		methods: {
			toggleModal() {
				this.showModal = !this.showModal;
			},
			submitModal() {
				this.updatePackage = [this.username, this.showModal]
				this.$emit("add:username", this.updatePackage);
				this.showModal = false;
			},
			// initialDispay() {
			// 	if (this.username === "" || this.username === "Jake") {
			// 		this.showModal = true;
			// 	}
			// },
			hideModal() {
				this.showModal = false;
			}
		},
		computed: {},
		watch: {},

		/* Vue lifecycle hooks (Ref: https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks) */
		created() {},
		mounted() {
			// this.initialDispay();
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
		background: #f1f1f113;

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
		background: #434b4b5d;

		/* display: none; */
	}
	.modal {
		display: block;
		box-sizing: border-box;
		z-index: 1;
		position: absolute;
		width: 260px;
		height: 300px;
		padding: 15px 20px;
		text-align: center;
		font-family: "Montserrat", sans-serif;
		color: #434b4b;
		background: rgba(238, 238, 238, 0.774);
		border: 4px solid #2f3838d7;
		border-radius: 5%;
		box-shadow: 0px 8px 15px 8px rgba(96, 102, 104, 0.479);
		/* display: none; */
	}

	.modal > p {
		font-size: 16px;
		line-height: 1.5;
		padding: 10px;
		margin: auto;
		margin-bottom: 20px;
		max-width: 80%;
	}

	#name-field {
		font-size: 1.1em;
		padding: 3px 5px;
		color: rgba(44, 46, 48, 0.938);
		border: 2px solid rgba(121, 121, 121, 0.767);
		border-radius: 5px;
	}
	.username-submit-button {
		margin: 5px;
		padding: 5px 10px;
		background: #485252dc;
		color: rgb(255, 255, 255);
		border: 2px solid white;
		border-radius: 5px;
		font-size: 1.1em;
		cursor: pointer;
	}
</style>