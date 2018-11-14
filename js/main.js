(()=> {

    const vm = new Vue({

        el : "#app",


        data: {
            modelname: "",
            modelpricing : "",
            modeldetails : "",

            videosrc = "mini_1.mp4"
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

        volOn(e){

            //catch the volOn event
            console.log('moused over the video')

            e.currentTarget.muted = false;
        },

        volOff(e){

            //catch the volOff event
            console.log('moused off the video')

            e.currentTarget.muted = true;
        },

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