var zenpream = document.getElementById("zen-preamble");
zenpream.addEventListener("click", function() {
    this.classList.toggle("preamble-active");
});

var zenexplan = document.getElementById("zen-explanation");
zenexplan.addEventListener("click", function() {
    this.classList.toggle("explanation-active");
});

var zenpartic = document.getElementById("zen-participation");
zenpartic.addEventListener("click", function() {
    this.classList.toggle("participation-active");
});

var zenbenef = document.getElementById("zen-benefits");
zenbenef.addEventListener("click", function() {
    this.classList.toggle("benefits-active");
});

var zenreq = document.getElementById("zen-requirements");
zenreq.addEventListener("click", function() {
    this.classList.toggle("requirements-active");
});

var designselect = document.getElementById("design-selection");
var hamburger = document.getElementsByClassName("sidebar")[0];
hamburger.addEventListener("click", function() {
    this.classList.toggle("hamburger-active");
    designselect.classList.toggle("design-selection-active");
});

