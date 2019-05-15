$(function() {
var guess= Math.floor(Math.random()*(100))+1;
var countingClick=0;
var attempts=[];
$('form').submit(function() {
var val=$('#guess').val();
if(val>100|| val<1)
{
    alert("Your Number shoud be between 1 and 100");
}
else
{ 
attempts .push(val)
if(Number(val)===guess) {
    $('p').eq(0).text("You Did it");
    $('p').eq(0).css('background-color','green');
}

else if(Number(val)>guess) {
    $('p').eq(0).html ("Go Down<br/>last attempts "+attempts);
    countingClick++;
    }
else{
    $('p').eq(0).html("Go up<br/>last attempts:" +attempts)
        countingClick++;

    }
}
   
   //Restarting new game 
    if (countingClick>=5) {
        alert("You Lost! The Number was "+guess);
        guess=Math.floor(Math.random()*(100))+1;
    $('#guess').val('');
    attempts =[];
        $('p').eq(0).text("");
        countingClick=0;
    }
})

$('button').eq(0).click(function() {
    guess=Math.floor(Math.random()*(100))+1;
    $('#guess').val('');
        $('p').eq(0).text("");
        
attempts =[];
})
})
