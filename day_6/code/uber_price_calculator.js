class passenger{
    constructor(name,Email,mobileNO,cartype,kilometer){

        this.name = name;
        this.Email = Email;
        this.mobileNO = mobileNO;
        this.cartype = cartype;
        this.kilometer = kilometer;
    }

    amount(){
        if(this.cartype == "mini"){
            let total_mini = 10*this.kilometer;
            console.log("Totle amount to pay: ₹",total_mini,"/-");
        }
        else if(this.cartype == "auto"){ 
            let total_auto = 8*this.kilometer;
            console.log("Totle amount to pay: ₹",total_auto,"/-");
        }
        else if(this.cartype == "primesedam"){ 
            let total_primesedam = 12*this.kilometer;
            console.log("Totle amount to pay: ₹",total_primesedam,"/-");
        }
        else if(this.cartype == "bike"){ 
            let total_bike = 6*this.kilometer;
            console.log("Totle amount to pay: ₹",total_bike,"/-");
        }
        else if(this.cartype == "primesuv"){ 
            let total_primesuv = 14*this.kilometer;
            console.log("Totle amount to pay: ₹",total_primesuv,"/-");
        }
        else{
            console.log("please enter corret cartype like mini,auto,primesedam,bike,primesuv");
        }
    }
}

let passenger1 = new passenger("praveen raj","praveenraj199201@gmail.com","9150734719","mini",170);
console.log(passenger1);
passenger1.amount();



