const apiUrl = process.env.REACT_APP_API_URL;
export const fetchData = async (data: any) => {
  try {
    const response = await fetch(`${apiUrl}/calculate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Error: ${response.statusText}`);
    }
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
