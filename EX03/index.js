const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

function ThuNhapChiuThue(a, b) {
    return (a - 4000000 - b * 1600000);
}

function ThueThuNhapCaNhan(num) {
    var total = 0;
    if (num <= 60000000) {
        total = num * 0.05;
    }
    else if (num > 60000000 && num <= 120000000) {
        total = num * 0.1;
    }
    else if (num > 120000000 && num <= 210000000) {
        total = num * 0.15;
    }
    else if (num > 210000000 && num <= 384000000) {
        total = num * 0.2;
    }
    else if (num > 384000000 && num <= 624000000) {
        total = num * 0.25;
    }
    else if (num > 624000000 && num <= 960000000) {
        total = num * 0.3;
    }
    else if (num > 960000000) {
        total = num * 0.35
    }
    return total;
}


document.getElementById("btn").onclick = function () {
    var names = document.getElementById("name").value;
    var tongthunhap = +document.getElementById("thunhap").value;
    var people = +document.getElementById("songuoi").value;
    var ThuNhapChiuThue1 = ThuNhapChiuThue(tongthunhap, people);
    var ThueThuNhapCaNhan1 = ThueThuNhapCaNhan(ThuNhapChiuThue1);
    document.getElementById("result1").innerHTML = names;
    document.getElementById("result2").innerHTML = VND.format(ThueThuNhapCaNhan1);
}