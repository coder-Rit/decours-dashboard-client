import React, { useState } from "react";
import InputFileUpload from "../logo/uploadBTN";
import { Button, TextField } from "@mui/material";
import { toast, Toaster } from "sonner";
import axios from "axios";
import ResponsiveAppBar from "../NavBar/ResponsiveAppBar";
import { useEffect } from "react";
import { btnStyle, textBoxStyle } from "../styles";
import InputFiled, { InputArea } from "../InputFiled";
import { auth } from "../../firebase";

const AboutSection = () => {
  const [imagePreview, set_imagePreview] = useState("");
  const [title, set_title] = useState("");
  const [discript, set_discript] = useState("");

  const updateAboutSection = async () => {
    if (!imagePreview || !discript || !title) {
      toast.error("plz complete the section");
      return;
    }

    if (!auth.currentUser) {
      toast.error("Unable to Verify")
      return
    }

    const response = await axios.post(
      "https://decours-dashboard-server.onrender.com/api/v1/updateAboutSection",
      {
        aboutUrl: imagePreview,
        title: title,
        discript: discript,
      }
    );

    toast.success(response.data.msg);
  };

  async function getAboutInfo() {
    try {
      const response = await axios.get(
        "https://decours-dashboard-server.onrender.com/api/v1/getAboutSection"
      ); // Replace with your API endpoint

      if (!response.data.data) {
        console.log("no api data");
        return;
      }

      set_imagePreview(response.data.data[0].aboutUrl);
      set_title(response.data.data[0].title);
      set_discript(response.data.data[0].discript);
    } catch (error) {
      console.error("Error fetching image URL:", error);
      return null;
    }
  }

  useEffect(() => {
    getAboutInfo();
  }, []);

  return (
    <div className="section">
      <ResponsiveAppBar></ResponsiveAppBar>
 
      <h2>About Section Section</h2>
      <div className="flex-center-center gutterbottom10">
        <div
          className="imagePreviewDIv gutterbottom10"
          style={{ height: "250px", width: "400px" }}
        >
          <img src={imagePreview} height="250px" />
        </div>
        <div className="marginBottom15px">
          <InputFileUpload
            set_imagePreview={set_imagePreview}
          ></InputFileUpload>
        </div>

        <div className="marginBottom15px">
          <InputFiled value={title} set_value={set_title}></InputFiled>
          <InputArea value={discript} set_value={set_discript}></InputArea>
        </div>

        <div className="update_section_btn">
          <Button
            variant="contained"
            onClick={updateAboutSection}
            sx={btnStyle}
          >
            Apply Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
