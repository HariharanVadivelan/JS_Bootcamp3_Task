var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var countrydata = JSON.parse(this.response);

    var totalpopulation = countrydata.reduce((acc,ele) =>
    {

        return acc + ele.population;

    },0);
    console.log(totalpopulation);


}