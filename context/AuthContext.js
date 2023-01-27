import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { handleError } from "lib/helper";
import { toast } from "react-toastify";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    checkUserLoggedIn();
    console.log(user);
  }, []);

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Login user
  const login = async (user) => {
    setError(null);
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      setLoading(false);
      router.push("/");
    } else {
      setError(handleError(data.message));
      setLoading(false);
    }
  };
  // Email-Reset-Password
  const EmailresetPassword = async ({ email }) => {
    setError(null);
    setLoading(true);

    const res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      setLoading(false);
      router.push({
        pathname: "/user/password-reset",
        query: { type: "sentEmail" },
      });
    } else {
      console.log("errror");
      setError(handleError(data.message));
      setLoading(false);
    }
  };
  // Reset-Password
  const resetPassword = async ({ password, c_password, token,email }) => {
    setError(null);
    setLoading(true);

    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ password, c_password, token,email }),
    });

    const data = await res.json();

    if (res.ok) {
      setLoading(false);
      router.push({
        pathname: "/user/login",
        query: { type: "sentEmail" },
      });
    } else {
      console.log("errror");
      setError(handleError(data.message));
      setLoading(false);
    }
  };

  // Logout user
  const logout = async () => {
    setError(null);

    const res = await fetch("/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const data = await res.json();

    if (res.ok) {
      setUser(null);
      router.push("/user/login");
    } else {
      setError(handleError(data.message));
    }
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
      setUser(data.user);
      router.push("/user/dashboard");
    } else {
      // setError(handleError(data.message));
      toast.error(handleError(data.message));
      console.log(data.message);
      setLoading(false);
    }

    console.log(data);
  };
  // Check if user logged in
  const checkUserLoggedIn = async () => {
    const res = await fetch("/api/auth/me");
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, loading, EmailresetPassword ,resetPassword}}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
