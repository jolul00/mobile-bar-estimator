document.getElementById('estimationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const guests = document.getElementById('guests').value;
    const hours = document.getElementById('hours').value;
    const drinkRate = document.getElementById('drinkRate').value;
    const caseSize = document.getElementById('caseSize').value;
    const kegSize = document.getElementById('kegSize').value;

    // Calculate total drinks
    const totalDrinks = guests * hours * drinkRate;

    // Breakdown by drink type
    const cocktails = totalDrinks * 0.4;
    const beer = totalDrinks * 0.3;
    const wine = totalDrinks * 0.2;
    const nonAlcoholic = totalDrinks * 0.1;

    // Calculate ounces of liquor needed for cocktails
    const ouncesPerCocktail = 1.5;
    const totalOunces = cocktails * ouncesPerCocktail;

    // Convert ounces to bottles
    const litersPerBottle = 33.814;
    const mlPerBottle = 25.36;
    const bottlesFromLiters = totalOunces / litersPerBottle;
    const bottlesFrom750ml = totalOunces / mlPerBottle;

    // Specific quantities
    const beerCases = Math.ceil(beer / caseSize);
    const beerKegs = Math.ceil(beer / kegSize);
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
        <p>Beer: ${beer.toFixed(2)} drinks</p>
        <ul>
            <li>Approx. ${beerCases} cases of ${caseSize}-pack</li>
            <li>Approx. ${beerKegs} kegs of ${kegSize} pints</li>
        </ul>
        <p>Wine: ${wine.toFixed(2)} drinks (Approx. ${wineBottles} bottles)</p>
        <p>Non-Alcoholic: ${nonAlcoholic.toFixed(2)} drinks</p>
        <h3>Liquor Bottle Requirements</h3>
        <p>Liquor Bottles (1 liter): ${bottlesFromLiters.toFixed(2)}</p>
        <p>Liquor Bottles (750ml): ${bottlesFrom750ml.toFixed(2)}</p>
        <h3>Additional Supplies</h3>
        <p>Ice: ${icePounds.toFixed(2)} pounds (Approx. ${iceBags} bags)</p>
        <p>Napkins: ${napkins} napkins</p>
    `;
});
