<template>

     <fusioncharts :type="type" :width="width" :height="height" :dataFormat="dataFormat" :dataSource="dataSource"></fusioncharts>

</template>

<script>
	export default {
		name: "Charts",
		data() {
			return {
				width: '100%',
				height: '400',
				type: 'column2d',
				dataFormat: 'json',
				dataSource: dataSource
			}
		}
	}
	import Vue from 'vue';
	import VueFusionCharts from 'vue-fusioncharts';
	import FusionCharts from 'fusioncharts';
	import Charts from 'fusioncharts/fusioncharts.charts';

	import states from "../assets/data.json";

	//import the theme
	import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

	// register VueFusionCharts component
	Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme)

	// Copy datasource from 'Data' tab
	var dataSource = states;

</script>

<style scoped>

</style>