export const isAuthenticated = () => {
	// Check if window is defined to ensure we're on the client side
	if (typeof window !== "undefined") {
		return localStorage.getItem("authToken") !== null;
	}
	return false; // In case we're on the server, return false (not authenticated)
};
