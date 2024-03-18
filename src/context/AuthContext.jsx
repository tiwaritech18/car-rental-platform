import { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";

const AuthContext = createContext();
const USER_DATA = "userdata";

const AuthContextProvider = ({ children }) => {
  const [userRegistrationData, setUserRegistrationData] = useState([]);
  const [isRegister, setIsRegister] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setUserRegistrationData(data);
    setIsRegister(false);
    console.log(localData);
  };
  localStorage.setItem(USER_DATA, JSON.stringify([userRegistrationData]));
  const localData = localStorage.getItem(USER_DATA);

  const context = {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isRegister,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const authcontext = useContext(AuthContext);
  if (!authcontext) {
    throw new Error("useShopContext must be used within a ContextProvider");
  }
  return authcontext;
};

export { AuthContextProvider, useAuthContext };
