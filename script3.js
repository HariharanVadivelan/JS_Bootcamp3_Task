var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var countrydata = JSON.parse(this.response);

    var regiondata = countrydata.forEach((ele) =>
    {

        console.log('Country :'+ele.name,'Capital :'+ele.capital,'flag :'+ele.flag);

    })


}