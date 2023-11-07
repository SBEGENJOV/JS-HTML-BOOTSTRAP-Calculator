        var islem;
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : window.event.keyCode;
    if ((charCode > 105 || charCode < 112) && (charCode > 31 && charCode < 57) || charCode==13)
        return true;
    return false;
}
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        islemSonuc();
    }
});

        function islemSonuc() {
            islem = document.getElementById("metin").value;
            if (islem == isNaN) {
                alert("hata işlemini gözden geçir");
            }
            else {
                document.getElementById("metin").value = eval(islem);
            }
        }
        function bir() {
            document.getElementById("metin").value += 1;
        }
        function iki() {
            document.getElementById("metin").value += 2;
        }
        function uc() {
            document.getElementById("metin").value += 3;
        }
        function dort() {
            document.getElementById("metin").value += 4;
        } function bes() {
            document.getElementById("metin").value += 5;
        } function alti() {
            document.getElementById("metin").value += 6;
        } function yedi() {
            document.getElementById("metin").value += 7;
        } function sekiz() {
            document.getElementById("metin").value += 8;
        } function dokuz() {
            document.getElementById("metin").value += 9;
        }
        function sifir() {
            document.getElementById("metin").value += 0;
        }
        function arti() {
            document.getElementById("metin").value += "+";
        }
        function eksi() {
            document.getElementById("metin").value += "-";
        } function carp() {
            document.getElementById("metin").value += "*";
        } function bol() {
            document.getElementById("metin").value += "/";
        }
        function temiz() {
            document.getElementById("metin").value = "";
        }
        