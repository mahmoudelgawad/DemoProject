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