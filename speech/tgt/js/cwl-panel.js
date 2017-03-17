var addButton = document.getElementById("addButton");
var addButtonText = document.getElementById("addButtonText");
var set = "_added_";
var offerId;

function setInitButtonState(offerID) {
    this.offerId = offerID;

    if (isAdded()) {
        offerAddedState();
    } else {
        offerCanBeAddedState();
    }

    addButton.onclick = function() {
        toggleButtonState();
    };
}

function isAdded() {
    if (localStorage.getItem(offerId) === set) {
        return true;
    } else {
        return false;
    }
}

function offerAddedState() {
    addButtonText.innerHTML = "Added!";
    addButton.style.backgroundColor = "green";
    localStorage.setItem(offerId, set);
}

function offerCanBeAddedState() {
    addButtonText.innerHTML = "+ Add";
    addButton.style.backgroundColor = "red";
    localStorage.removeItem(offerId);
}

function toggleButtonState() {
    if (!isAdded()) {
        offerAddedState();
    } else {
        offerCanBeAddedState();
    }
}

function setPanelData(offerId, value, title, exp, subtitle, excl) {
    document.getElementById("discount").innerHTML = value;
    document.getElementById("offer-title").innerHTML = title;
    document.getElementById("expiration").innerHTML = exp;
    document.getElementById("offer-subtitle").innerHTML = subtitle;
    document.getElementById("offer-exclusion").innerHTML = excl;

    document.getElementById("loading").style.display = "none";
    document.getElementById("content").style.display = "block";

    setInitButtonState(offerId);
}

function setPanelDataByObject(obj){
    setPanelData(obj.offerId, obj.value, obj.title, obj.exp, obj.subtitle, obj.excl);
}
