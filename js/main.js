var maxNumber = 0 ; 
var minNumber = 1000 ; 
var total = 0 ; 
var arr = [] ; 
sum = 0;
average = 0;
var maxArray = [];


function both(){
    myFunction();
    sumArray();
    croissants();
};

function myFunction(){
    var nombre = Number(document.getElementById("nombreEntrés").value);
    if (Number.isInteger(nombre)== true){
    
    arr.push(nombre);
        document.getElementById("numbers").innerHTML = arr; 
        //console.log(arr); 
        document.getElementById("lastNumber").innerHTML = arr[arr.length-1];
        document.getElementById("arrayLength").innerHTML = arr.length;
        document.getElementById("maxNum").innerHTML = Math.max(...arr);
        document.getElementById("minNum").innerHTML = Math.min(...arr);
        //console.log(arr.max());
        return arr;
    }else {
        alert("S.V.P Entrez nombre entier "); 
    }
        }
        function sumArray(){
            var out = 0;
        for (var i =0 ; i < arr.length ; i++){

            out += this.arr[i];
            average = out / arr.length 
            document.getElementById("arrySum").innerHTML = out; 
            document.getElementById("arrrayAvrage").innerHTML = average; 
        }
        return out  ;
    }
    function croissants () {
        var series = 0;
        var another =0;
        var maxSerires=0;
        document.getElementById("seriresArray").innerHTML = series;
        if( arr.length > 1 ){
            for ( var i = 0 ; i < arr.length ; i++ ){
                if (arr[i+1] > arr[i] ) {
                    series=series+1;
                    another=series+1;
                    maxSerires=another;
                    

                }
                else {
                    series=0;
                    document.getElementById("seriresArray").innerHTML = maxSerires;   
                }    
            }
        }
        maxArray.push(maxSerires);
        document.getElementById("seriresArray").innerHTML =Math.max(...maxArray) ; 
        return maxSerires ; 
    }
function resetAll() {
    Array.from(document.querySelectorAll(".une_class")).forEach((x) => x.innerHTML = '0');
} 
;



