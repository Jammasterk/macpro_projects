const submit = document.querySelector("#submit")
const container = document.getElementById("response_container");
const con = 0


submit.addEventListener("click", function(e){
    e.preventDefault()
const city_value = document.getElementById("city").value
const bed_value = document.getElementById('beds').value
const zip_code = document.getElementById("zip").value
const price_value = document.getElementById("price").value
const state_value = document.getElementById('state').value
const bath_value = document.getElementById("baths").value
var options = {
  method: "GET",
  url: "https://realtor.p.rapidapi.com/properties/v2/list-for-sale",
  params: {
    city: city_value,
    state_code: state_value,
    beds: bed_value,
    baths_full: bath_value,
    postal_code: zip_code,
    price: price_value,
    limit: "15",
    offset: "0",
    // sort: "relevance",
  },
  headers: {
    "x-rapidapi-key": "41f3f91b13mshaa0652a8c3b96f1p165abcjsn42e270cab71c",
    "x-rapidapi-host": "realtor.p.rapidapi.com",
  },
};
  axios
      .request(options)
      .then((res) => {
        console.log(res);
        for(let index = 15; index < [con].length; index++){
            container.innerHTML += `
            <p>${res.data[con].properties[0].address}</p>
            `;
        }
      })
      .catch(function (error) {
        console.error(error);
      });
})





