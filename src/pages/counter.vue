<script setup>
const counter = useCounter();

const response = await $fetch('/api/hello');
console.log(response);
</script>

<template>
	<div>
		Counter: {{ counter }}
		<button @click="counter++">
			+
		</button>
		<button @click="counter--">
			-
		</button>
	</div>
</template>
