import { renderEditVisitorRegisterForm } from "../../components/forms/add-visitor-form.js";
(async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const visitorId = urlParams.get("id");

  await renderEditVisitorRegisterForm("visitorRegisterFormContainer", visitorId);
})();
