fetch(`https://striveschool-api.herokuapp.com/books`)
  .then(function (data) {
    console.log(`questa è la risposta del server`, data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let arrayLibri = data;
    // console.log(arrayLibri);

    let container = document.getElementById("spazio");
    arrayLibri.forEach((libri) => {
      container.innerHTML += ``;
    });
  })
  .catch(function (err) {
    console.log("è successo un errore", err);
  });
