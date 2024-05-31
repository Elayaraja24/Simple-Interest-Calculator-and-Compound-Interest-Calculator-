function calculateInterest() {
    const p = parseFloat(document.getElementById('principal').value) ;
    const r = parseFloat(document.getElementById('rate').value) ;
    const t = parseFloat(document.getElementById('time').value) ;

    if(isNaN(p) || isNaN(r) || isNaN(t) ) {

        document.getElementById('result').innerHTML = "Please fill out all fields with vaild numbers.";
        
    }

    const amount = p* (Math.pow((1 +r/100),t));

    const compoundInterest = amount-p;

    document.getElementById('result').innerHTML = ` (&#8377;)${compoundInterest.toFixed(2)}`;


}