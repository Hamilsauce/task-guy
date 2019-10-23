<template>
	<div class="item-container">
		<span @click="toggleItemReveal(index)" class="item-text">{{ item.name }}</span>
		<div v-if="revealStatus === index" id="item-data-display">
			Big data yeah
			<p>{{ item }}</p>
		</div>
		<i class="fa fa-minus-circle" v-on:click="deleteItem(index)"></i>
	</div>
</template>

<script>
	export default {
		name: "CollectionItem",
		data() {
			return {
				revealStatus: false
			};
		},
		props: {
			item: Object,
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