//Immediately Invked Function Expressions:used to remove pollution global scope due to var etc

(function  chai(){
    console.log("DB Connected");
})();

(()=>{
    console.log(`Db two connected`);
    
})()