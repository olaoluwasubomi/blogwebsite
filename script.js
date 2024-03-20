let one = document.getElementById("menu");
let two = document.getElementById("cancel");
let three = document.getElementById("links")


one.onclick = () =>{
    one.style.display = "none";
    two.style.display = "block";
    three.style.display = "block";
}

two.onclick = () =>{
    one.style.display = "block";
    two.style.display = "none";
    three.style.display = "none"
};