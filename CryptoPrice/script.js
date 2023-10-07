document.addEventListener("DOMContentLoaded", function () {
    const cryptoInput = document.getElementById("cryptoInput");
    const addCryptoButton = document.getElementById("addCryptoButton");
    const cryptoList = document.getElementById("cryptoList");

    addCryptoButton.addEventListener("click", function () {
        // Get the value entered by the user
        const cryptoSymbol = cryptoInput.value.toUpperCase(); // Convert to uppercase

        // Check if the input is empty
        if (!cryptoSymbol) {
            alert("Please enter a cryptocurrency ticker symbol.");
            return;
        }

        // Make a request to the CryptoCompare API
        axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${cryptoSymbol}&tsyms=USD`)
            .then(response => {
                const price = response.data.USD;

                if (price !== undefined) {
                    // Create a new row in the table
                    const newRow = document.createElement("tr");

                    // Create and append the "Crypto" column
                    const cryptoCell = document.createElement("td");
                    cryptoCell.textContent = cryptoSymbol;
                    newRow.appendChild(cryptoCell);

                    // Create and append the "Price (USD)" column
                    const priceCell = document.createElement("td");
                    priceCell.textContent = `$${price}`;
                    newRow.appendChild(priceCell);

                    // Append the new row to the table
                    cryptoList.appendChild(newRow);
                } else {
                    alert(`Cryptocurrency ${cryptoSymbol} not found.`);
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                alert("Error fetching data.");
            });

        // Clear the input field
        cryptoInput.value = "";
    });
});
