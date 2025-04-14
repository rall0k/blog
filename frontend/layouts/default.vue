<script setup>
	const i18n = useI18n()
	const strapi = useStrapi()
	let strapiLocales = await strapi.find('i18n/locales')
	let locales = await strapiLocales.map(locale => locale.code)
	const route = useRoute()
	let pageName = (route.name.split("__")[0])
</script>

<template>
  <div>
    <nav>
		<span v-for="locale in i18n.locales.value">
			<NuxtLink v-if="locales.includes(locale)"  :to="$localePath(pageName, locale)">
				{{ locale }}
			</NuxtLink>
		</span>
	</nav>
    <slot />
  </div>
</template>

<style scoped>
nav {
	display: flex;
	gap: .5rem;

	a {
		display: inline-block;
		padding: .5rem 1rem;
		background: orangered;
		color: white;
		text-decoration: none;
	}
}
</style>

<style scoped></style>
