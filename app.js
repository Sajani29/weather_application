
const baseURL = "http://api.weatherapi.com/v1";
const apiKey = "a8aba093d7574969be0130515262209";


function btnSearchOnAction() {
    const location = document.getElementById("txtSearch").value;
    fetch(`${baseURL}/current.json?key=${apiKey}&q=${location}`)
        .then(res => res.json())
        .then(data => console.log(data));

        
}
