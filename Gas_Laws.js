let possible_questions = 
[
    "The volume of a given mass of a gas is 0.500 L at 10.0 degrees Celcius and 50.5 kPa. What will the volume be at 152 kPa and the same temperature?",
    "A sample of gas at 15.0 degrees Celcius (at 1 atm) has a volume of 2.58 L. The temperature is then raised to 38.0 degrees Celcius (at 1 atm). What is the new volume?",
    "Suppose we have a 12.2 L of sample containing 0.5 moles of oxygen gas, at a pressure of 1 atm and a temperature of 25 degrees Celcius. If all of this oxygen gas is converted to ozone at the same temperature and pressure, what will be the volume of ozone formed?",
    "A sample of oxygen gas is saturated with water vapor at 27.0 degrees Celcius. The total pressure of the mixture is 772 torr, and the vapor pressure of water is 26.7 torr at 27 degrees Celcius. What is the partial pressure of the oxygen?",
    "A sample of nitrogen gas has a volume of 1.75 L at 101.3 kPa and 273 K. How many moles of nitrogen are present?"
];
let Temp_possible_questions = ["1+1=?","2+2=?","3+3=?"];
A = 0;
B = 0;
C = 0;
D = 0;

let i = 0;

let red_color = "#ff726f";
let green_color = "#A7FAC9";

function generate(){

    //set color to none
    document.getElementById("A").style.backgroundColor = "";
    document.getElementById("B").style.backgroundColor = "";
    document.getElementById("C").style.backgroundColor = "";
    document.getElementById("D").style.backgroundColor = "";

    //question generation
    document.getElementById("Question_Text").innerText = possible_questions[i];
   
    if (i == 0){
        document.getElementById("A").innerText = 0.078 + " L";
        document.getElementById("B").innerText = 0.166 + " L";
        document.getElementById("C").innerText = 0.286 + " L";
        document.getElementById("D").innerText = 0.101 + " L";

    }
    
    if (i == 1){
        document.getElementById("A").innerText = 2.21 + " L";
        document.getElementById("B").innerText = 0.76 + " L";
        document.getElementById("C").innerText = 1.38 + " L";
        document.getElementById("D").innerText = 2.79 + " L";

    }

    if (i == 2){
        document.getElementById("A").innerText = 1.7 + " L";
        document.getElementById("B").innerText = 3.2 + " L";
        document.getElementById("C").innerText = 8.1 + " L";
        document.getElementById("D").innerText = 2.7 + " L";
    }

    if (i == 3){
        document.getElementById("A").innerText = 800.5 + " \ntorr";
        document.getElementById("B").innerText = 745.3 + " \ntorr";
        document.getElementById("C").innerText = 301.2 + " \ntorr";
        document.getElementById("D").innerText = 217.9 + " \ntorr";
    }

    if (i == 4){
        document.getElementById("A").innerText = 0.0786 + " \nmol";
        document.getElementById("B").innerText = 0.0982 + " \nmol";
        document.getElementById("C").innerText = 0.0781 + " \nmol";
        document.getElementById("D").innerText = 0.0982 + " \nmol";
    }



    i += 1;
    

    if (i >= 5){
        i = 0;
    }
}

//A
function checkA(){

    //Question 1
    if (i == 1){
        document.getElementById("A").style.backgroundColor = red_color;
    }

    //question 2
    if (i == 2){
        document.getElementById("A").style.backgroundColor = red_color;
    }

    //question 3
    if (i == 3){
        document.getElementById("A").style.backgroundColor = red_color;
    }
    
    //question 4
    if (i == 4){
        document.getElementById("A").style.backgroundColor = red_color;
    }

    //question 5
    if (i == 0){
        document.getElementById("A").style.backgroundColor = red_color;
    }
}

//B
function checkB(){

    //Question 1
    if (i == 1){
        document.getElementById("B").style.backgroundColor = green_color;
    }

    //question 2
    if (i == 2){
        document.getElementById("B").style.backgroundColor = red_color;
    }

    //question 3
    if (i == 3){
        document.getElementById("B").style.backgroundColor = red_color;
    }

    //question 4
    if (i == 4){
        document.getElementById("B").style.backgroundColor = green_color;
    }

    //question 5
    if (i == 0){
        document.getElementById("B").style.backgroundColor = red_color;
    }
}

//C
function checkC(){

    //Question 1
    if (i == 1){
        document.getElementById("C").style.backgroundColor = red_color;
    }

    //question 2
    if (i == 2){
        document.getElementById("C").style.backgroundColor = red_color;
    }

    //question 3
    if (i == 3){
        document.getElementById("C").style.backgroundColor = green_color;
    }

    //question 4
    if (i == 4){
        document.getElementById("C").style.backgroundColor = red_color;
    }

    //question 5
    if (i == 0){
        document.getElementById("C").style.backgroundColor = green_color;
    }
}

//D
function checkD(){

    //Question 1
    if (i == 1){
        document.getElementById("D").style.backgroundColor = red_color;
    }

    //question 2
    if (i == 2){
        document.getElementById("D").style.backgroundColor = green_color;
    }

    //question 3
    if (i == 3){
        document.getElementById("D").style.backgroundColor = red_color;
    }

    //question 4
    if (i == 4){
        document.getElementById("D").style.backgroundColor = red_color;
    }

    //question 5
    if (i == 0){
        document.getElementById("D").style.backgroundColor = red_color;
    }
}



//================lines to make it cummy================//

//dropdown

function videos() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  