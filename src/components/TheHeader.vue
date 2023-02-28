<template>
	<header>
		<ul class="header-conteiner">
			<li>
				<NuxtLink to='/'>Main</NuxtLink>
			</li>
			<li>
				<NuxtLink to='/about'>About</NuxtLink>
			</li>
			<li>
				<NuxtLink to='/counter'>Counter</NuxtLink>
			</li>
		</ul>
	</header>
</template>

<style>
.header-conteiner {
	display: flex;
	gap: 2rem;
	padding: 1rem;
	background: var(--background);
}
</style>
