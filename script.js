function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    result = document.getElementById("result");
    
    
               
    var interest = (p*r*y)/100;


    
    var amt=interest;
    var result=document.getElementById("result");
    result.innerHTML="If you deposit "+p+",<br> at an interest rate of "+r+"%. <br>You will receive an amount of " +amt+",<br>in the year"+year;
}

 
