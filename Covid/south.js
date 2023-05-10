const xValues = ["25th June","30th June","5th July","10th July","15th July","20th July","25th July","30th July","4th August"];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [59406,60038,61507,63499,65142,66859,69075,70338,72437],
      borderColor: "red",
      fill: false
    }, { 
      data: [1877142,1941119,2046311,2135246,2219316,2295095,2356049,2391223,2461758],
      borderColor: "green",
      fill: false
    }, { 
      data: [1675827,1723882,1792361,1862900,1961448,2050164,2133196,2180494,2238388],
      borderColor: "blue",
      fill: false
    },{
      data: [141910,157199,192443,208843,192726,178072,153778,140391,150933],
      borderColor: "black",
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


let secData1 = document.getElementById('api2');
let secData2 = document.getElementById('api3');
let secData3 = document.getElementById('api4');
let secData4 = document.getElementById('api5');

let thirdData1 = document.getElementById('api22');
let thirdData2 = document.getElementById('api44');
let thirdData3 = document.getElementById('api66');
let thirdData4 = document.getElementById('api88');

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
 



function SA() {
// let totalDeath = document.querySelector('.totDeath')
// let secData = document.getElementById('api2');

fetch("https://api.covid19api.com/live/country/south-africa/status/confirmed")

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
  `2,238,388`
  frontData3.innerHTML = 
  `(3.77% of the population)`
  frontData2.innerHTML =
  `2,461,758`
  frontData1.innerHTML =
  `(4.15% of the population)`
  frontData5.innerHTML =
  `72,437`
  frontData6.innerHTML =
  `(0.12% of the population)`
  frontData7.innerHTML =
  `150,933`
  frontData8.innerHTML = 
  `(0.25% of the population)`
//   +
//   `<ul>${'Date'}:
//   ${result[39].Date}
//   </ul>`
  
  console.log(result)
  })
  
}
// SA()




function Algeria() {
let SumDeath = document.querySelector('.totDeath2')

// let thirdData = document.getElementById('api3')

fetch("https://api.covid19api.com/live/country/algeria/status/confirmed")
.then(response => response.json())
  // .then(result => console.log(result))
.then(result =>{

  
  secData1.innerHTML = 

`<p>${'Confirmed'}:
  ${result[39].Confirmed},
  </p>`

  secData2.innerHTML =
  `<ul>${'Active'}:
  ${result[39].Active},
  </ul>`

  secData3.innerHTML =
  `<ul>${'Deaths'}:
  ${result[39].Deaths},
  </ul>`

   secData4.innerHTML =
  `<ul>${'Recovered'}:
  ${result[39].Recovered},
  </ul>`

  
  console.log(result)
})
  
}
// Algeria()


function Libya() {
let SumOfDeath = document.querySelector('.totDeath3')
  
  fetch("https://api.covid19api.com/live/country/libya/status/confirmed")
  .then(response => response.json())
  // .then(result => console.log(result))
  .then(result =>{

  thirdData1.innerHTML = 
    
  `<p>${'Confirmed'}:
  ${result[39].Confirmed},
  </p>`
  thirdData2.innerHTML =
  `<ul>${'Active'}:
  ${result[39].Active},
  </ul>`
  thirdData3.innerHTML =
  `<ul>${'Deaths'}:
  ${result[39].Deaths},
  </ul>`
   thirdData4.innerHTML =
  `<ul>${'Recovered'}:
  ${result[39].Recovered},
  </ul>`
  
  
  console.log(result)
  })
  
}