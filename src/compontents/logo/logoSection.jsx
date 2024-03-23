import React, { useEffect, useState } from "react";
import InputFileUpload from "./uploadBTN";
import axios from "axios";
import { Button } from "@mui/material";
import { Toaster, toast } from "sonner";
import ResponsiveAppBar from "../NavBar/ResponsiveAppBar";
import { btnStyle } from "../styles";
import { auth } from "../../firebase";

const LogoSection = () => {
  const [imagePreview, set_imagePreview] = useState("");

 
  const updateNavigationSection = async () => {
    if (!imagePreview) {
      toast.error("plz complete the section");
      return;
    }
    if (!auth.currentUser) {
      toast.error("Unable to Verify")
      return
    }

    const response = await axios.post(
      "https://decours-dashboard-server.onrender.com/api/v1/uploadLogo",
      {
        logoUrl: imagePreview,
      }
    );

    toast.success(response.data.msg);
  };

  async function getImageUrl() {
    try {
      const response = await axios.get(
        "https://decours-dashboard-server.onrender.com/api/v1/getLogo"
      ); // Replace with your API endpoint

      if (!response.data.data) {
        console.log("no api data");
        return;
      }

      set_imagePreview(response.data.data[0].logoUrl);
    } catch (error) {
      console.error("Error fetching image URL:", error);
      return null;
    }
  }

  useEffect(() => {
    getImageUrl();
  }, []);

  return (
    <div className="section_nav section">
      <ResponsiveAppBar></ResponsiveAppBar>

      <h2>Nanvigation Bar Section</h2>

      <div className="flex-center-center  ">
        <div className="flex-center-center gutterbottom10">
          <div className="imagePreviewDIv gutterbottom10 imagePreviewDiv-white"
          style={{height:"200px", width:"200px"}}>
            <img src={imagePreview} width="200px" />
          </div>

          <div className="gutterbottom10">
            <InputFileUpload
              set_imagePreview={set_imagePreview}
            ></InputFileUpload>
          </div>
        </div>

        <div className="update_section_btn ">
          <Button
            variant="contained"
            onClick={updateNavigationSection}
            sx={btnStyle}
          >
            Apply Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
