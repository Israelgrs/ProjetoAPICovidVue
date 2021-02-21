const vue = new Vue({

        el: '#app',

        data:{

            country: '',
            countryList:[],
            cases:'',
            death: '',
            recovered:''

        },

        methods:{
            getCountry(){
                fetch("https://covid-193.p.rapidapi.com/countries", {
    	"method": "GET",
	    "headers": {
		"x-rapidapi-key": "SIGN-UP-FOR-KEY",
		"x-rapidapi-host": "covid-193.p.rapidapi.com"
	            
                
            }
        }).then(response => response.json()).then(data =>
            this.countryList = data.response;
            
            ); 

})