let btn = document.getElementById("submit")
let drilldownsDiv = document.getElementById("forDrilldowns")
let measuresDiv = document.getElementById("forMeasures")
let yearDiv = document.getElementById("forYear")

btn.addEventListener("click", () => {
    let selectMeasure = document.getElementById("measures").value
    let selectDrilldowns = document.getElementById("drilldowns").value
    let selectYear = document.getElementById("year").value
    fetch(`https://datausa.io/api/data?drilldowns=${selectDrilldowns}&measures=${selectMeasure}&year=${selectYear}`)
    .then(res => res.json())
    .then(data => draw(data.data, selectMeasure, selectDrilldowns))
})

function draw(data, measure, drilldowns){
    drilldownsDiv.innerHTML = ""
    measuresDiv.innerHTML = ""
    yearDiv.innerHTML = ""
    if(data.length){
        data.forEach(el => {
            let pDrilldowns = document.createElement("p")
            let pMeasures = document.createElement("p")
            let pYear = document.createElement("p")
            pDrilldowns.innerText = `${el[drilldowns]} `
            pMeasures.innerText = `${el[measure]}`
            pYear.innerText = `${el["Year"]}`
            drilldownsDiv.append(pDrilldowns)
            measuresDiv.append(pMeasures)
            yearDiv.append(pYear)
        })
    } else {
        alert('There is no information about your request in the database')
    }
}