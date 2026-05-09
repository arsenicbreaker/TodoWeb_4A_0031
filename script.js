const inputTugas = document.getElementById("inputTugas");
const btntambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");
const tanggal = document.getElementById("inputTanggal");

btntambah.addEventListener("click", function () {
  let teksTugas = inputTugas.value;
  let tanggalTugas = tanggal.value;

  if (teksTugas === "") {
    alert("Data harus dimasukkan!");
    return;
  }

  let listbaru = document.createElement("li");
  let spanbaru = document.createElement("span");
  let btnStatus = document.createElement("button");
  let datebaru = document.createElement("date");

  spanbaru.innerHTML = teksTugas;
  datebaru.innerHTML = tanggalTugas;
  listbaru.appendChild(spanbaru);
  listbaru.appendChild(datebaru);
  daftarTugas.appendChild(listbaru);
  btnStatus.innerHTML = "progress";

  btnStatus.addEventListener("click", function () {
    if (btnStatus.innerHTML === "progress") {
      btnStatus.innerHTML = "done";
    } else {
      btnStatus.innerHTML = "progress";
    }
  });

  listbaru.appendChild(spanbaru);
  listbaru.appendChild(datebaru);
  listbaru.appendChild(btnStatus);
  daftarTugas.appendChild(listbaru);

  const warnabaru = document.querySelectorAll("li");
  warnabaru.forEach((item, index) => {
    if (index % 2 === 0) {
      item.style.color = "red";
    } else {
      item.style.color = "green";
    }
  });

  inputTugas.value = "";
});
