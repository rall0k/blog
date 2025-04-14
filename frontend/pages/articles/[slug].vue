<script setup>
	defineI18nRoute({
		paths: {
			en: '/articles/[slug]',
			sk: '/clanky/[slug]',
		}
	})

	const i18n = useI18n()
	const strapi = useStrapi()
	const route = useRoute()
	console.log(route.params.slug)
	const article = await strapi.findOne("articles", {
		filters: {
			locale: { $eq: i18n.locale.value },
			slug: { $eq: route.params.slug },
		},
		populate: '*'
	})
</script>

<template>
  <div>
	<pre>{{ article }}</pre>
    Page: articles/[slug]
  </div>
</template>

<style scoped></style>
