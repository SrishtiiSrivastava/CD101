function compute()
{
   var principal = document.getElementById("principal").value;
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;
    result = document.getElementById("result");
    
    
               
    var interest = (principal*rate*years)/100;

    var year = new Date().getFullYear()+parseInt(years);
    
    var amt=interest;
    var result=document.getElementById("result");
    result.innerHTML="If you deposit "+p+",<br> at an interest rate of "+r+"%. <br>You will receive an amount of " +amt+",<br>in the year"+year;

    function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
    }

 
