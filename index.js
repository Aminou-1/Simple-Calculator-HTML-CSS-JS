const display = document.getElementById("display");
const mode = document.getElementById("mode");
const buttons = document.getElementsByClassName("btn");
const sppcbuttons = document.getElementsByClassName("orange");
const calculator = document.getElementsByClassName("calculator");

function input(input){
    display.value += input;
}
function clearout(){
    display.value = "";
}
function calculate(){
    try{
    display.value = eval(display.value);
    if(display.value === "Infinity"){
        throw new Error("Error");
    }
    else if(display.value === "function Error() { [native code] }"){
        throw new Error("Error");
    }
    else if(display.value === "undefined"){
        throw new Error("Error");
    }
    }
    catch(error){
        display.value = "Error";
    }
}

function togglelight(){
    if(mode.checked){
        document.body.style.backgroundColor = "#e4e5f1";
        display.style.backgroundColor = "#d2d3db";
        display.style.color = "black";
        Array.from(buttons).forEach(button => {
            button.style.backgroundColor = "#9394a5";
            button.style.color = "white";
        })
        Array.from(sppcbuttons).forEach(sppcbutton =>{
            sppcbutton.style.backgroundColor = "#7176b4ff";
        })
        Array.from(calculator).forEach(calculator =>{
        calculator.style.backgroundColor = "#484b6a";
        })

        
        Array.from(buttons).forEach(button => {
            button.addEventListener("mouseover", () => {
                button.style.backgroundColor = "#747483ff";
            })
            button.addEventListener("mouseout", () =>{
                button.style.backgroundColor = "#9394a5";
            })
            button.addEventListener("click", () =>{
                button.style.backgroundColor = "#6c6c7aff";
                setTimeout(() =>{
                    button.style.backgroundColor ="#747483ff";
                }, 10)
            })
        })

        Array.from(sppcbuttons).forEach(sppcbutton =>{
            sppcbutton.addEventListener("mouseover", () =>{
                sppcbutton.style.backgroundColor = "#5e629bff";
            })
            sppcbutton.addEventListener("mouseout", () =>{
                sppcbutton.style.backgroundColor = "#7176b4ff";
            })
            sppcbutton.addEventListener("click", () =>{
                sppcbutton.style.backgroundColor = "#4c4f79ff";
                setTimeout(() =>{
                    sppcbutton.style.backgroundColor ="#5e629bff";
                },10);
            })
        })
    }
    else{
        document.body.style.backgroundColor = "#3a4545";
        display.style.backgroundColor = "#282929";
        display.style.color = "white";
        Array.from(buttons).forEach(button => {
            button.style.backgroundColor = "#7f7f7f";
            button.style.color = "white";
        })
        Array.from(sppcbuttons).forEach(sppcbutton =>{
        sppcbutton.style.backgroundColor = "#ef9b00";
        })
        Array.from(calculator).forEach(calculator =>{
        calculator.style.backgroundColor = "hsl(0, 0%, 0%)";
        })


                Array.from(buttons).forEach(button => {
            button.addEventListener("mouseover", () => {
                button.style.backgroundColor = "#686767";
            })
            button.addEventListener("mouseout", () =>{
                button.style.backgroundColor = "#7f7f7f";
            })
            button.addEventListener("click", () =>{
                button.style.backgroundColor = "#444343";
                setTimeout(() =>{
                    button.style.backgroundColor ="#686767";
                }, 10)
            })
        })

        Array.from(sppcbuttons).forEach(sppcbutton =>{
            sppcbutton.addEventListener("mouseover", () =>{
                sppcbutton.style.backgroundColor = "#ca8300";
            })
            sppcbutton.addEventListener("mouseout", () =>{
                sppcbutton.style.backgroundColor = "#ef9b00";
            })
            sppcbutton.addEventListener("click", () =>{
                sppcbutton.style.backgroundColor = "rgb(153, 100, 0)";
                setTimeout(() =>{
                    sppcbutton.style.backgroundColor ="#ca8300";
                },10);
            })
        })
    }
}