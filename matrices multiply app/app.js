// let one = "" ;
// let two = "" ;
function box() {
     let one = document.querySelector("#one").value ;
     let two = document.querySelector("#two").value ;
    // let mResult = document.querySelector("#mResult") ;

    document.querySelector("#iM1").innerHTML = "" ;
    document.querySelector("#iM2").innerHTML = "" ;
    document.querySelector("#mResult").innerHTML = "" ;

for (let i = 0 ;   i < one ;   i++) {
    for (let j = 0 ;   j < two ;   j++) {
    
        document.querySelector("#iM1").innerHTML +=  `<input placeholder="0"  id="iM1${i}${j}"
     class="1iM" required type="number" min="0" max="100" value="0"> ` ;
    
     document.querySelector("#iM2").innerHTML +=  `<input placeholder="0"  id="iM2${i}${j}"
     class="2iM" required type="number" min="0" max="100" value="0"> ` ;
        
     document.querySelector("#mResult").innerHTML +=  `<input placeholder="0"  id="mR${i}${j}"
     class="mR" required type="number" min="0" max="100" value="0" disabled> ` ;
        
    }

    document.querySelector("#iM1").innerHTML += `<br>`
    document.querySelector("#iM2").innerHTML += `<br>`
    document.querySelector("#mResult").innerHTML += `<br>`
    
}
} 

function calculate() {
    //  let one = document.querySelector("#one").value ;
    //  let two = document.querySelector("#two").value ;
    
    let cal1 = [] ;
    let cal2 = [] ;
    let cal3 = [] ;
    // let cal4 = [] ;

    for (let i = 0 ; i < one ; i++) {
        for (let j = 0 ; j < two ; j++) {
            let iM1V = +document.querySelector(`#iM1${i}${j}`).value ;
            let iM2V = +document.querySelector(`#iM2${i}${j}`).value ;

            cal1.push(iM1V) ;
            cal2.push(iM2V) ;
            
        }
        console.log(iM1V);
        console.log(iM2V);
    }

    for (let i = 0 ; i < one ; i++) {
        
        for (let j = 0 ; j < two ; i++) {
            let result = 0 ;
            
            for (let k = 0 ; k < one ; i++) {
           result += cal1[ i * one + k ] * cal2[ k * two + j ] ;
        }
        cal3.push(result) ;
      }  
    }

    for (let i = 0 ; i < one ; i++) {
        for (let j = 0 ; j < two ; j++) {
            // document.querySelector(`#mR${i}_${j}`).value  =  cal3[i * one + j];
            document.querySelector(`mR${i}${j}`).value = cal3[i * one + j] ;
        }
        console.log(cal3);
    }
}
