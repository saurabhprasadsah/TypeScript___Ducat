import CountryItem from "./countryItem.js";

class Country {
    countries = []

    async getCountries() {
        let response = await fetch('https://restcountries.com/v3.1/all')

        this.countries = await response.json();
    }

    async render() {
        await this.getCountries();

        let root = document.getElementById('root')

        for (const country of this.countries) {

            let countryEl = new CountryItem(country)
            let parentDiv = countryEl.render();

            // append to root
            root.append(parentDiv)
        }
    }
}

export default Country;
