// src/api.ts (or wherever you prefer)
const API_BASE_URL = "http://localhost:5000"; // Your backend server URL

async function fetchData(endpoint: string) {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`);
  if (!response.ok) {
    throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
  }
  return response.json();
}

async function postData(endpoint: string, data: any) {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || `Error posting to ${endpoint}: ${response.statusText}`);
  }
  return response.json();
}

async function putData(endpoint: string, id: number, data: any) {
  const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || `Error updating ${endpoint} ID ${id}: ${response.statusText}`);
  }
  return response.json();
}

async function deleteData(endpoint: string, id: number) {
  const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || `Error deleting ${endpoint} ID ${id}: ${response.statusText}`);
  }
  return response.json();
}

export { fetchData, postData, putData, deleteData };