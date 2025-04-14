<script setup>
	const strapi = useStrapi()
	const i18n = useI18n()
	const route = useRoute()
	const hrefArray = route.href.split("/")

	const { data: pages } = await useAsyncData('page', () =>
		strapi.find('pages', {
			filters: {
			slug: { $eq: hrefArray[2] },
			locale: { $eq: i18n.locale.value }
			}
		})
	)
	const componentName = ref(null)
	const loadedComponent = ref(null)

	watchEffect(async () => {
		const templateName = pages.value?.data?.[0]?.template
		if (templateName) {
			componentName.value = templateName

			try {
				loadedComponent.value = defineAsyncComponent(() =>
					import(`~/components/${templateName}.vue`)
				)
			} catch (e) {
				console.error(`Component ${templateName} not found`, e)
			}
		}
	})
</script>

<template>
	<section>
		<component :is="loadedComponent" v-if="loadedComponent" />
	</section>
</template>

<style scoped></style>
