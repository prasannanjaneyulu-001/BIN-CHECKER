function checkBIN(){
    const bininput=document.getElementById('binInput');
    const returndiv=document.getElementById('result');
    const bin=bininput.value.trim();



    if (bin === '') {
        resultDiv.innerHTML = 'Please enter a valid BIN number.';
        return;
    }




    fetch(`https://bincheck.io/${bin}`)
        .then(response =>response.json)
        .then(data =>{
            if(data.bank && data.country){
                const result=`Bank: ${data.bank.name} <br> country: ${data.country.name}`;
                returndiv.innerHTML = result;
            }
            else{
                returndiv.innerHTML = `unable to access the Information`;
            }
        })
        .cache(error =>{
            console.error(`Error:`,error);
            returndiv.innerHTML = `An error occured some where`;
        })
}