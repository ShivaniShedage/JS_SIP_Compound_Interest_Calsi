console.log("SIP Compound Interest Calculator")

function ci(){
    
    let price = document.getElementById("price").value;
    let rate = document.getElementById("rate").value;
    let time = document.getElementById("time").value;

    if (price =="" || rate=="" || time ==""){
        alert("Enter valid values..")
    }
    else{
        let amount = price*(Math.pow(1+rate/100,time));
        let CInterest =  amount-price;
        document.getElementById("hidden").innerHTML= "Compound Interest : " + CInterest.toFixed(2);
    }
}

