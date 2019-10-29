<template>
	<div id="about-container">
		<p id="header-title">The Library View</p>
		<div id="content-container">
			<p class="subheader">A display of info coupled cards</p>
			<div id="grid-container">
				<div class="card-container" id="lazy-star">
					<div class="title-card">Lazy Star</div>
					<div class="details-card" id="lazy-star-details">Lazy Star Details</div>
				</div>
				<div class="card-container" id="the-gypsy">
					<div class="title-card">The Gypsy</div>
					<div class="details-card" id="the-gypsy-details">The Gypsy Details</div>
				</div>
				<div class="card-container" id="walk-with-me">
					<div class="title-card">Walk with Me</div>
					<div class="details-card" id="walk-with-me-details">Walk with Me Details</div>
				</div>
				<div class="card-container" id="ave-maria">
					<div class="title-card">Ave Maria</div>
					<div class="details-card" id="ave-maria-details">Ave Maria Details</div>
				</div>
				<div class="card-container" id="rat-boot-redux">
					<div class="title-card">Rat Boot Redux</div>
					<div class="details-card" id="rat-boot-redux-details">Rat Boot Redux Details</div>
				</div>
				<div class="card-container" id="lazy-star">
					<div class="title-card">Lazy Star</div>
					<div class="details-card" id="lazy-star-details">Lazy Star Details</div>
				</div>
				<div class="card-container" id="rat-boot-redux">
					<div class="title-card">Rat Boot Redux</div>
					<div class="details-card" id="rat-boot-redux-details">Rat Boot Redux Details</div>
				</div>
				<div class="card-container" id="ave-maria">
					<div class="title-card">Ave Maria</div>
					<div class="details-card" id="ave-maria-details">Ave Maria Details</div>
				</div>
				<div class="card-container" id="walk-with-me">
					<div class="title-card">Walk with Me</div>
					<div class="details-card" id="walk-with-me-details">Walk with Me Details</div>
				</div>
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
		width: 750px;
		max-height: 700px;

		padding: 0px 0px 10px 0px;
		margin: auto;
		background: #ffffff;
		border-radius: 5px 5px 5px 5px;
		/* border: 2px solid rgb(175, 175, 175); */
		box-shadow: 0px 8px 15px 8px rgba(104, 96, 96, 0.349);
	}
	#header-title {
		box-sizing: border-box;
		color: rgb(230, 230, 230);
		background: #434b4b;
		padding: 20px;
		margin: 0;
		height: 68px;
		width: 100%;
		font-size: 1.5em;

		border-radius: 5px 5px 2px 2px;
		/* border: 1px solid #434b4b; */
	}

	#content-container {
		padding: 5px;
		max-height: 100%;
	}

	.subheader {
		font-size: 1rem;
		padding: 0px 10px;
	}

	#grid-container {
		box-sizing: border-box;
		display: grid;
		grid-column-gap: 0px;
		grid-row-gap: 15px;
		grid-template-columns: repeat(auto-fill, 325px);
		justify-content: space-between;
		margin: 10px 20px;
		padding: 15px;
		width: auto;
		max-height: 475px;
		overflow: auto;
		background: #dacb46c2;
		border: 3px solid rgba(102, 103, 104, 0.6);
		border: 1px solid white;
		border-radius: 20px;
		box-shadow: 0px 0px 10px 6px inset rgba(70, 78, 87, 0.3);
	}

	.card-container {
		box-sizing: border-box;
		display: grid;
		grid-template-columns: 4fr 8fr;
		grid-column-gap: 3px;
		justify-content: space-evenly;
		align-content: center;
		align-items: center;
		padding: 1px;
		border: 5px solid rgba(255, 255, 255, 0);
		border-radius: 5px;
	}

	.card-container:hover {
		border: 3px solid #404b4be1;
	}

	.title-card {
		margin: 0;
		padding: 8px;
		height: 100px;
		background: #434b4b;
		color: aliceblue;
		font-size: 1.2rem;
		border: 2px solid rgb(196, 195, 195);
		border-radius: 5px;
		box-shadow: 2px 3px 5px 2px rgba(40, 41, 43, 0.4);
	}

	.details-card {
		margin: 0;
		padding: 8px;
		height: 100px;
		background: #ccc;
		color: #000;
		border: 2px solid rgba(59, 65, 66, 0.562);
		border-radius: 5px;
		box-shadow: 2px 3px 5px 2px rgba(40, 41, 43, 0.4);
	}

	@media screen and (max-width: 600px) {
		body {
			box-sizing: border-box;
			width: 100%;
			margin: 0;
			padding: 0;
		}
		#header-title {
			margin: 0px auto;
			padding: 15px 0px 15px 10px;
			height: auto;
			font-size: 1em;
		}
		#about-container {
			box-sizing: border-box;
			width: 98%;
			margin: auto;
			justify-content: space-around;
		}

		#grid-container {
			grid-template-columns: 1fr;
			justify-content: space-around;
			width: 100%;
			height: 550px;
			margin: auto;
			margin-bottom: 10px;
			padding: 5px;
			font-size: 0.89em;
			overflow: auto;
		}
	}
</style>