const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

function TinhTienDien(num) {
    var total = 0;
    if (num <= 50) {
        total = num * 500;
    }
    else if (num > 50 && num <= 100) {
        total = 50 * 500 + (num - 50) * 650;
    }
    else if (num > 100 && num <= 200) {
        total = 50 * 500 + 50 * 650 + (num - 100) * 850;
    }
    else if (num > 200 && num <= 350) {
        total = 50 * 500 + 50 * 650 + 100 * 850 + (num - 200) * 1100;
    }
    else if (num > 350) {
        total = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (num - 350) * 1300;
    }
    return total;
}


document.getElementById("btn").onclick = function () {
    var SoDien = +document.getElementById("SoDien").value;
    var total = TinhTienDien(SoDien);
    total = VND.format(total);
    document.getElementById("result").innerHTML = total;
}