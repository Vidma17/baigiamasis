import { renderVisitorRegisterTable } from "../../components/tables/visitor-table.js";

const handleAddNewVisitor = () => {
  document.getElementById("addNewVisitor").addEventListener("click", () => {
    window.location.replace("../../pages/add-visitor/add-visitor.html");
  });
};

(async () => {
  handleAddNewVisitor();
  await renderVisitorRegisterTable("visitorRegisterContainer");
})();
