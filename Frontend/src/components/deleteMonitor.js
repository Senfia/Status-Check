// Delete Monitor
const deleteMonitor = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:5000/monitors/${id}`);
    console.log("Deleted monitor:", response.data);
    // Handle success or update UI as needed
  } catch (error) {
    console.error("Error deleting monitor:", error);
    // Handle error or show error message to the user
  }
};
