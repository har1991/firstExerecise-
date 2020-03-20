var maxNumber = 0 ; 
var minNumber = 1000 ; 
var total = 0 ; 
var arr = [] ; 
sum = 0;
average = 0;

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
        var series = 0 ;
        if( arr.length > 1 ){
            for ( var i = 0 ; i <arr.length ; i++ ){
                if (arr[i+1]>arr[i] ){
                    
                    series=series+1;
                    document.getElementById("seriresArray").innerHTML = series; 
                }
                else {
                    document.getElementById("seriresArray").innerHTML = series;

                }
            }
        

        }
        document.getElementById("seriresArray").innerHTML = series;
    }

        
        
;


