<template>

    <v-container>
        <h1 class="subheading grey--text">Charts</h1>

        <v-layout row wrap class="my-5">
            <v-flex xs12 class="mb-5">
                <ChartBars></ChartBars>
            </v-flex>
            <v-flex xs12>
                <ChartPie></ChartPie>
            </v-flex>

        </v-layout>

    </v-container>
</template>

<script>

    import ChartBars from '../components/ChartBars'
    import ChartPie from '../components/ChartPie'

	export default {
		name: "Charts",
		components: {
            ChartBars,
            ChartPie
        }
	}

</script>

<style scoped>

</style>