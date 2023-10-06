<template>
    <div class="jnzwrap">
        <BarChart :chartOptions="barChartOptions" :chartData="Top10PopolousCountriesDataset" />
    </div>
</template>
<script>

export default{
name: 'Top10PopolousCountries',
comments:{},
props: {
    countries: {
        type: Array,
        required: true,
    },
},
computed:{
    topPopolousCountries(){
        let data = this.countries;
        data.sort((a, b) => b.population - a.population);
        const topTenCountries = data.slice(0, 10);
        return  topTenCountries.map((country) => ({
            name: country.name.common,
            population: country.population,
        }));
    },
    Top10PopolousCountriesDataset(){
        const topCountries = this.topPopolousCountries;
        const dataset = topCountries.reduce((result, country) => {
            result[country.name] = country.population;
            return result;
        }, {});
        return {
            labels: Object.keys(dataset),
            datasets: [
                {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: Object.values(dataset)
                }
            ]

        };
    }

},
data (){
  return{
    barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Top 10 populous countries'
            }
        }
    },
  }
}

};

</script>
<style scoped>
</style>