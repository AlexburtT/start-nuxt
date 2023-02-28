<template>
	<div>
		<h1>About pages</h1>
		<img src="/tv.png" alt="tv" />
		<p>Counter {{ counter }}</p>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'custom',
});
const counter = useCounter();
</script>
