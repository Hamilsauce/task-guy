<template>
	<!-- This component can be a task, book, song, etc -->
	<div id="item-container"></div>
</template>

<script>
	export default {
		name: "CollectionItem",
		data() {
			return {
				revealStatus: false
			};
		},
		methods: {
            toggleReveal() {
                revealStatus = !revealStatus;
            }
        }
	};
</script>

<style>
</style>