var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var countrydata = JSON.parse(this.response);

    var regiondata = countrydata.filter((ele) =>
    {

        return ele.population < 200000;

    }).map((element)=>
        {
         return element.name
        })
     console.log(regiondata);


}