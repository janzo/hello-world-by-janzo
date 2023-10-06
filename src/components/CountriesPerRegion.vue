<template>
    <PieChart :titleText="'Countries per region'" :chartData="CountriesPerRegionDataSet" />
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
                            data: Object.values(this.regionCounts),
                        },
                        // {
                        //     data: Object.values(this.regionCounts),
                        // },
                        
                        ]
                };
            },
        },
        data (){return{}}
    };
</script>
<style scoped>
</style>