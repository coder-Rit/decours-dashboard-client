import React from "react";

import ResponsiveAppBar from "../compontents/NavBar/ResponsiveAppBar";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { toast } from "sonner";

const Main = () => {
  let navigate = useNavigate();

  const redirector = (location) => {
    if (!auth.currentUser) {
      toast.warning("Please Sign In");
      return;
    }
    navigate(location)
  };

  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>

      <div className="main-Div">
        <div className="mainDiv">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.1,
              stiffness: 260,
              damping: 20,
            }}
            onClick={() => redirector("/Navigation")}
          >
            Navigation Bar
          </motion.div>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.2,
              stiffness: 260,
              damping: 20,
            }}
            onClick={() => redirector("/Crousal")}
          >
            Crousal
          </motion.div>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.3,
              stiffness: 260,
              damping: 20,
            }}
            onClick={() => redirector("/About")}
          >
            About
          </motion.div>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.4,
              stiffness: 260,
              damping: 20,
            }}
            onClick={() => redirector("/Services")}
          >
            Our Services
          </motion.div>

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.5,
              stiffness: 260,
              damping: 20,
            }}
            onClick={() => redirector("/Work")}
          >
            Our Work
          </motion.div>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.6,
              stiffness: 260,
              damping: 20,
            }}
            onClick={() => redirector("/Reviews")}
          >
            Reviews
          </motion.div>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.7,
              stiffness: 260,
              damping: 20,
            }}
            onClick={() => redirector("/Brands")}
          >
            Brands
          </motion.div>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.8,
              stiffness: 260,
              damping: 20,
            }}
          >
            More+
          </motion.div>
        </div>
      </div>

      <div className="bgVideo-div">
        <video autoPlay loop muted className="bgVideo">
          <source src="./bgVideo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Main;
