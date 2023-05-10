const xValues = ["25th June","30th June","5th July","10th July","15th July","20th July","25th July","30th July","4th August"];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [3669,3699,3745,3798,3867,3938,4026,4161,4329],
      borderColor: "red", //Death
      fill: false
    }, { 
      data: [137403,138840,141007,143652,147883,153309,159563,167131,173922],
      borderColor: "green", //Confirmed
      fill: false
    }, { 
      data: [95599,96572,98031,99931,102594,105604,109349,112900,116770],
      borderColor: "blue", //Recovered
      fill: false
    },{
      data: [38135,38569,39231,39923,41422,43767,46188,50070,52823],
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
 



function Algeria() {
// let totalDeath = document.querySelector('.totDeath')
// let secData = document.getElementById('api2');

fetch("https://api.covid19api.com/live/country/algeria/status/confirmed")

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
  `116,770`
  frontData3.innerHTML = 
  `(0.26% of the population)`
  frontData2.innerHTML =
  `173,922`
  frontData1.innerHTML =
  `(0.39% of the population)`
  frontData5.innerHTML =
  `4,329`
  frontData6.innerHTML =
  `(0.01% of the population)`
  frontData7.innerHTML =
  `52,823`
  frontData8.innerHTML = 
  `(0.12% of the population)`
//   +
//   `<ul>${'Date'}:
//   ${result[39].Date}
//   </ul>`
  
  console.log(result)
  })
  
}





