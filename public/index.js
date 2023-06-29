var ham = document.getElementById("ham");
var sidebar = document.getElementById("sidebar");

ham.onclick = function()
{
    ham.classList.toggle("hamopen");
    sidebar.classList.toggle("sideopen");
}