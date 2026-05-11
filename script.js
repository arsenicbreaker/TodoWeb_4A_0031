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

  listbaru.appendChild(checkboxStatus);
  taskInfo.appendChild(spanbaru);
  taskInfo.appendChild(datebaru);
  listbaru.appendChild(taskInfo);
  listbaru.appendChild(status);
  listbaru.appendChild(btnEdit);
  listbaru.appendChild(btnDelete);

  daftarTugas.appendChild(listbaru);

  checkboxStatus.addEventListener("click", function () {
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

  btnEdit.addEventListener("click", function () {
    let tugasBaru = prompt("Edit tugas:", spanbaru.innerHTML);

    if (tugasBaru !== "") {
      spanbaru.innerHTML = tugasBaru;
    }
  });

  btnDelete.addEventListener("click", function () {
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

  inputTugas.value = "";
  tanggal.value = "";
});
