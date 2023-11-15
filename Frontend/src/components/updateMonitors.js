// Update Monitor
const updateMonitor = async (id, newData) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/monitors/${id}`,
      newData
    );
    console.log("Updated monitor:", response.data);
    // Handle success or update UI as needed
  } catch (error) {
    console.error("Error updating monitor:", error);
    // Handle error or show error message to the user
  }
};
