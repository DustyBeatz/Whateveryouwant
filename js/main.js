(()=> {

    const vm = new VTTCue({

        el : "#app",
        data: {
            modelname: "",
            modelpricing : "",
            modeldetails : ""
        },
    })
    mounted : function() {
        console.log('mounted');

        document.querySelector("#F55").click();
    },

    updated : function() {
        console.log('updated');
    },
    methods: {
    fetchData(e) {

        //gets the id of the elements via the events object

        let targetURL = e.currentTarget.id;

        fetch(`./includes/connect.php?carModel=${targetURL}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const { modelName, Pricing, modelDetails }= data[0];

            this.modelname = modelName;
            this.modeldetails = modelDetails;
            this.modelpricing = pricing;
        })
        .catch(function(error){
            console.error(error);
        });
    }
 }

    fetchData();
})();