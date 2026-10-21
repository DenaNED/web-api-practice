fetch("https://hplussport.com/api/products.php")
.then (function (response){
return response.json();
})
.then (function(jsonData) {
console.log(jsonData);
})
