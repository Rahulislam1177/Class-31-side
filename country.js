const loadCountryData=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountry(data))
}

loadCountryData()


const displayCountry=(countris)=>{

countris.forEach(countriy =>{
  const countryBox=document.getElementById('country');


    const div =document.createElement('div')
    div.classList.add('country')
    div.innerHTML =`

    <img src="${countriy.flags.png}" alt="">
    <h4>Name: ${countriy.name.common}</h4>
    <h5>Area: ${countriy.area}</h5>
    <p>Population: ${countriy.population}</p>
    <button onclick="loadCountryDetails('${countriy.name.common}')">Show Details: </button>
    `
    countryBox.appendChild(div)
    })
}

const loadCountryDetails=(name)=>{ 

    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(res=> res.json())
    .then(data=>displayCountryDetails(data[0]))
}  

const displayCountryDetails=(countriy)=>{
    const detailsDiv = document.getElementById('details');

    detailsDiv.innerHTML =`
      <img src="${countriy.flags.png}" alt="">
      <h4>Name: ${countriy.name.official}</h4>
      <h5>Area: ${countriy.area}</h5>
      <h5>Ragion: ${countriy.ragion}</h5>
      <h5>Borders: ${countriy.borders}</h5>
      <p>Population: ${countriy.population}</p>`
    detailsDiv.appendChild(singleDetails)
    

  }

