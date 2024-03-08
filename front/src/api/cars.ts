export const getCars = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/cars");
    if (!response.ok) {
      throw new Error(`HTTP error, status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching cars:");
    throw error;
  }
};
