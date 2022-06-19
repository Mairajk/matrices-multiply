function box() {
    let one = document.querySelector("#one").value ;
    let two = document.querySelector("#two").value ;
    // let mResult = document.querySelector("#mResult") ;

    document.querySelector("#iM1").innerHTML = "" ;
    document.querySelector("#iM2").innerHTML = "" ;
    document.querySelector("#mResult").innerHTML = "" ;

for (let i = 0 ;   i < one ;   i++) {
    for (let j = 0 ;   j < two ;   j++) {
    
        document.querySelector("#iM1").innerHTML +=  `<input placeholder="0"  id="iM1${i}_${j}"
     class="1iM" required type="number" min="0" max="100" value="0"> ` ;
    
     document.querySelector("#iM2").innerHTML +=  `<input placeholder="0"  id="iM2${i}_${j}"
     class="2iM" required type="number" min="0" max="100" value="0"> ` ;
        
     document.querySelector("#mResult").innerHTML +=  `<input placeholder="0"  id="mR${i}_${j}"
     class="mR" required type="number" min="0" max="100" value="0" disabled> ` ;
        
    }

    document.querySelector("#iM1").innerHTML += `<br>`
    document.querySelector("#iM2").innerHTML += `<br>`
    document.querySelector("#mResult").innerHTML += `<br>`
    
}
} 

function calculate() {
    let cal1 = [] ;
    let cal2 = [] ;
    let cal3 = [] ;
    let cal4 = [] ;

    for (let i = 0 ; i < one ; i++) {
        for (let j = 0 ; j < two ; j++) {
            let iM1 = +document.querySelector(`#iM1${i}_${j}`).value ;
            let iM2 = +document.querySelector(`#iM2${i}_${j}`).value ;

            cal1.push(iM1) ;
            cal2.push(iM2) ;
            
        }
    }

    for (let i = 0 ; i < one ; i++) {
        let mResult = 0 ;
        
        for (let i = 0 ; i < one ; i++) {
           
            for (let i = 0 ; i < one ; i++) {
           mResult += cal1[ i * one + k ] * cal2[ k * two + j ] ;
        }
        cal3.push(mResult) ;
      }  
    }

    for (let i = 0 ; i < one ; i++) {
        for (let j = 0 ; j < two ; j++) {
            document.querySelector(`#mR${i}_${j}`).innerTEXT  =  cal3[i * one + j];
        }
    }
}
