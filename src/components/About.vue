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
		padding: 750px;
		padding: 0px 0px 10px 0px;
		margin: auto;
		background: #ffffff;
		border-radius: 5px 5px 20px 20px;
	}
	#header-title {
		box-sizing: border-box;
		color: rgb(230, 230, 230);
		background: #434b4b;
		padding: 10px 10px;
		margin: 0;
		width: 100%;
		font-size: 1.5em;
		border-radius: 5px 5px 0px 0px;
	}

	#grid-container {
		display: grid;
		grid-column-gap: 5px;
		grid-row-gap: 10px;
		justify-content: space-around;
		grid-template-columns: repeat(auto-fill, 100px 225px);
		margin: 10px 20px;
		padding: 20px;
		width: auto;
		background: #dacb46;
		border: 1px solid white;
		border-radius: 20px;
		box-shadow: 2px 3px 10px 6px inset rgba(70, 78, 87, 0.3);
		border: 2px solid rgba(102, 103, 104, 0.6);
	}

	.grid-card {
		background: #434b4b;
		color: aliceblue;
		border-radius: 5px;
		padding: 10px;
		height: 100px;
		font-size: 1.1rem;
		border: 2px solid rgb(196, 195, 195);
		box-shadow: 2px 3px 8px 2px rgba(40, 41, 43, 0.4);
	}

	.grid-card:nth-child(even) {
		background: #ccc;
		color: #000;
		margin-right: 20px;
	}

	@media screen and (max-width: 600px) {
		body {
			box-sizing: border-box;
			/* position: relative;
			display: contents; */
			width: 100%;
			margin: 0;
			padding: 0;
		}
		#header-title {
			margin: 0px auto;
			font-size: 1.3rem;
		}
		#about-container {
			box-sizing: border-box;
			width: 95%;
			margin: auto;
			padding: 5px;
		}
		#grid-container {
			grid-template-columns: repeat(auto-fill, 100px 211px);
			width: 95%;
			margin: auto;
			font-size: 0.89em;
			justify-content: space-around;
			padding: 5px;
			padding-right: 0px;
		}
		.grid-card {
			/* margin: auto; */
		}
	.grid-card:nth-child(even) {
		margin-right: 5px;
	}

		.taskItem {
			width: 81%;
		}
	}
</style>