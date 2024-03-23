import React, { useState } from "react";
import InputFileUpload from "../logo/uploadBTN";
import { Button, TextField } from "@mui/material";
import { Toaster, toast } from "sonner";
import axios from "axios";
import ResponsiveAppBar from "../NavBar/ResponsiveAppBar";
import InputFiled, { InputArea } from "../InputFiled";
import { useEffect } from "react";
import { btnStyle } from "../styles";
import { auth } from "../../firebase";

const Carousel = () => {
  const [imagePreview_1, set_imagePreview_1] = useState("");
  const [imagePreview_2, set_imagePreview_2] = useState("");
  const [imagePreview_3, set_imagePreview_3] = useState("");

  const [title_1, set_title_1] = useState("");
  const [title_2, set_title_2] = useState("");
  const [title_3, set_title_3] = useState("");

  const [discript_1, set_discript_1] = useState("");
  const [discript_2, set_discript_2] = useState("");
  const [discript_3, set_discript_3] = useState("");

  const updateCarousel = async () => {
    if (!imagePreview_1 || !imagePreview_2 || !imagePreview_3) {
      toast.error("plz complete the section");
      return;
    }

    if (!auth.currentUser) {
      toast.error("Unable to Verify")
      return
    }

    const response = await axios.post(
      "https://decours-dashboard-server.onrender.com/api/v1/updateCarousel",
      [
        {
          coursalUrl: imagePreview_1,
          title: title_1,
          discript: discript_1,
        },
        {
          coursalUrl: imagePreview_2,
          title: title_2,
          discript: discript_2,
        },
        {
          coursalUrl: imagePreview_3,
          title: title_3,
          discript: discript_3,
        },
      ]
    );

    toast.success(response.data.msg);
  };

  async function getCrousalInfo() {
    try {
      const response = await axios.get(
        "https://decours-dashboard-server.onrender.com/api/v1/getCarousel"
      ); // Replace with your API endpoint

      if (!response.data.data) {
        console.log("no api data");
        return;
      }

      let info = response.data.data[0].data[0];
      set_imagePreview_1(info.coursalUrl);
      set_title_1(info.title);
      set_discript_1(info.discript);

      info = response.data.data[0].data[1];
      set_imagePreview_2(info.coursalUrl);
      set_title_2(info.title);
      set_discript_2(info.discript);

      info = response.data.data[0].data[2];
      set_imagePreview_3(info.coursalUrl);
      set_title_3(info.title);
      set_discript_3(info.discript);
    } catch (error) {
      console.error("Error fetching image URL:", error);
      return null;
    }
  }

  useEffect(() => {
    getCrousalInfo();
  }, []);

  return (
    <div className="section">
      <ResponsiveAppBar></ResponsiveAppBar>
 
      <h2>Crousal Section Section</h2>

      <div className="flex-col-wrap">
        <div className="flex-center-center gutterbottom10">
          <div>
            <div className="flex-center-center gutterbottom10">
              <h4>Carousel 1</h4>
              <div
                className="imagePreviewDIv gutterbottom10"
                style={{ height: "250px", width: "400px" }}
              >
                <img src={imagePreview_1} width="350px" />
              </div>
              <InputFileUpload
                set_imagePreview={set_imagePreview_1}
              ></InputFileUpload>
            </div>
          </div>

          <div className="marginBottom15px">
            <InputFiled value={title_1} set_value={set_title_1}></InputFiled>
            <InputArea
              value={discript_1}
              set_value={set_discript_1}
            ></InputArea>
          </div>
        </div>
        <div className="flex-center-center gutterbottom10">
          <div>
            <div className="flex-center-center gutterbottom10">
              <h4>Carousel 2</h4>
              <div
                className="imagePreviewDIv gutterbottom10"
                style={{ height: "250px", width: "400px" }}
              >
                <img src={imagePreview_2} width="350px" />
              </div>
              <InputFileUpload
                set_imagePreview={set_imagePreview_2}
              ></InputFileUpload>
            </div>
          </div>

          <div className="marginBottom15px">
            <InputFiled value={title_2} set_value={set_title_2}></InputFiled>
            <InputArea
              value={discript_2}
              set_value={set_discript_2}
            ></InputArea>
          </div>
        </div>

        <div className="flex-center-center gutterbottom10">
          <div>
            <div className="flex-center-center gutterbottom10">
              <h4>Carousel 3</h4>
              <div
                className="imagePreviewDIv gutterbottom10"
                style={{ height: "250px", width: "400px" }}
              >
                <img src={imagePreview_3} width="350px" />
              </div>
              <InputFileUpload
                set_imagePreview={set_imagePreview_3}
              ></InputFileUpload>
            </div>
          </div>

          <div className="marginBottom15px">
            <InputFiled value={title_3} set_value={set_title_3}></InputFiled>
            <InputArea
              value={discript_3}
              set_value={set_discript_3}
            ></InputArea>
          </div>
        </div>
      </div>

      <div className="update_section_btn flex-center-center">
        <Button variant="contained" onClick={updateCarousel} sx={btnStyle}>
        Apply Changes
        </Button>
      </div>
    </div>
  );
};

export default Carousel;
