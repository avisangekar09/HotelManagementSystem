function addHotel(){
     event.preventDefault();
    // let name = document.getElementById("hotelName").value;

    // let location = document.getElementById("location").value;

    // let rating = document.getElementById("rating").value;

    // let pool = document.getElementById("pool").checked ? "Yes" : "No";

    // let gym = document.getElementById("gym").checked ? "Yes" : "No";

    // let spa = document.getElementById("spa").checked ? "Yes" : "No";

    let nam = document.getElementById("hotelName");
    let name = nam.value;

    let locatio = document.getElementById("location");
    let location = locatio.value;

    let ratin = document.getElementById("rating");
    let rating = ratin.value;

    let poo = document.getElementById("pool");
    let pool = poo.checked ? "Yes" : "No";

    let gy = document.getElementById("gym");
    let gym = gy.checked ? "Yes" : "No";

    let sp = document.getElementById("spa");
    let spa = sp.checked ? "Yes" : "No";

    let tbody = document.getElementById("hotelList");

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = name;
    
    let td2 = document.createElement("td");
    td2.innerText = location;
    
    let td3 = document.createElement("td");
    td3.innerText = rating;
    
    let td4 = document.createElement("td");
    td4.innerText = pool;
    
    let td5 = document.createElement("td");
    td5.innerText = gym;
    
    let td6 = document.createElement("td");
    td6.innerText = spa;
    
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    tbody.appendChild(tr);

    nam.value = "";
    locatio.value = "";
    ratin.value = "";

    poo.checked = false;
    gy.checked = false;
    sp.checked = false;

    // name = "";
    // location = "";
    // rating = "";

    // pool = false;
    // gym = false;
    // spa = false;
}
