function validateForm() {
    var phoneNumber = document.getElementById("number").value;

    var phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phoneNumber)) {
        alert("Vui lòng nhập đúng định dạng số điện thoại gồm 10 số!");
        return false;
    }

    return true;
}