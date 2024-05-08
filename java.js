function Calculate(){
    // get the value from user
    let weight= document.querySelector("#weight").value;
    let height= document.querySelector("#height").value;

    // Convert the string value into number
    weight= Number(weight)
    height= Number(height)
    
    // Calculate the values
    let bmi= weight / ( height * height);
    document.querySelector("#result").textContent=bmi;

    if (bmi<=18.5){
        document.querySelector(".bmi_Say").textContent="Under weight"
    }
    if (bmi>=18.5 && bmi<=25){
        document.querySelector(".bmi_Say").textContent="Normal weight"
    }
    if (bmi>=25 && bmi<=50){
        document.querySelector(".bmi_Say").textContent="Over  weight"
    }
    else{
        document.querySelector(".bmi_Say").textContent="Obessed"

    }


}