<template>
	<div>
		<p>{{ pending ? "Loading" : services }}</p>
	</div>
</template>

<script setup>
import { useCounterStore } from '../stores/myStore';
const store = useCounterStore();
console.log(store);

const { data: services, pending } = await useLazyFetch('/api/services');
</script>
