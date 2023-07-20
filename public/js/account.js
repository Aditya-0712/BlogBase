var ham = document.getElementById("ham");
var sidebar = document.getElementById("sidebar");

ham.onclick = function()
{
    ham.classList.toggle("hamopen");
    sidebar.classList.toggle("sideopen");
}

var linq = document.querySelectorAll(".pctopbar .under a");
var under = document.querySelectorAll(".pctopbar .under div");

linq[0].onmouseover = function()
{
    under[0].style.transform = "translateX(0%)";
}
linq[0].onmouseout = function()
{
    under[0].style.transform = "translateX(-100%)";
}

linq[1].onmouseover = function()
{
    under[1].style.transform = "translateX(0%)";
}
linq[1].onmouseout = function()
{
    under[1].style.transform = "translateX(-100%)";
}

linq[2].onmouseover = function()
{
    under[2].style.transform = "translateX(0%)";
}
linq[2].onmouseout = function()
{
    under[2].style.transform = "translateX(-100%)";
}