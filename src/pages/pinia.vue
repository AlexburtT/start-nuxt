<template>
	<div>
		Counter:
	</div>
</template>

<script setup>
import { useCounterStore } from '../stores/myStore';
const store = useCounterStore();
console.log(store);
</script>
