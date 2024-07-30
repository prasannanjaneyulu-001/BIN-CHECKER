function getCardType(bin) {
    const binPrefix = bin.substring(0, 6);

    if (/^4/.test(binPrefix)) {
        return 'Visa';
    } else if (/^5[1-5]/.test(binPrefix)) {
        return 'Mastercard';
    } else if (/^3[47]/.test(binPrefix)) {
        return 'American Express';
    } else if (/^6(?:011|5)/.test(binPrefix)) {
        return 'Discover';
    } else if (/^(?:2131|1800|35)/.test(binPrefix)) {
        return 'JCB';
    } else {
        return 'Unknown';
    }
}

function checkBIN() {
    const binInput = document.getElementById('binInput');
    const resultDiv = document.getElementById('result');
    const bin = binInput.value.trim();

    if (bin === '') {
        resultDiv.innerHTML = 'Please enter a valid BIN number.';
        return;
    }

    const cardType = getCardType(bin);

    if (cardType !== 'Unknown') {
        resultDiv.innerHTML = `Card Type: ${cardType}`;
    } else {
        resultDiv.innerHTML = 'Unknown card type';
    }
}
