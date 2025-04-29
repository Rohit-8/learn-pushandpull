export const fetchToken = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const appId = import.meta.env.VITE_APP_ID;
    const appSecret = import.meta.env.VITE_APP_SECRET;

    try {
      const response = await fetch(`${apiUrl}/api/v1/login-app`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          appId: appId,
          appSecret: appSecret,
        }),
      });
      const result = await response.json();
      if (result.success && result.data.token) {
        return result.data.token;
      } else {
        throw new Error("Failed to fetch token");
      }
    } catch (error) {
      console.error("Error fetching token:", error);
      throw error;
    }
  };