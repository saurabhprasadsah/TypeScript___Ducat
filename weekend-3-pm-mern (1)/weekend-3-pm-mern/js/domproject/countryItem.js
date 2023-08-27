class CountryItem {
    constructor(country) {
        this.country = country;
    }

    render() {
        // create parent element
        let parentDiv = document.createElement('div')
        parentDiv.className = "col-sm-3 my-4"

        // card div
        let card = document.createElement('div')
        card.className = "card"

        // image
        let img = document.createElement('img')
        img.className = "card-img-top"
        img.src = this.country.flags.svg

        // card body
        let cardBody = document.createElement('div')
        cardBody.className = "card-body"

        // h5 
        let h5 = document.createElement('h5');
        h5.className = "card-title"
        h5.innerText = this.country.name.common

        // append to cardbody
        cardBody.append(h5)

        // append to card div
        card.append(img)
        card.append(cardBody)

        // append to parentDiv
        parentDiv.append(card)

        return parentDiv
    }
}

export default CountryItem;