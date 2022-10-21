const API_BASE_URL = "http://localhost:8080";

export const getAllVisitorRegisters = async () => {
  const response = await fetch(`${API_BASE_URL}/visitor-registration`);
  const visitorRegisters = await response.json();
  return visitorRegisters;
};

export const getVisitorRegisterById = async (visitorId) => {
  const response = await fetch(`${API_BASE_URL}/visitor-registration/${visitorId}`);
  const visitorRegister = await response.json();
  return visitorRegister;
};

export const updateVisitorRegister = async (visitor, id) => {
  await fetch(`${API_BASE_URL}/visitor-registration/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(visitor),
  });

  alert(`[Visitor ${id}] successfully updated`);
};

export const deleteVisitorRegisterById = async (id) => {
  await fetch(`${API_BASE_URL}/visitor-registration/${id}`, {
    method: "DELETE",
  });
  alert(`[Visitor ${id}] successfully deleted`);
};

export const saveVisitorRegister = async (visitor) => {
  await fetch(`${API_BASE_URL}/visitor-registration`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(visitor),
  });
  alert(`Visitor successfully added`);
};
