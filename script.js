document.getElementById('estimationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const guests = document.getElementById('guests').value;
    const hours = document.getElementById('hours').value;
    const drinkRate = document.getElementById('drinkRate').value;

    // Calculate total drinks
    const totalDrinks = guests * hours * drinkRate;

    // Breakdown by drink type
    const cocktails = totalDrinks * 0.4;
    const beer = totalDrinks * 0.3;
    const wine = totalDrinks * 0.2;
    const nonAlcoholic = totalDrinks * 0.1;

    // Specific quantities
    const beerCases = Math.ceil(beer / 12);
    const wineBottles = Math.ceil(wine / 5);
    const liquorBottles = Math.ceil(cocktails * 1.5 / 25.4);

    // Display results
    document.getElementById('result').innerHTML = `
        <h2>Estimated Alcohol Requirements</h2>
        <p>Total Drinks: ${totalDrinks.toFixed(2)}</p>
        <p>Cocktails: ${cocktails.toFixed(2)} drinks (Approx. ${liquorBottles} bottles of liquor)</p>
        <p>Beer: ${beer.toFixed(2)} drinks (Approx. ${beerCases} cases)</p>
        <p>Wine: ${wine.toFixed(2)} drinks (Approx. ${wineBottles} bottles)</p>
        <p>Non-Alcoholic: ${nonAlcoholic.toFixed(2)} drinks</p>
    `;
});
