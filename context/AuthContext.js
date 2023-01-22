import { createContext, useState } from "react";
const AuthContext = createContext();
import { useRouter } from "next/router";
// import { handleError } from "lib/helper";
import { toast } from "react-toastify";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const login = async ({ email, password }) => {
    console.log(email, password);
  };
  const logout = async ({ email, password }) => {
    console.log(email, password);
  };
  const handleError = (message) => {
    const errors = [];
    Object.keys(message).map((key) => {
      message[key].map((e) => {
        // errors.push(e);
        toast.error(e);
      });
    });
    return;
    // errors.join();
  };
  const register = async (user) => {
    setLoading(true);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();

    if (res.ok) {
      setLoading(false);
      router.push("/user/dashboard");
    } else {
      // setError(handleError(data.message));
      toast.error(handleError(data.message));
      console.log(data.message);
      setLoading(false);
    }

    console.log(data);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
