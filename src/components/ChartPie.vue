<template>
    <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource"
    ></fusioncharts>
</template>

<script>
	export default {
		name: "ChartPie",
		data() {
			return {
				type: 'pie3d',
				width: '100%',
				height: '400',
				dataFormat: 'json',
				dataSource: dataSource
            }
		}
	}
	import Vue from 'vue';
	import VueFusionCharts from 'vue-fusioncharts';
	import FusionCharts from 'fusioncharts';
	import Charts from 'fusioncharts/fusioncharts.charts';

	//import the theme
	import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

    import states from '../assets/dataPie.json'

	// register VueFusionCharts component
	Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme)

	// Copy datasource from 'Data' tab
	var dataSource = states;

</script>

<style scoped>

</style>