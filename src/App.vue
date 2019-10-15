<template>
	<div id="app">
		<p id="header-title">Mr. Task Guy</p>
		<nav>
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
		</nav>
		<router-view />
	</div>
</template>

<script>
	export default {
		name: "app"
	};
</script>

<style>
	@import url("https://fonts.googleapis.com/css?family=Varela&display=swap");

	.no-zoom{
		touch-action: manipulation;
	}

	body {
		background-color: #eeeeee;
		font-family: "Varela", sans-serif;
		/* display: grid;
		grid-template-rows: auto; */
		justify-items: center;
		padding-top: 50px;
		touch-action: manipulation;
	}
	body,
	html {
		position:relative;
		margin: 0;
		height: 100%;
		user-select: none;
		touch-action: manipulation;
	}
	#app {
		width: 90%;
		margin: auto;
		margin-top: 0;
		padding: 0;
	}

	#header-title {
		color: #698894;
		/* font-weight: bold; */
		font-size: 2.2rem;
		border-bottom: 2px solid rgba(153, 153, 153, 0.356);
	}

	nav {
		padding: 20px 10px 5px 5px;
		margin-bottom: 0;
		width: 80%;
		margin: auto;
	}
	nav a {
		padding: 5px 10px 2px 10px;
		text-decoration: none;
		background: #434b4b;
		border-radius: 3px 3px 0px 0px;
		border-bottom: 0px;
		border-left: 2px solid white;
		border-right: 2px solid white;
		border-top: 2px solid white;
		border-radius: 5px 5px 0px 0px;
		color: #dbdbdb;
		font-weight: normal;
		font-size: 1.2rem;
		margin-right: 5px;
		box-shadow: 0px 0px 2px 2px rgba(153, 153, 153, 0.267);
	}

	nav a:focus {
		background: #434b4b;
		border: 3px solid #434b4b;
	}


	@media screen and (max-width: 600px) {

		p,
		body {
				position:	relative;
			width: 100%;
			font-size: 1rem;
		}

		#app {


			width: 100%;
			margin: auto;
			height: auto;

			margin-top: 10px;
		}



	}
</style>
