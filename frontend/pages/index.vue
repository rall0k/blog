<script setup>
	const i18n = useI18n()
	const { find } = useStrapi()
	const response = await find('about', {
		locale: i18n.locale.value,
		populate: {
			MultipleGallery: {
				populate: {
					gallery: {
						populate: "*"
					}
				}
			}
		}
	})
</script>

<template>
  <section>
		<pre>
			{{ i18n.locales }}
			{{ response }}
		</pre>
	</section>
</template>

<style scoped></style>
