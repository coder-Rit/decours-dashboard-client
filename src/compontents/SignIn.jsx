import React, { useEffect, useState } from "react";
import { auth, Provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Button, Tooltip } from "@mui/material";
import { toast } from "sonner";

const SignIn = () => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, Provider).then((data) => {
      setValue(data.user.email);
      toast.success("Sign In as " + data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      localStorage.clear();
      setValue("");
      toast.success("Sign Out Successful");
      console.log("User logged out successfully");
      // Optionally, you can redirect or perform other actions after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, [localStorage]);

  return (
    <div>
      {value ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Tooltip title={value} placement="bottom-start">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "5px",
                color: "green",
                cursor: "pointer",
              }}
            >
              <VerifiedIcon></VerifiedIcon>
              Varifiled
            </div>
          </Tooltip>
          <Button onClick={handleLogout} style={{ color: "white" }}>
            Log out
          </Button>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          
          }}
        >
          <Button onClick={handleClick} style={{ color: "white",  gap: "10px" }}>
            <img src="./google.png" width="20px" alt="" />
            <span>SignIn With Google</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default SignIn;
