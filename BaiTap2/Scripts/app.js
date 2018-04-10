
var DiemHS=[]
var JSONItems = [];
$.getJSON("Data.json", function (data) {
    JSONItems = data;
    console.log(JSONItems);
});
//Lấy số tín
function TongTinDaHoc() {
    var s = 0;
    for (i = 0 ; i < DiemHS.length; i++) {
        s += DiemHS[i].SoTin;
    }
    return s;
}
function TongTinThuc() {
    var s = 0;
    for (i = 0 ; i < DiemHS.length; i++) {
        if (DiemHS[i].TongDiem > 4)
            s += DiemHS[i].SoTin;
    }
    return s;
}
document.getElementById("TongTinDaHoc").innerHTML = TongTinDaHoc();
document.getElementById("TongTinThuc").innerHTML = TongTinThuc();

//Filter
var check = true;
$("#btnHideShow").click(function () {
    $("#_data").hpaging("newLimit", 100);
    if (check) {
        for (i = 0 ; i < IDchuadat.length; i++) {
            $(document.getElementById(IDchuadat[i])).hide();
        }
        document.getElementById("btnHideShow").value = "Hiện các môn chưa đạt";
        check = false;
    }
    else {
        for (i = 0 ; i < IDchuadat.length; i++) {
            $(document.getElementById(IDchuadat[i])).show();
        }
        document.getElementById("btnHideShow").value = "Ẩn các môn chưa đạt";
        check = true;
    }
});

$("#sel").change(function () {
    $("#_data").hpaging("newLimit", 100);
    if ($('#sel option:selected').val() == 0) {
        $("#_data").hpaging("newLimit", 8);
    } else if ($('#sel option:selected').val() == 1) {
        for (i = 0 ; i < DiemHS.length; i++) {
            if (DiemHS[i].TongDiem < 4 || DiemHS[i].TongDiem >= 6.5) {
                $(document.getElementById(i)).hide();
            }
        }
    } else if ($('#sel option:selected').val() == 2) {
        for (i = 0 ; i < DiemHS.length; i++) {
            if (DiemHS[i].TongDiem < 6.5 || DiemHS[i].TongDiem >= 8) {
                $(document.getElementById(i)).hide();
            }
        }
    } else {
        for (i = 0 ; i < DiemHS.length; i++) {
            if (DiemHS[i].TongDiem < 8) {
                $(document.getElementById(i)).hide();
            }
        }
    }
});

function checkInput(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return false;
    } else
        return true;
}
/* gải phương trình bậc hai*/
function GPTB2(a, b, c) {
    var message = document.getElementById("kq");
    $(".Nghiem").hide();
    if (!checkInput(a, b, c)) {
        message.innerHTML = "Sai dữ liệu đầu vào";
    } else {
        var x1, x2, delta;

        if (a == 0) {
            if (b == 0) {
                if (c == 0) message.innerHTML = "Phương trình vô số nghiệm";
                else message.innerHTML = "Phương trình vô nghiệm";
            }
            else {
                x1 = -b / c;
                message.innerHTML = "Phương trình có 1 nghiệm: " + x1;
            }
        }
        else {
            delta = b * b - 4 * a * c;
            if (delta < 0) message.innerHTML = "Phương trình vô nghiệm ";
            if (delta == 0) {
                x1 = -b / (2 * a);
                message.innerHTML = "Phương trình có nghiệm kep: " + x1;
            }
            if (delta > 0) {
                x1 = (-b + Math.sqrt(delta)) / (2 * a);
                x2 = (-b - Math.sqrt(delta)) / (2 * a);
                message.innerHTML = "Phương trình có 2 nghiệm phân biệt";
                show(x1, x2)
            }
        }
    }
}
function show(a, b) {
    $("#kqx1").attr("disabled", "disabled");
    $("#kqx2").attr("disabled", "disabled");
    var kqx1 = document.getElementById("kqx1");
    var kqx2 = document.getElementById("kqx2");
    kqx1.value = a;
    kqx2.value = b;
    $(".Nghiem").toggle();
}