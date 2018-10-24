(()=> {
    //Grab the car button
    const cars = document.querySelectorAll('.data-ref')
    function fetchData() {
        fetch(`./includes/connect.php?carModel=${this.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            parseCarData(data[0]);
        })
        .catch(function(error) {
            console.error(error);
        });
    }

    function parseCarData(car) {
        //Destructure the database info and grab just what we need
        const { modelName, pricing, modelDetails } = car
        //take the database data and put it on the page
        document.querySelector(".modelName").textContent = modelName;
        document.querySelector(".priceInfo").textContent = pricing;
        document.querySelector(".modelDetails").textContent = modelDetails;

    };

    cars.forEach(car => car.addEventListener("click", fetchData));
    fetchData();
})();