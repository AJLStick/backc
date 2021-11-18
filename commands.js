/*
so you've found the cheats file.
i can't really stop you, so use all the commands you want.
*/
cheats = 0;
function submitCMD() {
var cmd = document.getElementById('consoleTxt').value;
 if (cmd == "ch") {
cheats = 1;

document.getElementById('output').innerHTML = "cheats activated"; 
 };



if (cheats == 1){
// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/


  if (cmd.startsWith("add ")) {
    adding = Number(cmd.slice(4));
    coins = coins + adding;
document.getElementById('output').innerHTML = "added «C" + adding + ".."; 
  };

  if (cmd.startsWith("subtract ")) {
    taking = Number(cmd.slice(8));
    coins = coins - taking;
document.getElementById('output').innerHTML = "took away «C" + taking + ".."; 
  };
  if (cmd == "reset") {
reset();
  };










3

document.getElementById('consoleTxt').value = '';
cmd = "";

    } //end cheats = 1 cond.
}
