function mouseover(x)
{
    x.style.height="500px";
    x.style.width="450px";
}
function mouseout(x)
{
    x.style.height="200px";
    x.style.width="300px"
}

function clickme(){
    alert("you click the button")
}

var p=document.getElementById("val")
var inp=document.getElementById("inp")
function pressed(a){
    if(a.code=="Enter"){
        p.innerHTML=inp.value;
        inp.value=null
    }
}

var p2=document.getElementById("show")
function show(e){
    var x = e.clientX;
    var y = e.clientY;
    var coor=("Coordinates (" + x +"," + y+ ")" )
    p2.innerHTML=coor;
}

function clearco(){
    document.getElementById("show").innerHTML=" ";
}