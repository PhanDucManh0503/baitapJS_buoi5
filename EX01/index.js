
function XetKhuVuc(area) {
    if (area === "A") {
        return 2;
    }
    else if (area === "B") {
        return 1;
    }
    else if (area === "C") {
        return 0.5;
    }
    else {
        return 0;
    }
}

function XetDoiTuong(DT) {
    if (DT === "1") {
        return 2.5;
    }
    else if (DT === "2") {
        return 1.5;
    }
    else if (DT === "3") {
        return 1
    }
    else {
        return 0;
    }
}

function TinhTongBaMon(a, b, c, d, e) {
    return a + b + c + d + e;
}


document.getElementById("btn").onclick = function () {
    var mon1 = +document.getElementById("diem1").value;
    var mon2 = +document.getElementById("diem2").value;
    var mon3 = +document.getElementById("diem3").value;
    var area = +XetKhuVuc(document.getElementById("area").value);
    var DT = +XetDoiTuong(document.getElementById("DT").value);
    var DiemChuan = +document.getElementById("diemchuan").value;

    // console.log(area);
    // console.log(DT);

    if (mon1 === 0 || mon2 === 0 || mon3 === 0) {
        document.getElementById("result").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
    }
    else {
        var total = TinhTongBaMon(mon1, mon2, mon3, area, DT);
        if (total >= DiemChuan) {
            document.getElementById("result").innerHTML = "Bạn đã đậu. Tổng điểm: " + total;
        }
        else {
            document.getElementById("result").innerHTML = "Bạn đã rớt. Tổng điểm: " + total;
        }
    }

}