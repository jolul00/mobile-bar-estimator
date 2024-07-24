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

    // Calculate ice and napkins
    const icePounds = guests * 1.5;
    const iceBags = Math.ceil(icePounds / 10);  // Assuming each bag contains 10 pounds of ice
    const napkins = guests * hours * 2;

    // Display results
    document.getElementById('result').innerHTML = `
        <h2>Estimated Alcohol Requirements and Additional Supplies</h2>
        <p>Total Drinks: ${totalDrinks.toFixed(2)}</p>
        <p>Cocktails: ${cocktails.toFixed(2)} drinks (Approx. ${liquorBottles} bottles of liquor)</p>
        <p>Beer: ${beer.toFixed(2)} drinks (Approx. ${beerCases} cases)</p>
        <p>Wine: ${wine.toFixed(2)} drinks (Approx. ${wineBottles} bottles)</p>
        <p>Non-Alcoholic: ${nonAlcoholic.toFixed(2)} drinks</p>
        <h3>Additional Supplies</h3>
        <p>Ice: ${icePounds.toFixed(2)} pounds (Approx. ${iceBags} bags)</p>
        <p>Napkins: ${napkins} napkins</p>
    `;
});
