<template>
    <div class="d-flex align-items-center justify-content-center" style="min-height: 80vh;">
      <b-row>
        <b-col lg="4" md="6" sm="12">
            <div class="jnzwrap">
          
          <PieChart :chartOptions="pieChartOptions" :chartData="regionCountsDataSet" />
          </div>
        </b-col>

        <b-col lg="4" md="6" sm="12">
            <div class="jnzwrap">
                <DoughnutChart :chartOptions="DoughnutChartOptions" :chartData="CurrenciesWithCountriesDataSet" />
            </div>
        </b-col>
        <b-col lg="4" md="6" sm="12">
            <div class="jnzwrap">
                <BarChart :chartOptions="barChartOptions" :chartData="topPopolousCountriesDataset" />
            </div>
        </b-col>
        <b-col  lg="4" md="6" sm="12">
            <div class="jnzwrap">
                <radarChart :chartOptions="radarChartOptions" 
                :chartData="regionCountsDataSet" 
                />
          </div>
        </b-col>
      </b-row>
    </div>
  </template>
  <script>
export default {
    name: 'analyticsPage',
    components: {},
    props: {
        countries: {
            type: Array,
            required: true,
        },
    },
    computed: {
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
        regionCountsDataSet() {
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

        groupCurrencies() {
            let currenciesCount=this.CurrenciesWithCountries
            // const groupedCurrencies = { Others: 0 };
            // currenciesCount["others"]=0;
            for (const currencyCode in currenciesCount) {
                const countries = currenciesCount[currencyCode];

                if (countries == '1') {
                // groupedCurrencies.Others++;
                    delete currenciesCount[currencyCode];
                    // currenciesCount["others"]++;
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
        
        CurrenciesWithCountriesDataSet() {
            
            // let curre =this.CurrenciesWithCountries
            let curre =this.groupCurrencies
            return {
                // labels: Object.keys(curre),
                // datasets: [
                //     {
                //         // label: 'Numero di Paesi per Regione',
                //         label: 'currencies used in more than one country',
                //         backgroundColor: '#f87979',
                //         data: Object.values(curre),
                //     },
                // ],

                labels: Object.keys(curre),
                datasets: [
                    {
                    backgroundColor: ['#155263', '#ff6f3c', '#ff9a3c', '#ffc93c', '#e7eaf6', '#a2a8d3', '#38598b', '#113f67'],
                    data: Object.values(curre)
                    }
                ]
            };
        },
        topPopolousCountries(){
            let data = this.countries;
            data.sort((a, b) => b.population - a.population);
            const topTenCountries = data.slice(0, 10);
            return  topTenCountries.map((country) => ({
                name: country.name.common,
                population: country.population,
            }));
        },
        topPopolousCountriesDataset(){
            const topCountries = this.topPopolousCountries;
            const dataset = topCountries.reduce((result, country) => {
                result[country.name] = country.population;
                return result;
            }, {});

            return {
                // labels: Object.keys(dataset),
                // datasets: [
                //     {
                //         // label: 'Numero di Paesi per Regione',
                //         label: 'Top ten populous countries',
                //         backgroundColor: '#f87979',
                //         data: Object.values(dataset),
                //     },
                // ],

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
    data() {
        return {
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
            radarChartOptions: {
                // responsive: true,
            },
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
        };
    },
};
</script>


  
<style scoped>
</style>
  