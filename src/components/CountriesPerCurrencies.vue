<template>
        <div class="jnzwrap">
            <DoughnutChart :chartOptions="DoughnutChartOptions" :chartData="CountriesPerCurrenciesDataSet" />
        </div>
</template>
<script>

export default{
    name: 'CountriesPerCurrencies',
    comments:{},
    props: {
        countries: {
            type: Array,
            required: true,
        },
    },
    computed:{
        CountriesPerCurrenciesDataSet() {
                let curre =this.groupCurrencies
                return {
                    labels: Object.keys(curre),
                    datasets: [
                        {
                        backgroundColor: ['#155263', '#ff6f3c', '#ff9a3c', '#ffc93c', '#e7eaf6', '#a2a8d3', '#38598b', '#113f67'],
                        data: Object.values(curre)
                        }
                    ]
                };
            },
        groupCurrencies() {
            let currenciesCount=this.CurrenciesWithCountries
            for (const currencyCode in currenciesCount) {
                const countries = currenciesCount[currencyCode];
                if (countries == '1') {
                    delete currenciesCount[currencyCode];
                }
            }
            const sortedCurrencies = Object.entries(currenciesCount)
                .sort((a, b) => b[1] - a[1])
                .reduce((acc, [currencyCode, count]) => {
                    acc[currencyCode] = count;
                    return acc;
                }, {});
            return sortedCurrencies;
            },
        CurrenciesWithCountries() {
            let currenciesCount = {};
            this.countries.forEach(country => {
                let currencies = country.currencies;
                if (currencies && Object.keys(currencies).length > 0) {
                for (const currencyCode in currencies) {
                    if (currenciesCount[currencyCode]) {
                        currenciesCount[currencyCode]++;
                    } else {
                    currenciesCount[currencyCode] = 1;
                    }
                }
                }
            });
            return currenciesCount;
        },

    },
    data (){
      return{
        DoughnutChartOptions: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Countries per currencies'
                }
            }
        },
      }
    }

};

</script>
<style scoped>
</style>