<template>
	<div>
		<h1 class="text-3xl font-bold">Page Id: {{ $route.params.id }}</h1>
	</div>
</template>

<script setup>
const route = useRoute();
console.log(route.params);
</script>
