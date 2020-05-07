document.addEventListener("DOMContentLoaded", () => {
    let container = document.createElement("div");
    container.classList.add("container");
    document.getElementsByTagName("body")[0].appendChild(container);

    document.getElementsByTagName("body")[0].setAttribute("style","background-color: #9deeda;");

    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    let col = document.createElement("div");
    col.classList.add("col-lg-12");
    col.setAttribute("style","color:black;text-align:center;");
    row.appendChild(col);
    col.appendChild(document.createElement("h1")).innerHTML = "Enter number to <br>convert into words";

    // card for number and words
    let card = document.createElement("div");
    card.classList.add("card");
    col.appendChild(card);


    // Card body
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "bg-dark");
    card.appendChild(cardBody);

    
    // create input field
    let inputNumber = document.createElement("input");
    inputNumber.type = "number";
    inputNumber.id = "number-input-class";
    inputNumber.classList.add();
    cardBody.appendChild(inputNumber);

    //Submit button  
    let submitButton = document.createElement("a");
    submitButton.href = "#";
    submitButton.classList.add("btn","btn-primary");
    submitButton.setAttribute("style","margin-left:5px;");
    submitButton.innerHTML = "Submit";
    cardBody.appendChild(submitButton);

    // Text area to display number in words
    let textArea = document.createElement("p");
    textArea.id = "text-area-id";
    textArea.classList.add("text-area",'card-text','text-light');
    textArea.setAttribute("style","width:inherit; height:auto; border:2px solid white; font-size:50px; text-align:center; margin: 10px auto;");
    textArea.innerHTML = "You'll see number in words here";
    cardBody.appendChild(textArea);

    submitButton.addEventListener("click",ConvertToWords);
})

function ConvertToWords(){
    let number2 = document.getElementById("number-input-class").value;
    let numberInWords = inWords(number2);
    console.log(numberInWords);
    document.getElementById("text-area-id").innerHTML = numberInWords;
}

    var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 7) return 'overflow';
    console.log("num = ",num);
    
    n = ('0000000' + num).substr(-7).match(/^(\d{2})(\d{2})(\d{1})(\d{2})$/);
    console.log("n=",n); 
    
    if (!n) return; 
    var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'lakh ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'thousand ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'hundred ' : '';
    str += (n[4] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'only ' : '';
    return str;
}


