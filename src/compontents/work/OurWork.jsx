import React, { useState } from "react";
import InputFileUpload from "../logo/uploadBTN";
import { Button, TextField } from "@mui/material";
import { toast } from "sonner";
import axios from "axios";

const OurWork = () => {
  const [imagePreview_1, set_imagePreview_1] = useState("");
  const [imagePreview_2, set_imagePreview_2] = useState("");
  const [imagePreview_3, set_imagePreview_3] = useState("");
  const [imagePreview_4, set_imagePreview_4] = useState("");

  const [title_1, set_title_1] = useState("");

  const updateOurWork = async () => {
    if (
      !imagePreview_1 ||
      !imagePreview_2 ||
      !imagePreview_3 ||
      !imagePreview_4
    ) {
      toast.error("plz complete the section");
      return;
    }

    const response = await axios.post(
      "https://decours-dashboard-server.onrender.com/api/v1/updateOurWork",
      {
        workTitle: title_1,
        imageUrls: [
          {
            workUrls: imagePreview_1,
          },
          {
            workUrls: imagePreview_2,
          },
          {
            workUrls: imagePreview_3,
          },
          {
            workUrls: imagePreview_4,
          },
        ],
      }
    );

    toast.success(response.data.msg);
  };

  return (
    <div className="section">
      <h2>5. Our Work Section</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div className="marginBottom15px">
          <TextField
            id="outlined-basic"
            label="Discription"
            variant="outlined"
            multiline
            rows={4}
            sx={{ width: "100%", maxWidth: "400px" }}
            value={title_1}
            onChange={(e) => set_title_1(e.target.value)}
          />
        </div>
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
      </div>

      <div className="update_section_btn">
        <Button variant="contained" onClick={updateOurWork}>
          Update Our Work Section
        </Button>
      </div>
    </div>
  );
};

export default OurWork;
