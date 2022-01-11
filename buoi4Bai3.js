function locSo() {
  var soNguyen1Txt = document.getElementById("soNguyen1").value * 1;
  var soNguyen2Txt = document.getElementById("soNguyen2").value * 1;
  var soNguyen3Txt = document.getElementById("soNguyen3").value * 1;
  if (soNguyen1Txt / 2 && soNguyen2Txt / 2 && soNguyen3Txt / 2) {
    console.log(
      "Cả 3 số " + soNguyen1Txt + soNguyen2Txt + soNguyen3Txt + "đều là số chẵn"
    );
    document.getElementById("xuatKetQuaBai3").innerText =
      "Cả 3 số đều là số chẵn";
  } else if (soNguyen1Txt / 2 && soNguyen2Txt / 2 && soNguyen3Txt % 2) {
    console.log("2 số " + soNguyen1Txt + soNguyen2Txt + " là số chẵn");
    console.log("Số " + soNguyen3Txt + " là số lẻ");
    document.getElementById("xuatKetQuaBai3").innerText =
      "Có 2 số chẵn và 1 số lẻ";
  } else if (soNguyen1Txt / 2 && soNguyen2Txt % 2 && soNguyen3Txt % 2) {
    console.log("Số " + soNguyen1Txt + " là số chẵn");
    console.log("Số " + soNguyen3Txt + soNguyen2Txt + " là số lẻ");
    document.getElementById("xuatKetQuaBai3").innerText =
      "Có 2 số lẻ và 1 số chẵn";
  } else if (soNguyen1Txt / 2 && soNguyen2Txt / 2 && soNguyen3Txt % 2) {
    console.log("2 số " + soNguyen1Txt + soNguyen2Txt + " là số chẵn");
    console.log("Số " + soNguyen3Txt + " là số lẻ");
    document.getElementById("xuatKetQuaBai3").innerText =
      "Cả 3 số đều là số chẵn";
  } else {
    document.getElementById("xuatKetQuaBai3").innerText =
      "Cả 3 số đều là số lẻ";
  }
}
