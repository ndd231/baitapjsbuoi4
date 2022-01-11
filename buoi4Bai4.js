function phanLoaiTamGiac() {
  var canhATxt = document.getElementById("canhA").value * 1;
  var canhBTxt = document.getElementById("canhB").value * 1;
  var canhCTxt = document.getElementById("canhC").value * 1;
  if (canhATxt === canhBTxt && canhATxt != canhCTxt) {
    console.log("Đây là tam giác cân");
    document.getElementById("xuatKetQuaBai4").innerText = "Đây là tam giác cân";
  } else if (
    canhATxt === canhBTxt &&
    canhATxt === canhCTxt &&
    canhBTxt === canhCTxt
  ) {
    console.log("Đây là tam giác đều");
    document.getElementById("xuatKetQuaBai4").innerText = "Đây là tam giác đều";
  } else {
    console.log("Đây là tam giác vuông");
    document.getElementById("xuatKetQuaBai4").innerText =
      "Đây là tam giác vuông";
  }
}
