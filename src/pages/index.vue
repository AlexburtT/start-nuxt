<template>
	<div>
		<h1>Main page</h1>
		<ContentDoc />
		<Button />
		<Profile />
		<img src="~/assets/comp.webp" alt="comp" />
	</div>
</template>

<script setup>
const { $sayHello } = useNuxtApp();
$sayHello("Aleks");
</script>
