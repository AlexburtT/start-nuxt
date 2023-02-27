<template>
	<div>
		<h1 class="text-3xl font-bold">Page Id: {{ $route.params.id }}</h1>
	</div>
</template>

<script setup>
const nuxt = useNuxtApp();
console.log(nuxt);
</script>
