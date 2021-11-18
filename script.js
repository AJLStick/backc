// AJLStick 2021.
// don't even try it.
var totalClicks = 0, coins = 10, earn = 1, earnCost = 150, autoEarn = 1, autoCost = 500, rank = "hobo", cheats = 0;


document.getElementById('coins').innerHTML = "<font color=orange><b>«C:</b></font>" + coins;
document.getElementById('rank').innerHTML = "rank: " + rank;

document.getElementById('coinsSec').innerHTML = "<font color=yellow><b>«C</b></font>" + autoEarn + "/sec";

document.getElementById('coinsClick').innerHTML = "<font color=lime><b>«C</b></font>" + earn + "/click";

function between(x, min, max) {
  return x >= min && x <= max;
}
//cycle:
setInterval(auto, 1000);
function auto(){
   coins = coins + autoEarn;
document.getElementById('coins').innerHTML = "<font color=orange><b>«C:</b></font>" + coins;
document.getElementById('buyEarn').innerHTML = "EARN x 2 [" + earnCost + "]";
document.getElementById('buyAuto').innerHTML = "AUTO x 2 [" + autoCost + "]";
}

//cycle end.
function gain(){
   totalClicks = totalClicks + 1;
   coins = coins + earn;
document.getElementById('coins').innerHTML = "<font color=orange><b>«C:</b></font>" + coins;
document.getElementById('rank').innerHTML = "rank: " + rank;
};


function buyEarnFunc(){
if(coins >= earnCost){
coins = coins - earnCost;
earn = Math.round(earn * 1.9);
earnCost = Math.round(earnCost * 1.9);
document.getElementById('coinsClick').innerHTML = "<font color=lime><b>«C</b></font>" + earn + "/click";
document.getElementById('coins').innerHTML = "<font color=orange><b>«C:</b></font>" + coins;
document.getElementById('buyEarn').innerHTML = "EARN x 2 [" + earnCost + "]";
    }
}


function buyAutoFunc(){
if(coins >= autoCost){
coins = coins - autoCost;
autoEarn = autoEarn * 2;
autoCost = autoCost * 2;
document.getElementById('coinsSec').innerHTML = "<font color=yellow><b>«C</b></font>" + autoEarn + "/sec";
document.getElementById('coins').innerHTML = "<font color=orange><b>«C:</b></font>" + coins;
document.getElementById('buyAuto').innerHTML = "AUTO x 2 [" + autoCost + "]";
    }
}







setInterval(show, 100);
function show(){
  document.getElementById('rank').innerHTML = "rank: " + rank;
if(between(coins, 100, 999)){
rank = "hundredaire";
} else if (between(coins, 1000, 9999)){
rank = "almost moderately wealthy";
} else if (between(coins, 10000, 99999)){
rank = "moderately wealthy";
} else if (between(coins, 100000, 999999)){
rank = "rich";
  } 
}


