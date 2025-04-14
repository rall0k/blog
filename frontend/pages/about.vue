<script setup>
	const { find, findOne } = useStrapi()
	const i18n = useI18n()
	const page = await find('about', {
		locale: i18n.locale.value,
		populate: '*'
	})

	let title = ref()
	title.value = page.data.title
	useSeoMeta({
		title,
	})
	definePageMeta({
		layout: 'default',
	})
	// defineI18nRoute({
	// 	paths: {
	// 		en: '/about',
	// 		sk: '/o-nas',
	// 	}
	// })



</script>

<template>
  <div>
	<pre>{{ page }}</pre>
	<h1>{{ page.data.title }}</h1>
	<pre>{{ paths }}</pre>
  </div>
</template>