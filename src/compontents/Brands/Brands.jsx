import React, { useState } from "react";
import InputFileUpload from "../logo/uploadBTN";
import { Button, TextField } from "@mui/material";
import { toast } from "sonner";
import axios from "axios";

const Brands = () => {
  const [imagePreview_1, set_imagePreview_1] = useState("");
  const [imagePreview_2, set_imagePreview_2] = useState("");
  const [imagePreview_3, set_imagePreview_3] = useState("");
  const [imagePreview_4, set_imagePreview_4] = useState("");
  const [imagePreview_5, set_imagePreview_5] = useState("");
  const [imagePreview_6, set_imagePreview_6] = useState("");

 
  const updateBrands = async () => {
    

    const response = await axios.post(
      "https://decours-dashboard-server.onrender.com/api/v1/updateBrands",
      {
        brandUrls: [
          {
            brandUrl: imagePreview_1,
          },
          {
            brandUrl: imagePreview_2,
          },
          {
            brandUrl: imagePreview_3,
          },
          {
            brandUrl: imagePreview_4,
          },
          {
            brandUrl: imagePreview_5,
          },
          {
            brandUrl: imagePreview_6,
          },
        ],
      }
    );

    toast.success(response.data.msg);
  };

  return (
    <div className="section">
      <h2>6. Brand Section</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      
        <div style={{ display: "flex", gap: "20px" }}>
          <InputFileUpload
            set_imagePreview={set_imagePreview_1}
          ></InputFileUpload>

          <div>
            <img src={imagePreview_1} height="40px" />
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <InputFileUpload
            set_imagePreview={set_imagePreview_2}
          ></InputFileUpload>

          <div>
            <img src={imagePreview_2} height="40px" />
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <InputFileUpload
            set_imagePreview={set_imagePreview_3}
          ></InputFileUpload>

          <div>
            <img src={imagePreview_3} height="40px" />
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <InputFileUpload
            set_imagePreview={set_imagePreview_4}
          ></InputFileUpload>

          <div>
            <img src={imagePreview_4} height="40px" />
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <InputFileUpload
            set_imagePreview={set_imagePreview_5}
          ></InputFileUpload>

          <div>
            <img src={imagePreview_5} height="40px" />
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <InputFileUpload
            set_imagePreview={set_imagePreview_6}
          ></InputFileUpload>

          <div>
            <img src={imagePreview_6} height="40px" />
          </div>
        </div>
      </div>

      <div className="update_section_btn">
        <Button variant="contained" onClick={updateBrands}>
          Update Brand Section
        </Button>
      </div>
    </div>
  );
};

export default Brands;
