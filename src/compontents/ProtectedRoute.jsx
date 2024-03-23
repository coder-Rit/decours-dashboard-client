import React from "react";
import { auth } from "../firebase"; // Import your Firebase authentication instance
import { useEffect } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ comp }) => {
  const isAuthenticated = auth.currentUser !== null;
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("User not Verifed");
      navigate("/");
      
    }
  }, []);

  return isAuthenticated ? comp : null;
};

export default ProtectedRoute;
