window.onload=()=>{
    const firstInput = document.getElementById("first");
    const secondInput = document.getElementById("second");
    const buttons = document.querySelectorAll("button");
    const result = document.getElementById("result");
    

    
    function compute(oprtn){
                    let sol;
                    const first = parseFloat(firstInput.value);
                    const second = parseFloat(secondInput.value);
                    const operation = oprtn;
                    
                    switch(operation){
                                    case "Add +": sol= first + second;
                                                    break;
                                    
                                    case "Subtract -":sol = first - second;
                                                    break;
                                    
                                    case "Multiply *":sol = first * second;
                                                    break;
                                    
                                    case "Divide /":sol = first / second;
                                                    break;
                                    
                                    default: return;
                    }
                    
                    return sol;
                    
    }

buttons.forEach(button => {

     console.log(button.innerText)
     button.addEventListener	("click",() =>{
                const output =	compute(button.innerText);
                result.innerText = "The result of operation is: " + output;
                console.log(button.innerText);
    });				
})				 				

//console.log(buttons.button.innerText);

}