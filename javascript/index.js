function updateTime() {
  // Bulawayo
  let harareElement = document.querySelector("#harare");
  if (harareElement) {
    let harareDateElement = harareElement.querySelector(".date");
    let harareTimeElement = harareElement.querySelector(".time");
    let harareTime = moment().tz("Africa/Harare");

    harareDateElement.innerHTML = harareTime.format("MMMM Do YYYY");
    harareTimeElement.innerHTML = harareTime.format(
      "h:mm:ss [<small>]A[<small/>] "
    );
  }
  // Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[<small/>] "
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  //   for current location anywhere
  //   if (cityTimeZone === "current") {
  //     cityTimeZone = moment.tz.guess();
  //   }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">
        ${cityTime.format("MMMM Do YYYY")}
        </div>
    </div>
        <div class="time"> ${cityTime.format(
          "h:mm:ss "
        )} <small> ${cityTime.format("A")}<small/></div>

    </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
