function getSelectCompany(id) {
    if (!id) {
        return;
    }
    var radioelm = document.getElementsByName(id);
    for (i = 0; i < radioelm.length;i++){
        if (radioelm[i].checked) {
            alert(radioelm[i].value);
        }
    }
}

function toggleByID(elmId) {
    var elm = document.getElementById(elmId);
    if (elm) {
        (elm.style.display == "") ? elm.style.display = "none" : elm.style.display = "";
    }

}