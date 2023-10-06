<template>
        <div class="jnzwrap">
            <PieChart :chartOptions="pieChartOptions" :chartData="CountriesPerRegionDataSet" />
        </div>
</template>
<script>

export default{
    name: 'CountriesPerRegion',
    comments:{},
    props: {
        countries: {
            type: Array,
            required: true,
        },
    },
    computed:{
        regionCounts() {
            const regionCounts = {};
            this.countries.forEach((country) => {
                const region = country.region;
                if (region in regionCounts) {
                    regionCounts[region]++;
                } else {
                    regionCounts[region] = 1;
                }
            });

            return regionCounts;
        },
        CountriesPerRegionDataSet() {
            return {
                labels: Object.keys(this.regionCounts),
                datasets: [
                    {
                    backgroundColor: ['#155263', '#ff6f3c', '#ff9a3c', '#ffc93c', '#e7eaf6', '#a2a8d3', '#38598b', '#113f67'],
                    data: Object.values(this.regionCounts),
                    },
                ]
            };
        },
    },
    data (){
        return{
            pieChartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Countries per region'
                    }
                }
            },
        }
    }

};

</script>
<style scoped>
</style>