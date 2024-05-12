// Program that prove the values in the two arrays are  equal or not


let shop1  = ['apple','orange','grapes']
let shop2  = ['apple','orange','grapes']
let comparing_value
let count=0;
// console.log(shop1 == shop2)

if(shop1.length == shop2.length){

    for( let key in shop1){
        
        if(shop1[key]=== shop2[key]){
            count++;
        }
    }

}
if(count==shop1.length){
    console.log("Two array are equal")
}
else{
    console.log("Two array are not equal")

}