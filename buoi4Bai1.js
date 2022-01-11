function xapSepSo() {
  var soNguyen1El = document.getElementById("soNguyen1").value * 1;
  var soNguyen2El = document.getElementById("soNguyen2").value * 1;
  var soNguyen3El = document.getElementById("soNguyen3").value * 1;
  if (
    soNguyen1El > soNguyen2El &&
    soNguyen1El > soNguyen3El &&
    soNguyen2El > soNguyen3El
  ) {
    console.log(soNguyen3El, soNguyen2El, soNguyen1El);
    document.getElementById("xuatKetQuaBai1").innerText =
      "Dãy số là: " + soNguyen3El + "," + soNguyen2El + "," + soNguyen1El;
  } else if (
    soNguyen1El > soNguyen2El &&
    soNguyen1El > soNguyen3El &&
    soNguyen3El > soNguyen2El
  ) {
    console.log(soNguyen2El, soNguyen3El, soNguyen1El);
    document.getElementById("xuatKetQuaBai1").innerText =
      "Dãy số là: " + soNguyen2El + "," + soNguyen3El + "," + soNguyen1El;
  } else if (
    soNguyen2El > soNguyen1El &&
    soNguyen2El > soNguyen3El &&
    soNguyen1El > soNguyen3El
  ) {
    console.log(soNguyen3El, soNguyen1El, soNguyen2El);
    document.getElementById("xuatKetQuaBai1").innerText =
      "Dãy số là: " + soNguyen3El + "," + soNguyen1El + "," + soNguyen2El;
  } else if (
    soNguyen2El > soNguyen1El &&
    soNguyen2El > soNguyen3El &&
    soNguyen3El > soNguyen1El
  ) {
    console.log(soNguyen1El, soNguyen3El, soNguyen2El);
    document.getElementById("xuatKetQuaBai1").innerText =
      "Dãy số là: " + soNguyen1El + "," + soNguyen3El + "," + soNguyen2El;
  } else if (
    soNguyen3El > soNguyen1El &&
    soNguyen3El > soNguyen2El &&
    soNguyen1El > soNguyen2El
  ) {
    console.log(soNguyen2El, soNguyen1El, soNguyen3El);
    document.getElementById("xuatKetQuaBai1").innerText =
      "Dãy số là: " + soNguyen2El + "," + soNguyen1El + "," + soNguyen3El;
  } else {
    console.log(soNguyen1El, soNguyen2El, soNguyen3El);
    document.getElementById("xuatKetQuaBai1").innerText =
      "Dãy số là: " + soNguyen1El + "," + soNguyen2El + "," + soNguyen3El;
  }
}
