let frontData = document.getElementById('api');
let frontData2 = document.getElementById('api11')
let frontData3 = document.getElementById('api01')
let frontData4 = document.getElementById('api02')

let secData1 = document.getElementById('api2');
let secData2 = document.getElementById('api3');
let secData3 = document.getElementById('api4');
let secData4= document.getElementById('api5');

let thirdData = document.getElementById('api3')
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
let totalDeath = document.querySelector('.totDeath')
// let secData = document.getElementById('api2');

fetch("https://api.covid19api.com/live/country/south-africa/status/confirmed")

.then(response => response.json())
  // .then(result => console.log(result))
.then(result =>{ 
//   totalDeath.innerHTML = result[438].Deaths;
  frontData.innerHTML = 
 
  `<p>${'Confirmed'}:
  ${result[39].Confirmed},
  </p>`
  frontData2.innerHTML =
  
  `<ul>${'Active'}:
  ${result[39].Active},
  </ul>`
  frontData3.innerHTML =
  `<ul>${'Deaths'}:
  ${result[39].Deaths},
  </ul>`
   frontData4.innerHTML =
  `<ul>${'Recovered'}:
  ${result[39].Recovered},
  </ul>`
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
  SumDeath.innerHTML = result[438].Deaths;
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
  SumOfDeath.innerHTML = result[438].Deaths;
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
// Libya()

  // fetch("https://api.covid19api.com/live/total/country/mauritius/status/confirmed")
  // .then(response => response.json())
  // // .then(result => console.log(result))
  // .then(result =>{
  //   frontData.innerHTML = 
  //   `<ul>
  //   ${result.country},
  
  
  //   </ul>`
  //   console.log(result)
  // })

  // fetch("https://api.covid19api.com/total/country/morocco/status/confirmed")
  // .then(response => response.json())
  // // .then(result => console.log(result))
  // .then(result =>{
  //   frontData.innerHTML = 
  //   `<ul>
  //   ${result.country},
  
  
  //   </ul>`
  //   console.log(result)
  // })

  // fetch("https:thedogapi.com")
  //   .then(result => Response.json())
  //   .then(x => console.log(x))

  // fetch('https://fakestoreapi.com/products')
  // .then(res=>res.json())
  // .then(x=>console.log(x))