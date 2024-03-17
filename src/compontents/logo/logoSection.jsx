import React, { useEffect, useState } from "react";
import InputFileUpload from "./uploadBTN";
import axios from "axios";
import { Button } from "@mui/material";
import { Toaster, toast } from "sonner";

const LogoSection = () => {
  const [imagePreview, set_imagePreview] = useState("");

  const updateNavigationSection = async () => {
    if (!imagePreview) {
      toast.error("plz complete the section");
      return;
    }

    const response = await axios.post(
      "http://localhost:4000/api/v1/uploadLogo",
      {
        logoUrl: imagePreview,
      }
    );

    toast.success(response.data.msg);
  };

  return (
    <div className="section_nav section">
      <h2>1. Nanvigation Bar Section</h2>
      <div>
        <div>
          <h4>Upload logo</h4>
          <InputFileUpload
            set_imagePreview={set_imagePreview}
          ></InputFileUpload>
        </div>
      </div>
      <div>
        <img src={imagePreview} width="200px" />
      </div>

      <div className="update_section_btn">
        <Button variant="contained" onClick={updateNavigationSection}>
          Update Navigation Bar Section
        </Button>
      </div>
    </div>
  );
};

export default LogoSection;
