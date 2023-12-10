/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var totalDays = 0;
var dayRate = 35;
var totalCost = 0;
var halfDayColor = 0;
var fullDayColor = 1;
let calcCost = document.getElementById('calculated-cost');



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
var mon = document.getElementById('monday');
var tue = document.getElementById('tuesday');
var wed = document.getElementById('wednesday');
var thu = document.getElementById('thursday');
var fri = document.getElementById('friday');

class SelectDay {
    constructor(dayArgu) {
        this.day = dayArgu;
    }

    onClick() {
        if (this.day.classList.contains('clicked')) {
            this.day.classList.remove('clicked');
            totalDays -= 1;
            console.log('totaldays=', totalDays);
        } else {
            this.day.classList.add('clicked');
            totalDays += 1;
            console.log('totaldays=', totalDays);
        }
        totalCost = dayRate * totalDays;
        calcCost.textContent = totalCost;
    }
}

const mondayObject = new SelectDay(mon);
const tuesdayObject = new SelectDay(tue);
const wednesdayObject = new SelectDay(wed);
const thursdayObject = new SelectDay(thu);
const fridayObject = new SelectDay(fri);

mon.addEventListener('click', function () {
    mondayObject.onClick();
});

tue.addEventListener('click', function () {
    tuesdayObject.onClick();
});

wed.addEventListener('click', function () {
    wednesdayObject.onClick();
});

thu.addEventListener('click', function () {
    thursdayObject.onClick();
});

fri.addEventListener('click', function () {
    fridayObject.onClick();
});



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
var clearButton = document.getElementById('clear-button');/*Grab the Id of the button "not the text but the item itself" */
clearButton.addEventListener('click', clearAll);

function clearAll(){
    mon.classList.remove('clicked');
    tue.classList.remove('clicked');
    wed.classList.remove('clicked');
    thu.classList.remove('clicked');
    fri.classList.remove('clicked');
    totalDays = 0;
    totalCost = 0;
    totalCost = dayRate * totalDays;
    calcCost.textContent = totalCost;
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
var halfDay = document.getElementById('half');
var fullDay = document.getElementById('full');

halfDay.addEventListener('click', changeColorHalfDay);
fullDay.addEventListener('click', changeColorFullDay);

function changeColorHalfDay() {
    if (halfDayColor === 0) {
        halfDay.classList.add('clicked');
        fullDay.classList.remove('clicked');
        fullDayColor = 0;
        halfDayColor = 1;
        console.log('halfDaycolor=', halfDayColor);
        console.log('fullDayColor=', fullDayColor);
        dayRate = 20;
        console.log('dayRate=', dayRate);
    }
    totalCost = dayRate * totalDays;
    calcCost.textContent = totalCost;
}


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function changeColorFullDay () {
    if (fullDayColor === 0){
        halfDay.classList.remove('clicked');
        fullDay.classList.add('clicked');
        halfDayColor = 0;
        fullDayColor = 1;
        console.log('halfDaycolor=',halfDayColor);
        console.log('fullDayColor=',fullDayColor);
        dayRate = 35;
        console.log('dayRate=',dayRate);
    }
    totalCost = dayRate * totalDays;
    calcCost.textContent = totalCost;
    
}

