import React, { useState } from "react";
import InputFileUpload from "../logo/uploadBTN";
import { Button, TextField } from "@mui/material";
import { toast } from "sonner";
import axios from "axios";

const AboutSection = () => {
  const [imagePreview, set_imagePreview] = useState("");
  const [title, set_title] = useState("");
  const [discript, set_discript] = useState("");

  const updateAboutSection = async () => {
    if (!imagePreview || !discript || !title) {
      toast.error("plz complete the section");
      return;
    }

    const response = await axios.post(
      "https://decours-dashboard-server.onrender.com/api/v1/updateAboutSection",
      {
        aboutUrl: imagePreview,
        title: title,
        discript:discript
      }
    );

    toast.success(response.data.msg);
  };

  return (
    <div className="section">
      <h2>2. About Section Section</h2>
      <div>
        <div>
          <h4>About us Image</h4>
          <InputFileUpload
            set_imagePreview={set_imagePreview}
          ></InputFileUpload>
        </div>
      </div>
      <div>
        <img src={imagePreview} width="200px" />
      </div>

      <div className="marginBottom15px">
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          sx={{ width: "100%", maxWidth: "400px" }}
          value={title}
          onChange={(e) => set_title(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          sx={{ width: "100%", maxWidth: "600px" }}
          value={discript}
          onChange={(e) => set_discript(e.target.value)}
        />
      </div>

      <div className="update_section_btn">
        <Button variant="contained" onClick={updateAboutSection}>
          Update About Section
        </Button>
      </div>
    </div>
  );
};

export default AboutSection;
