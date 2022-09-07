let num= "";
let clickedNum =(num1) =>{
    if (num1 === "." && num.indexOf( ".") >= 0){
        return;
    }else {
    if (number1 !== null) {
        num = num + num1;
        number2 = parseFoat(num);
    document.getElementsByClassName
    ("display")[0].innerHTML =`<span>${num}</span>`;
    } else {
        num = num+ num1
        document.getElementsByClassName
    ("display")[0].innerHTML =`<span>${num}</span>`;
        }
    }  
};
const clickedsymbol =(symbol) =>{
    number1 = parseFloat(num);
    calcSymbol = symbol;
    num ="";
}

const clearValues=() =>{
num= "";
document.getElementsByClassName
("display")[0].innerHTML ="";
 };
 
