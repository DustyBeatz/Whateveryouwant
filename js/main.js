(()=> {

    const vm = new Vue({

        el : "#app",


        data: {
            modelname: "",
            modelpricing : "",
            modeldetails : ""
        },

    mounted : function() {
        console.log('mounted');
        
        this.addPreloader(document.querySelector('.modelInfo'));

        document.querySelector("#F55").click();

    },

    updated : function() {
        console.log('updated');

        let preloader = document.querySelector('.preloader-wrapper');

        setTimeout(function() {
            preloader.classList.add('hidden');
            document.body.appendChild('.preloader');
        }, 1000);
    },
    methods: {

        addPreloader(parentEl){
            parentEl.appendChild(docuemnt.querySelector('.preloader-wrapper'));

            modymovin.loadAnimation({

                wrapper : document.querySelector('.preloader'),
                animType: 'svg',
                loop : true,
                path : './data/search.json'
            });
        },

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
 },

    fetchData();
})();