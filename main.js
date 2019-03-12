
function welcome() {
    let name = localStorage.getItem("nameinput");
    if (name != null) {

        namepls.style.display = "none";
        welcomeback.style.display = "block";
        document.getElementById("user").innerHTML = `${name}`;
        document.getElementById("namewashere").innerHTML = `${name} was here...`; 
    }
    else {
        namepls.style.display = "block";
    }
}


document.getElementById("btn").onclick = setName;

function setName() {
    let name = document.getElementById("nameinput").value;
    localStorage.setItem("nameinput", name);
    getName();
}


function getName() {
    let name = localStorage.getItem("nameinput");
    hiname.style.display = "block";
    namepls.style.display = "none";
    document.getElementById("username").innerHTML = ` ${name}!`;
}

//localStorage.removeItem("nameinput");


