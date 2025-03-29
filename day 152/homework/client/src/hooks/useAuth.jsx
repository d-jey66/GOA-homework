const useAuth = () => {
  return localStorage.getItem("authToken") !== null;
};

export default useAuth;
