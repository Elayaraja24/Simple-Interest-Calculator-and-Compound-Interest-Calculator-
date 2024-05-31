let calculateBtn = document.getElementById("calculate-btn");
let result = document.getElementById("result");
let calculate = () => {
    let p = Number(document.getElementById("principal").value);
    let r = Number(document.getElementById("rate").value);
    let t = Number(document.getElementById("time").value);
    let duration = Number(document.getElementById("duration").value);

    

    let simpleInterest = duration =="year" ? (p*r*t) / 100 : (p*r*t)/1200;
    let amount = p +simpleInterest;

    result.innerHTML = `<div>Principle Amount: <span> &#8377;${p.toFixed(2)}</span></div>
    <div>Total Interest : <span> &#8377;${simpleInterest.toFixed(2)}</span></div>
    <div>Total Amount: <span> &#8377;${amount.toFixed(2)}</span></div>`;
};
calculateBtn.addEventListener("click", calculate);
window.addEventListener("load",calculate);