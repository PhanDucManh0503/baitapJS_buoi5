const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


function MyFunction() {
    var x = document.getElementById("customer").value;
    if (x === 'nhadan') {
        document.getElementById("soketnoi").type = "hidden";
    }
    else if (x === 'doanhnghiep') {
        document.getElementById("soketnoi").type = "enable";
    }
}

document.getElementById("btn").onclick = function () {
    var x = document.getElementById("customer").value;
    var makhachhang = document.getElementById("makhachhang").value;
    var total = 0;


    if (x === 'nhadan') {
        var sokenh = +document.getElementById("kenhcaocap").value;
        total = sokenh * 7.5 + 4.5 + 20.5;
    }
    else if (x === 'doanhnghiep') {
        var sokenh = +document.getElementById("kenhcaocap").value;
        var ketnoi = +document.getElementById("soketnoi").value;
        if (ketnoi <= 10) {
            total = 15 + 75 + sokenh * 50;
        }
        else if (ketnoi > 10) {
            total = 15 + 75 + (ketnoi - 10) * 5 + sokenh * 50;
        }
    }

    document.getElementById("result1").innerHTML = makhachhang;
    document.getElementById("result2").innerHTML = USDollar.format(total);
}