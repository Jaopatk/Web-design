function comparenum(a, b) {
    var A = parseInt(a.value);
    var B = parseInt(b.value);

    if (A > B) {
        document.getElementById("c").value = "A>B";
        document.getElementById("d").value = A - B;
    } else if (B > A) {
        document.getElementById("c").value = "B>A";
        document.getElementById("d").value = B - A;
    } else {
        document.getElementById("c").value = "A=B";
        document.getElementById("d").value = B - A;
    }

}