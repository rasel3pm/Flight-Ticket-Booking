const clName = document.getElementById("name");
const clEmail = document.getElementById("email");
const startFrom = document.getElementById("from");
const endTo = document.getElementById("to");
const sDate = document.getElementById("startDate");
const eDate = document.getElementById("returnDate");
const classType = document.getElementById("class-type");
const adult = document.getElementById("adult");
const child = document.getElementById("child");
const btn = document.getElementById("btn");
var childPrice = 50;
var adultPrice = 200;
btn.addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".client-name").innerHTML = clName.value;
    document.querySelector(".client-email").innerHTML = clEmail.value;
    document.querySelector(".flying-from").innerHTML = startFrom.value;
    document.querySelector(".flying-to").innerHTML = endTo.value;
    document.querySelector(".startDate").innerHTML = sDate.value;
    document.querySelector(".endDate").innerHTML = eDate.value;
    document.querySelector(".className").innerHTML = classType.value;
    document.querySelector(".adult-person").innerHTML = '$' + adult.value * adultPrice;
    document.querySelector(".child-person").innerHTML = '$' + child.value * childPrice;

    //front-end control
    var main = document.querySelector(".booking-form");
    main.style.display = "none"
    var checkOut = document.querySelector(".checkOut");
    checkOut.style.display = "block"

});

//confirm order event
const confirm = document.getElementById("confirm");
confirm.addEventListener("click", function() {
    var checkOut = document.querySelector(".checkOut");
    checkOut.style.display = "none"
    var confirmMessage = document.querySelector(".confirm-message");
    confirmMessage.style.display = "block"
})