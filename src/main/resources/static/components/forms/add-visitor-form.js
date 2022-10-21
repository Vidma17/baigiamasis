import {
  getVisitorRegisterById,
  saveVisitorRegister,
  updateVisitorRegister,
} from "../../commons/requests.js";

let formParentDivId = undefined;

const handleVisitorRegisterFormSubmit = async (form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    await submitVisitorRegister(
      form.visitorName.value,
      form.visitorSurname.value,
      form.visitorEmail.value,
      form.visitorBirthday.value
    );
    window.location.replace("../../pages/visitors/visitors.html");
  });
};

const handleEditVisitorFormSubmit = async (form, visitorId) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    await editVisitorRegister(
      form.visitorName.value,
      form.visitorSurname.value,
      form.visitorEmail.value,
      form.visitorBirthday.value,
      visitorId
    );
    window.location.replace("../../pages/visitors/visitors.html");
  });
};

const editVisitorRegister = async (visitorName, visitorSurname, visitorEmail, visitorBirthday, visitorId) => {
  const visitor = { visitorName, visitorSurname, visitorEmail, visitorBirthday };
  await updateVisitorRegister(visitor, visitorId);
};

const submitVisitorRegister = async (visitorName, visitorSurname, visitorEmail, visitorBirthday) => {
  const visitor = { visitorName, visitorSurname, visitorEmail, visitorBirthday };
  await saveVisitorRegister(visitor);
};

const renderInputField = (form, name, id, defaultValue) => {
  const div = document.createElement("div");
  div.className = "mb-3";

  const label = document.createElement("label");
  label.for = id;
  label.innerText = name;

  const input = document.createElement("input");
  input.type = "text";
  input.name = id;
  input.id = id;
  input.className = "form-control";

  if (defaultValue) {
    input.value = defaultValue;
  }

  div.append(label, input);
  form.appendChild(div);
};

const renderSaveButton = (form) => {
  const div = document.createElement("div");
  div.className = "actions";

  const button = document.createElement("button");
  button.type = "submit";
  button.className = "btn btn-primary";
  button.innerText = "Išsaugoti";

  div.appendChild(button);
  form.appendChild(div);
};

const renderEditButtons = (form) => {
  const div = document.createElement("div");
  div.className = "actions";

  const saveButton = document.createElement("button");
  saveButton.type = "submit";
  saveButton.className = "btn btn-success";
  saveButton.innerText = "Išsaugoti";

  const cancelButton = document.createElement("button");
  cancelButton.type = "submit";
  cancelButton.className = "btn btn-danger";
  cancelButton.innerText = "Cancel";
  cancelButton.addEventListener("click", () =>
    window.location.replace("../../pages/visitors/visitors.html")
  );

  div.append(saveButton, cancelButton);
  form.appendChild(div);
};

export const renderSaveVisitorRegisterForm = async (targetId) => {
  formParentDivId = targetId;
  const form = document.createElement("form");
  form.id = "visitorRegisterForm";

  renderInputField(form, "Vardas", "visitorName");
  renderInputField(form, "Pavardė", "visitorSurname");
  renderInputField(form, "El. paštas", "visitorEmail");
  renderInputField(form, "Gimimo data", "visitorBirthday");
  renderSaveButton(form);

  await handleVisitorRegisterFormSubmit(form);
  document.getElementById(formParentDivId).appendChild(form);
};

export const renderEditVisitorRegisterForm = async (targetId, visitorId) => {
  formParentDivId = targetId;
  const form = document.createElement("form");
  form.id = "visitorRegisterForm";

  const visitor = await getVisitorRegisterById(visitorId);

  renderInputField(form, "Vardas", "visitorName", visitor.visitorName);
  renderInputField(form, "Pavardė", "visitorSurname", visitor.visitorSurname);
  renderInputField(form, "El. paštas", "visitorEmail", visitor.visitorEmail);
  renderInputField(form, "Gimimo data", "visitorBirthday", visitor.visitorBirthday);
  renderEditButtons(form);

  await handleEditVisitorFormSubmit(form, visitorId);
  document.getElementById(formParentDivId).appendChild(form);
};
