
const baseURL = "http://api.weatherapi.com/v1";

const apiKey = "a8aba093d7574969be0130515262209";




/*let body = '';

data.forEach(element => {
    body += `<tr>
                <td>${element.location.name}</td>
                <td>${element.current.temp_c}</td>
                <td>${element.current.condition.text}</td>
                <td>${element.current.humidity}</td>
                <td>${element.current.wind_kph}</td>  2754270
            </tr>`;
});

document.getElementById("tblContent").innerHTML = body;
*/
function btnSearchOnAction() {
    const location = document.getElementById("txtSearch").value;

    fetch(`${baseURL}/current.json?key=${apiKey}&q=${location}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("contentSection").innerHTML = `
    <div>
        <h1>${data.location.name}</h1>
        <h2>${data.location.region}, ${data.location.country}</h2>
        <div>
            <img src="${data.current.condition.icon}" alt="${data.current.condition.text}" />
        </div>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Wind Speed: ${data.current.wind_kph} km/h</p>
    </div>
    `

        })
}

navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
});
console.log();

//Synchronize and Asynchronize Programming

setTimeout(() =>{  
    console.log("Udenm nagitinw.....")
    setTimeout(() => {
        console.log("munasodnwa....");
        setTimeout(() => {
            console.log("class ynwa....");
            setTimeout(() => {
                console.log("igen gnnw....");
                setTimeout(() => {
                    console.log("gdr enw....");
                    setTimeout(() => {
                        console.log("knw....");
                    },3000);
                },4000);
            },4000);
        },4000);
    },3000);
 },2000);