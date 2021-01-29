var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var countrydata = JSON.parse(this.response);

    var currency = countrydata.filter((ele) =>
    {

        return ele.currencies[0].code === 'USD';

    }).map((n)=>
         {
        return n.name;
         })

    console.log(currency);

}