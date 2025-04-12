<script setup>
	const { find } = useStrapi()
	const i18n = useI18n()
	i18n.locales = []
	let locales = await find("i18n/locales")
	locales.forEach(locale => {
		if(locale.isDefault) {
			i18n.defaultLocale = locale.code
			i18n.fallbackLocale = locale.code
		}
		i18n.locales.push(locale.code)
	})
</script>

<template>
	<section>
		<section>
			<NuxtLink :to="$localePath('index', locale)" v-for="locale of i18n.locales">{{ locale }}</NuxtLink>
		</section>
		<NuxtPage />
	</section>
</template>
