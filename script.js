function checkBIN() {
    const binInput = document.getElementById('binInput');
    const resultDiv = document.getElementById('result');
    const bin = binInput.value.trim();

    if (bin === '') {
        resultDiv.innerHTML = 'Please enter a valid BIN number.';
        return;
    }

    // Make an API request to fetch BIN information
    fetch(`https://lookup.binlist.net/${bin}`)
        .then(Response => Response.json())
        .then(data => {
            if (data.bank && data.card) {
                const resultText = `Bank: ${data.bank.name}<br>Country: ${data.card.name}`;
                resultDiv.innerHTML = resultText;
            } else {
                resultDiv.innerHTML = 'Unable to retrieve information for this BIN.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}
