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

    // Split guests by drink preference
    const liquorDrinkers = guests * 0.5;
    const beerDrinkers = guests * 0.3;
    const wineDrinkers = guests * 0.2;

    // Calculate total drinks by type
    const liquorDrinks = liquorDrinkers * hours * drinkRate;
    const beerDrinks = beerDrinkers * hours * drinkRate;
    const wineDrinks = wineDrinkers * hours * drinkRate;

    // Calculate ounces of liquor needed for cocktails
    const ouncesPerCocktail = 1.5;
    const totalOunces = liquorDrinks * ouncesPerCocktail;

    // Convert ounces to bottles
    const litersPerBottle = 33.814;
    const mlPerBottle = 25.36;
    const bottlesFromLiters = totalOunces / litersPerBottle;
    const bottlesFrom750ml = totalOunces / mlPerBottle;

    // Calculate total volume of beer needed (in pints)
    const pintsPerBeer = 1;  // 1 pint = 16 ounces
    const totalBeerPints = beerDrinks * pintsPerBeer;

    // Specific quantities
    const beerCases = Math.ceil(totalBeerPints / caseSize);
    const beerKegs = Math.ceil(totalBeerPints / kegSize);
    const wineBottles = Math.ceil(wineDrinks / 5); // Assume 5 glasses per bottle
    const liquorBottles = Math.ceil(totalOunces / 25.4); // Convert total ounces to 750ml bottles

    // Calculate ice and napkins
    const icePounds = guests * 1.5;
    const iceBags = Math.ceil(icePounds / 10);  // Assuming each bag contains 10 pounds of ice
    const napkins = guests * hours * 2;

    // Display results
    document.getElementById('result').innerHTML = `
        <h2>Estimated Alcohol Requirements and Additional Supplies</h2>
        <p>Total Drinks: ${totalDrinks.toFixed(2)}</p>
        <p>Liquor: ${liquorDrinks.toFixed(2)} drinks (Approx. ${liquorBottles} bottles of 750ml liquor)</p>
        <p>Beer: ${beerDrinks.toFixed(2)} drinks</p>
        <ul>
            <li>Approx. ${beerCases} cases of ${caseSize}-pack</li>
            <li>Approx. ${beerKegs} kegs of ${kegSize} pints</li>
        </ul>
        <p>Wine: ${wineDrinks.toFixed(2)} drinks (Approx. ${wineBottles} bottles)</p>
        <h3>Liquor Bottle Requirements</h3>
        <p>Liquor Bottles (1 liter): ${bottlesFromLiters.toFixed(2)}</p>
        <p>Liquor Bottles (750ml): ${bottlesFrom750ml.toFixed(2)}</p>
        <h3>Additional Supplies</h3>
        <p>Ice: ${icePounds.toFixed(2)} pounds (Approx. ${iceBags} bags)</p>
        <p>Napkins: ${napkins} napkins</p>
    `;
});
