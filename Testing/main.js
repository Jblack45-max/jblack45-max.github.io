document.getElementById("solarAllowed").innerHTML = 0;
document.getElementById("ampsUsed").innerHTML = 0;
document.getElementById("ampsAvailable").innerHTML = 0;


//Declaring Variables here so I can use them outside of function//
let acBreaker01;
let smallTotal01;
let maxSolar;
let lightsTotal;
let finalTotal;
let heatInput1;
let heatInput2;
let heatInput3;
let heatInput4;
let heatInput5;
let heatInput6;
let userPick1;
let userPick2;
let userPickNum;
let pole1;
let pole2;
let percent;
let max_val;
let remain1;
let remain2;
let heatPrint1;
let maxAmp;
let get = "document.getElementById";
const heatAcArray = [0];

function submitClicked() {


    //LINE ONE DECLARED VARIABLES//
    let otherUserPicked = document.getElementById("otherList").value;
    let otherBreaker = parseInt(document.getElementById("otherInput").value);
    let otherLine1;
    //LINE TWO DECLARED VARIABLES//
    let otherUserPicked2 = document.getElementById("otherList2").value;
    let otherBreaker2 = parseInt(document.getElementById("otherInput2").value);
    let otherLine2;
    //LINE THREE DECLARED VARIABLES//
    let otherUserPicked3 = document.getElementById("otherList3").value;
    let otherBreaker3 = parseInt(document.getElementById("otherInput3").value);
    let otherLine3;
    //LINE FOUR DECLARED VARIABLES//
    let otherUserPicked4 = document.getElementById("otherList4").value;
    let otherBreaker4 = parseInt(document.getElementById("otherInput4").value);
    let otherLine4;
    //LINE FIVE DECLARED VARIABLES//
    let otherUserPicked5 = document.getElementById("otherList5").value;
    let otherBreaker5 = parseInt(document.getElementById("otherInput5").value);
    let otherLine5;
    //PRINTING//


    //Variable name declared for final calculation/
    userPickNum = document.getElementById("heatListNum").value;
    //ONE
    heatInput1 = document.getElementById("heatInput1").value;
    userPick1 = document.getElementById("heatList1").value;
    //TWO
    heatInput2 = document.getElementById("heatInput2").value;
    userPick2 = document.getElementById("heatList2").value;




    //Switch case for Heat Line one//
    if (userPick1 == "one") {
        pole1 = "120";

    } else if (userPick1 == "two") {
        pole1 = "240";

    } else {
        pole1 = 0;
    }
    if (userPick2 == "one") {
        pole2 = "120";

    } else if (userPick2 == "two") {
        pole2 = "240";

    } else {
        pole2 = 0;
    }


    if (userPickNum == "one") {
        percent = .65;

    } else if (userPickNum == "two") {
        percent = .40;

    } else {
        percent = 0;
    }
    //Line 1 If - Other
    if (otherUserPicked == 'one') {
        otherLine1 = otherBreaker * .8 * 120;

    } else if (otherUserPicked == 'two') {
        otherLine1 = otherBreaker * .8 * 240;

    } else {
        otherLine1 = 0;

    }
    //Line 2 If - Other
    if (otherUserPicked2 == 'one') {
        otherLine2 = otherBreaker2 * .8 * 120;

    } else if (otherUserPicked2 == 'two') {
        otherLine2 = otherBreaker2 * .8 * 240;

    } else {
        otherLine2 = 0;

    }
    //Line 3 If - Other
    if (otherUserPicked3 == 'one') {
        otherLine3 = otherBreaker3 * .8 * 120;

    } else if (otherUserPicked3 == 'two') {
        otherLine3 = otherBreaker3 * .8 * 240;

    } else {
        otherLine3 = 0;

    }
    //Line 4 If - Other
    if (otherUserPicked4 == 'one') {
        otherLine4 = otherBreaker4 * .8 * 120;

    } else if (otherUserPicked4 == 'two') {
        otherLine4 = otherBreaker4 * .8 * 240;

    } else {
        otherLine4 = 0;

    }
    //Line 5 If - Other
    if (otherUserPicked5 == 'one') {
        otherLine5 = otherBreaker5 * .8 * 120;

    } else if (otherUserPicked5 == 'two') {
        otherLine5 = otherBreaker5 * .8 * 240;

    } else {
        otherLine5 = 0;

    }
    let otherTotal = otherLine1 + otherLine2 + otherLine3 + otherLine4 + otherLine5;

    //General Information//
    //This grabs the value inputed in the form box and stores it in the variable//
    let mspRating = parseInt(document.getElementById("input01").value);
    let mainRating = parseInt(document.getElementById("input02").value);

    //Calulating 120% Rule - Max Solar Allowance//
    maxSolar = mspRating * 1.20 - mainRating;
    maxAmp = mspRating * 1.20;
    document.getElementById("solarAllowed").innerHTML = maxSolar + "A";

    //Lighting//
    let squareFoot = parseInt(document.getElementById("input03").value);

    lightsTotal = squareFoot * 3;

    //Small Lighting Calculations//

    //This grabs the value inputed in the form box "input10" and stores it in the variable smallInput and converts it to a number//
    let smallInput = parseInt(document.getElementById("input10").value);

    //Completes multiplication - 1500 * number inputed//
    smallTotal01 = smallInput * 1500;


    heatTotal1 = (heatInput1 * .8 * pole1) * percent;
    heatPrint1 = heatInput1 * .8 * pole1;
    heatAcArray.push(heatTotal1);

    heatTotal2 = heatInput2 * .8 * pole2;
    heatAcArray.push(heatTotal2);

    max_val = Math.max(...heatAcArray);
    finalMath = max_val;
    mainTotals = smallTotal01 + lightsTotal + otherTotal;


    //Final Calculation
    finalTotal = (((mainTotals - 10000) * .4 + 10000) + finalMath) / 240;
    remain1 = mainTotals - 10000;
    remain2 = (mainTotals - 10000) * .4;

    rounded = Math.round(finalTotal);
    ampA = mainRating - rounded;

    document.getElementById("ampsUsed").innerHTML = Math.round(finalTotal) + "A";
    document.getElementById("ampsAvailable").innerHTML = ampA + "A";
    localStorage.setItem('0001', finalTotal);

    // THIS IS FOR THE PRINT FORM
    if (userPickNum == "one") {
        document.getElementById("print01").innerHTML = heatPrint1;
        document.getElementById("print01.1").innerHTML = heatTotal1;
        document.getElementById("print02").innerHTML = 0;
        document.getElementById("print02.1").innerHTML = 0;
    } else if (userPickNum == "two") {
        document.getElementById("print01").innerHTML = 0;
        document.getElementById("print01.1").innerHTML = 0;
        document.getElementById("print02").innerHTML = heatPrint1;
        document.getElementById("print02.1").innerHTML = heatTotal1;
    } else {
        document.getElementById("print01").innerHTML = 0;
        document.getElementById("print01.1").innerHTML = 0;
        document.getElementById("print02").innerHTML = 0;
        document.getElementById("print02.1").innerHTML = 0;
    }


    document.getElementById("print03").innerHTML = heatTotal2;
    document.getElementById("print03.1").innerHTML = heatTotal2;
    document.getElementById("print04").innerHTML = finalMath;
    document.getElementById("print05").innerHTML = squareFoot;
    document.getElementById("print05.1").innerHTML = lightsTotal;
    document.getElementById("print06").innerHTML = smallInput;
    document.getElementById("print06.1").innerHTML = smallTotal01;
    document.getElementById("print08.1").innerHTML = otherLine1;
    document.getElementById("print09.1").innerHTML = otherLine2;
    document.getElementById("print10.1").innerHTML = otherLine3;
    document.getElementById("print11.1").innerHTML = otherLine4;
    document.getElementById("print12.1").innerHTML = otherLine5;
    document.getElementById("print13").innerHTML = otherTotal;
    document.getElementById("print14").innerHTML = remain1;
    document.getElementById("print14.1").innerHTML = remain2;
    document.getElementById("print15").innerHTML = remain2;
    document.getElementById("print16").innerHTML = remain2;
    document.getElementById("print16.1").innerHTML = finalTotal;
    document.getElementById("print17").innerHTML = mspRating;
    document.getElementById("print17.1").innerHTML = maxAmp;
    document.getElementById("print18").innerHTML = maxAmp;
    document.getElementById("print18.1").innerHTML = mainRating;
    document.getElementById("print18.2").innerHTML = maxSolar;
    document.getElementById("print19").innerHTML = maxSolar;

}


function printClicked() {
    document.getElementById("printing").style.display = "block";
    document.getElementById("calculator").style.display = "none";
    document.body.style.backgroundColor = 'white';
}

function backClicked() {
    document.getElementById("printing").style.display = "none";
    document.getElementById("calculator").style.display = "block";
    document.body.style.backgroundColor = '#2c2c2c';
}


var img = document.getElementById("image");
var img1 = document.getElementById("image1");

function setImage() {
    const files = document.getElementById("chooseFile").files;
    if (!files || files.length == 0)
        return;
    const file = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        img.src = reader.result;
    };
}
function setImage1() {
    const files = document.getElementById("chooseFile1").files;
    if (!files || files.length == 0)
        return;
    const file = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        img1.src = reader.result;
    };
}