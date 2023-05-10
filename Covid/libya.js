const xValues = ["25th June","30th June","5th July","10th July","15th July","20th July","25th July","30th July","4th August"];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [3185,3191,3205,3227,3245,3281,3344,3453,3579],
      borderColor: "red", //Death
      fill: false
    }, { 
      data: [191660,192786,194323,199526,209409,221495,229604,243470,256328],
      borderColor: "green", //Confirmed
      fill: false
    }, { 
      data: [177106,177882,178871,180204,181572,183436,185468,188973,193144],
      borderColor: "blue", //Recovered
      fill: false
    },{
      data: [11369,11713,12247,16095,24592,34778,40792,51044,59605],
      borderColor: "black", //Active
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

let frontData1 = document.getElementById('api');
let frontData2 = document.getElementById('api11');
let frontData3 = document.getElementById('api01');
let frontData4 = document.getElementById('api02');
let frontData5 = document.getElementById('api03');
let frontData6 = document.getElementById('api04');
let frontData7 = document.getElementById('api05');
let frontData8 = document.getElementById('api06');




// totalDeath.innerHTML = result[438].Deaths;
// SumDeath.innerHTML = result[438].Deaths;
// SumOfDeath.innerHTML = result[438].Deaths;
// fetch("https://api.covid19api.com/")
//   .then(response => response.json())
//   .then(result =>{
//   frontData.innerHTML = 
//   `<ul>
//   ${result.countriesRoute}
//   </ul>`
//   console.log(result)
// })
 



function Libya() {
// let totalDeath = document.querySelector('.totDeath')
// let secData = document.getElementById('api2');

fetch("https://api.covid19api.com/live/country/libya/status/confirmed")

.then(response => response.json())
  // .then(result => console.log(result))
.then(result =>{ 

  // frontData.innerHTML = 
 
  // `<p>${'Confirmed'}:
  // ${result[39].Confirmed}
  // </p>`
  // console.log(result.Confirmed)
  // frontData2.innerHTML =
  
  // `<ul>${'Active'}:
  // ${result[39].Active}
  // </ul>`
  // frontData3.innerHTML =
  // `<ul>${'Deaths'}:
  // ${result[39].Deaths}
  // </ul>`
   frontData4.innerHTML =
  `193,144`//Recover
  frontData3.innerHTML = 
  `(2.87% of the population)`
  frontData2.innerHTML =
  `256,328` //Confired
  frontData1.innerHTML =
  `(3.81% of the population)`
  frontData5.innerHTML =
  `3,579` //Deaths
  frontData6.innerHTML =
  `(0.05% of the population)`
  frontData7.innerHTML =
  `59,605` //Active
  frontData8.innerHTML = 
  `(0.89% of the population)`
//   +
//   `<ul>${'Date'}:
//   ${result[39].Date}
//   </ul>`
  
  console.log(result)
  })
  
}