<template>
	<div id="about-container">
		<p id="header-title">About-Page</p>
		<p>pretending-this-is-a-song-library</p>
		<div id="grid-container">
			<div class="grid-card" id="lazy-star-title">Lazy Star</div>
			<div class="grid-card" id="lazy-star-details">
				<div class="sub-name-card">Lazy Star</div>
				<div class="sub-details-card"></div>
			</div>

			<div class="grid-card" id="the-gypsy-title">the Gypsy</div>
			<div class="grid-card" id="the-gypsy-details">
				<div class="sub-name-card">the Gypsy</div>
				<div class="sub-details-card"></div>
			</div>

			<div class="grid-card" id="walk-with-me-title">Walk with Me</div>
			<div class="grid-card" id="walk-with-me-details">
				<div class="sub-name-card">Walk with Me</div>
				<div class="sub-details-card"></div>
			</div>

			<div class="grid-card" id="ave-maria-title">Ave Maria</div>
			<div class="grid-card" id="ave-maria-details">
				<div class="sub-name-card">Ave Maria</div>
				<div class="sub-details-card"></div>
			</div>
		</div>
	</div>
</template>


<script>
	export default {};
</script>

<style scoped>
	#about-container {
		box-sizing: border-box;
		margin: 0%;
		padding: 0%;
		width: 850px;
		padding: 10px 20px 10px 20px;
		margin: auto;
		background: #feffff;
	}
	#header-title {
		/* background: #434b4b; */
	}

	#grid-container {
		display: grid;
		grid-column-gap: 5px;
		grid-row-gap: 10px;
		justify-content: center;
		grid-template-columns: repeat(auto-fill, 100px 255px);
		margin: auto;
		padding: 25px;
		width: 90%;
		background: rgb(233, 240, 245);
		border: 1px solid white;
	}

	.grid-card {
		background: #434b4b;
		color: aliceblue;
		border-radius: 5px;
		padding: 10px;
		height: 100px;
		font-size: 1.2rem;
	}

	.grid-card:nth-child(even) {
		background: #ccc;
		color: #000;
		margin-right: 20px;
	}

	@media screen and (max-width: 500px) {
		body {
			position: absolute;
			display: block;
			width: 80%;
			margin: auto;
			padding:10px 50px;
		}
		#about-container {
			width: fit-content;
			margin: auto;
		}
		#grid-container {
			width: auto;
			font-size: 0.89em;
		}

		.taskItem {
			width: 81%;
		}
	}
</style>