import {
  getAllVisitorRegisters,
  updateVisitorRegister,
  deleteVisitorRegisterById,
} from "../../commons/requests.js";

let tableParentDivId = undefined;

export const renderVisitorRegisterTable = async (targetId) => {
  tableParentDivId = targetId;
  const visitorRegisters = await getAllVisitorRegisters();
  if (document.getElementById("visitorRegisterTable")) {
    document.getElementById("visitorRegisterTable").remove();
  }
  const table = document.createElement("table");
  table.id = "visitorRegisterTable";
  table.className = "table table-striped";

  renderVisitorRegisterTableHeaders(table);
  const tbody = document.createElement("tbody");
  visitorRegisters.forEach((visitor) => {
    renderVisitorRegisterTableRow(tbody, visitor);
  });

  table.appendChild(tbody);
  document.getElementById(tableParentDivId).appendChild(table);
};

const renderTableCell = (innerText, className) => {
  const td = document.createElement("td");
  if (innerText) {
    td.innerText = innerText;
  }
  if (className) {
    td.className = className;
  }
  return td;
};

const renderTableHeader = (innerText) => {
  const th = document.createElement("th");
  th.innerText = innerText;
  return th;
};

const renderActionButtons = (actionsCell, id) => {
  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.className = "btn btn-warning editButton";
  editButton.addEventListener("click", () => {
    handleEdit(id);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.className = "btn btn-danger deleteButton";
  deleteButton.addEventListener("click", () => {
    handleDelete(id);
  });

  actionsCell.append(editButton, deleteButton);
};

const handleEdit2 = async (id) => {
  window.location.replace(`/pages/visitor-edit/visitor-edit.html?id=${id}`);
};

const handleEdit = async (id) => {
  const tr = document.getElementById(`visitor-${id}`);

  const visitorNameCell = tr.querySelector(".visitorNameCell");
  const visitorNameInput = document.createElement("input");
  visitorNameInput.type = "text";
  visitorNameInput.value = visitorNameCell.innerText;
  visitorNameCell.innerText = "";
  visitorNameCell.appendChild(visitorNameInput);

  const visitorSurnameCell = tr.querySelector(".visitorSurnameCell");
  const visitorSurnameInput = document.createElement("input");
  visitorSurnameInput.type = "text";
  visitorSurnameInput.value = visitorSurnameCell.innerText;
  visitorSurnameCell.innerText = "";
  visitorSurnameCell.appendChild(visitorSurnameInput);

  const visitorEmailCell = tr.querySelector(".visitorEmailCell");
  const visitorEmailInput = document.createElement("input");
  visitorEmailInput.type = "text";
  visitorEmailInput.value = visitorEmailCell.innerText;
  visitorEmailCell.innerText = "";
  visitorEmailCell.appendChild(visitorEmailInput);

  const visitorBirthdayCell = tr.querySelector(".visitorBirthdayCell");
  const visitorBirthdayInput = document.createElement("input");
  visitorBirthdayInput.type = "text";
  visitorBirthdayInput.value = visitorBirthdayCell.innerText;
  visitorBirthdayCell.innerText = "";
  visitorBirthdayCell.appendChild(visitorBirthdayInput);

  const actionsCell = tr.querySelector(".actionsCell");
  actionsCell.querySelector(".editButton").remove();
  actionsCell.querySelector(".deleteButton").remove();

  const saveButton = document.createElement("button");
  saveButton.innerText = "Save";
  saveButton.className = "btn btn-success saveButton";
  saveButton.addEventListener("click", () => {
    handleUpdate(id);
  });

  const cancelButton = document.createElement("button");
  cancelButton.innerText = "Cancel";
  cancelButton.className = "btn btn-danger cancelButton";
  cancelButton.addEventListener("click", () => {
    window.location.reload();
  });

  actionsCell.append(saveButton, cancelButton);
};

const handleUpdate = async (id) => {
  const tr = document.getElementById(`visitor-${id}`);
  const visitorNameCell = tr.querySelector(".visitorNameCell");
  const visitorNameInput = visitorNameCell.querySelector("input");

  const visitorSurnameCell = tr.querySelector(".visitorSurnameCell");
  const visitorSurnameInput = visitorSurnameCell.querySelector("input");

  const visitorEmailCell = tr.querySelector(".visitorEmailCell");
  const visitorEmailInput = visitorEmailCell.querySelector("input");

  const visitorBirthdayCell = tr.querySelector(".visitorBirthdayCell");
  const visitorBirthdayInput = visitorBirthdayCell.querySelector("input");

  const visitorRegister = {
    visitorName: visitorNameInput.value,
    visitorSurname: visitorSurnameInput.value,
    visitorEmail: visitorEmailInput.value,
    visitorBirthday: visitorBirthdayInput.value,
  };

  await updateVisitorRegister(visitorRegister, id);
  await renderVisitorRegisterTable(tableParentDivId);
};

const handleDelete = async (id) => {
  await deleteVisitorRegisterById(id);
  await renderVisitorRegisterTable(tableParentDivId);
};

const renderVisitorRegisterTableRow = (tbody, visitor) => {
  const tr = document.createElement("tr");
  tr.id = `visitor-${visitor.id}`;
  const visitorNameCell = renderTableCell(visitor.visitorName, "visitorNameCell");
  const visitorSurnameCell = renderTableCell(visitor.visitorSurname, "visitorSurnameCell");
  const visitorEmailCell = renderTableCell(visitor.visitorEmail, "visitorEmailCell");
  const visitorBirthdayCell = renderTableCell(visitor.visitorBirthday, "visitorBirthdayCell");
  const actionsCell = renderTableCell(undefined, "actionsCell");
  renderActionButtons(actionsCell, visitor.id);

  tr.append(visitorNameCell, visitorSurnameCell, visitorEmailCell, visitorBirthdayCell, actionsCell);

  tbody.appendChild(tr);
};

const renderVisitorRegisterTableHeaders = (table) => {
  const tr = document.createElement("tr");
  const thead = document.createElement("thead");
  tr.appendChild(thead);
  const visitorNameTh = renderTableHeader("Vardas");
  const visitorSurnameTh = renderTableHeader("Pavardė");
  const visitorEmailTh = renderTableHeader("El. paštas");
  const visitorBirthdayTh = renderTableHeader("Gimimo data");
  const actionsTh = renderTableHeader("");

  thead.append(visitorNameTh, visitorSurnameTh, visitorEmailTh, visitorBirthdayTh, actionsTh);
  table.appendChild(thead);
};
