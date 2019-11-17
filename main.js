min_orders = 5
min_price = 20
var customers = {
'Ahmad' : [15, 15, 14], 
'Yasser' : [15, 15, 15], 
'Ebere' : [120, 240],
'Sarah' : [22, 30, 11, 17, 15, 52, 27, 12], 
'Anas' : [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
'Amal ' : [22, 67, 53, 29],
'Fahad' : [51, 19]
}


function freePizza(){
    for(name in customers){
   
     let price = customers[name].filter(price => price >= min_price)
     if(price.length >= min_orders){
console.log(name);

     }
     
    }

}
freePizza()