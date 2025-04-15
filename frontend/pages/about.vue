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

	const toast = useToast()
	const showSuccess = () => {
		toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
	}
	const value = ref([
    { label: 'Apps', color: '#34d399', value: 16 },
    { label: 'Messages', color: '#fbbf24', value: 8 },
    { label: 'Media', color: '#60a5fa', value: 24 },
    { label: 'System', color: '#c084fc', value: 10 }
]);
const events = ref([
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);
</script>


<style scoped>
.container {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: start;
}
</style>

<template>
  <div class="container">
	<Card>
		<template #content>
				<Timeline :value="events" align="left">
					<template #content="slotProps">
						{{ slotProps.item.status }}
					</template>
				</Timeline>
		</template>
	</Card>
	<Card>
		<template #title>Meter</template>
		<template #content>
			<p class="m-0">
				<MeterGroup :value="value" />
			</p>
		</template>
	</Card>
	<InputText v-tooltip="'Enter your username'" type="text" placeholder="Right" />
	<Toast />
	<Button label="Success" severity="success" @click="showSuccess" />
	<DatePicker />
	<InputText type="text" /> --
	<Button label="Verify" />
	<pre>{{ page }}</pre>
	<h1>{{ page.data.title }}</h1>
	<pre>{{ paths }}</pre>
  </div>
</template>