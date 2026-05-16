const inputTugas = $("#inputTugas");
const daftarTugas = $("#daftarTugas");
const btntambah = $("#btnTambah");
const tanggal = $("#inputTanggal");

$("#btnTambah").on("click", function () {
  let teksTugas = inputTugas.val();
  let tanggalTugas = tanggal.val();

  if (teksTugas === "") {
    alert("Data harus dimasukkan!");
    return;
  }

  let listbaru = document.createElement("li"); 
  let taskInfo = document.createElement("div"); 
  let spanbaru = document.createElement("span");
  let checkboxStatus = document.createElement("input");
  let status = document.createElement("p");
  let btnDelete = document.createElement("button");
  let btnEdit = document.createElement("button");
  let datebaru = document.createElement("span");

  checkboxStatus.type = "checkbox"; 
  checkboxStatus.className = "task-checkbox";

  taskInfo.className = "task-info";

  spanbaru.innerHTML = teksTugas;
  spanbaru.className = "task-name";

  status.innerHTML = "progress";
  status.className = "status-badge";

  datebaru.innerHTML = tanggalTugas;
  datebaru.className = "task-date";

  btnEdit.innerHTML = "Edit";
  btnEdit.className = "btn-edit";

  btnDelete.innerHTML = "Delete";
  btnDelete.className = "btn-delete";

  listbaru.append(checkboxStatus);
  taskInfo.append(spanbaru);
  taskInfo.append(datebaru);
  listbaru.append(taskInfo);
  listbaru.append(status);
  listbaru.append(btnEdit);
  listbaru.append(btnDelete);

  daftarTugas.append(listbaru);

  $(checkboxStatus).on("click", function () {
    if (checkboxStatus.checked) {
      status.innerHTML = "done";
      status.classList.add("done");
      spanbaru.style.textDecoration = "line-through";
    } else {
      status.innerHTML = "progress";
      status.classList.remove("done");
      spanbaru.style.textDecoration = "none";
    }
  });

  $(btnEdit).on("click", function () {
    let tugasBaru = prompt("Edit tugas:", spanbaru.innerHTML);
    let tanggalBaru = prompt("Edit tanggal:", datebaru.innerHTML);

    if (tugasBaru !== null && tugasBaru !== "") {
      spanbaru.innerHTML = tugasBaru;
    }

    if (tanggalBaru !== null && tanggalBaru !== "") {
      datebaru.innerHTML = tanggalBaru;
    }
  });

  $(btnDelete).on("click", function () {
    let yakin = confirm("Are you sure to delete?");
    if (yakin) {
      daftarTugas.removeChild(listbaru);
    }
  });

  // const warnabaru = document.querySelectorAll("li");
  // warnabaru.forEach((item, index) => {
  //   if (index % 2 === 0) {
  //     item.style.color = "red";
  //   } else {
  //     item.style.color = "green";
  //   }
  // });

  inputTugas.val("");
  tanggal.val("");
});
