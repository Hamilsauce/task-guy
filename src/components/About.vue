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
		border: 1px solid #434b4b;
	}

	#content-container {
		padding: 5px;
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
		justify-content: space-between;
		grid-template-columns: repeat(auto-fill, 325px);
		margin: 10px 20px;
		padding: 15px;
		width: auto;
		background: #dacb46c2;
		border: 1px solid white;
		border-radius: 20px;
		box-shadow: 0px 0px 10px 6px inset rgba(70, 78, 87, 0.3);
		border: 3px solid rgba(102, 103, 104, 0.6);
	}

	/* .grid-card {
				background: #434b4b;
				color: aliceblue;
				border-radius: 5px;
				padding: 10px;
				height: 100px;
				font-size: 1.1rem;
				border: 2px solid rgb(196, 195, 195);
				box-shadow: 2px 3px 8px 2px rgba(40, 41, 43, 0.4);
			} */
	.card-container {
		box-sizing: border-box;
		padding: 1px;
		/* background: #434b4b; */
		display: grid;
		grid-column-gap: 3px;

		justify-content: space-evenly;
		align-content: center;
		align-items: center;
		grid-template-columns: 4fr 8fr;
		/* grid-template-columns: repeat(auto-fill, 100px 215px); */
		border: 5px solid rgba(255, 255, 255, 0);
		border-radius: 5px;
		/* box-shadow: 2px 3px 8px 2px rgba(40, 41, 43, 0.4); */
	}
	.card-container:hover {
		border: 3px solid #404b4be1;
		/* padding: 1px; */
	}

	.title-card {
		margin: 0;
		background: #434b4b;
		color: aliceblue;
		border-radius: 5px;
		padding: 8px;
		height: 100px;
		font-size: 1.2rem;
		border: 2px solid rgb(196, 195, 195);
		/* box-shadow: 2px 3px 10px 2px inset rgba(40, 41, 43, 0.3); */
		box-shadow: 2px 3px 5px 2px rgba(40, 41, 43, 0.4);
	}

	.details-card {
		border: 2px solid rgba(59, 65, 66, 0.562);
		/* box-shadow: 2px 3px 10px 2px inset rgba(40, 41, 43, 0.3); */
		box-shadow: 2px 3px 5px 2px rgba(40, 41, 43, 0.4);
		background: #ccc;
		color: #000;
		margin: 0;
		border-radius: 5px;
		padding: 8px;
		height: 100px;
		/* margin-right: 20px; */
	}
	/* .card-container:nth-child(even) {
				background: #ccc;
				color: #000;
				margin-right: 20px;
			} */

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
			font-size: 1.2rem;
			height: auto;
			padding: 11px 0px 12px 10px;
		}
		#about-container {
			box-sizing: border-box;
			width: 98%;
			margin: auto;
			justify-content: space-around;
			/* padding: 5px; */
			/* padding-bottom: 10px; */
		}
		#grid-container {
			grid-template-columns: 1fr;
			width: 100%;
			margin: auto;
			margin-bottom: 10px;
			font-size: 0.89em;
			justify-content: space-around;
			padding: 5px;
			padding-right: 0px;
			height: 350px;
			overflow: auto;
		}
		.card-container {
		}

		.details-card {
			margin-right: 5px;
		}

		.taskItem {
			width: 81%;
		}
	}
</style>