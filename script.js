function AddRow(){

let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let address = document.getElementById("address").value;
let pincode = document.getElementById("pincode").value;
let gender = document.getElementById("gender").value;
let state = document.getElementById("state").value;
let country = document.getElementById("country").value;

let tr = document.createElement("tr");
let td1 = tr.appendChild(document.createElement("td"))
let td2 = tr.appendChild(document.createElement("td"));
let td3 = tr.appendChild(document.createElement("td"));
let td4 = tr.appendChild(document.createElement("td"));
let td5 = tr.appendChild(document.createElement("td"));
let td6 = tr.appendChild(document.createElement("td"));
let td7 = tr.appendChild(document.createElement("td"));

td1.innerHTML = fname;
td2.innerHTML = lname;
td3.innerHTML = address;
td4.innerHTML = pincode;
td5.innerHTML = gender;
td6.innerHTML = state;
td7.innerHTML = country;

document.getElementById("rww").appendChild(tr);
}
