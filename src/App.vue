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

	.no-zoom {
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
		position: relative;
		margin: 0;
		height: 100%;
		user-select: none;
		touch-action: manipulation;
	}
	#app {
		width: 750px;
		margin: auto;
		margin-top: 0;
		padding: 0;
	}

	#header-title {
		color: #698894;
		/* font-weight: bold; */
		font-size: 2.2rem;
		width: 100%;

		margin: 0;
		margin-bottom: 20px;
		border-bottom: 2px solid rgba(153, 153, 153, 0.356);
	}

	nav {
		padding: 20px 10px 5px 5px;
		width: 70%;
		margin: auto;
		margin-bottom: 0;
		padding-bottom: 3px;
	}
	nav a {
		padding: 3px 20px 2px 20px;
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
		margin-bottom: 0px;
		box-shadow: 0px 0px 2px 2px rgba(153, 153, 153, 0.267);
	}

	nav a:focus {
		background: #dce6eb;
		border: 1px solid #64a5be;
		color: #434b4b;
		border-bottom: 1px;
	}

	@media screen and (max-width: 600px) {
		body {
			position: relative;
			width: auto;
			height: auto;
			font-size: 1rem;
			align-items: center;
			padding: 0;
			padding-bottom: 15px;
		}

		#app {
			width: 90%;
			margin: auto;
			height: auto;

			margin-top: 0;
		}

		#header-title {
			width: 100%;
			margin: 15px auto;
		}
	}
	@media screen and (max-width: 450px) {
		body {
			position: relative;
			width: auto;
			height: auto;
			font-size: 1rem;
			align-items: center;
			padding: 0;
			padding-bottom: 15px;
		}

		#app {
			width: 100%;
			margin: auto;
			height: auto;
/* justify-content: center; */
			margin-top: 0;
		}

		#header-title {
			width: 100%;
			margin: 15px auto;
			font-size: 1.7rem;
		}
		nav,
		nav a {
			font-size: 1rem;
		}
	}
</style>
