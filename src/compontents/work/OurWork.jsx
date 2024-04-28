import React, { useState } from "react";
import InputFileUpload from "../logo/uploadBTN";
import { Button, TextField } from "@mui/material";
import { toast, Toaster } from "sonner";
import axios from "axios";
import ResponsiveAppBar from "../NavBar/ResponsiveAppBar";
import { InputArea } from "../InputFiled";
import { btnStyle } from "../styles";
import { useEffect } from "react";
import { auth } from "../../firebase";

const OurWork = () => {
  const [imagePreview_1, set_imagePreview_1] = useState("");
  const [imagePreview_2, set_imagePreview_2] = useState("");
  const [imagePreview_3, set_imagePreview_3] = useState("");
  const [imagePreview_4, set_imagePreview_4] = useState("");
  const [imagePreview_5, set_imagePreview_5] = useState("");
  const [imagePreview_6, set_imagePreview_6] = useState("");
  const [imagePreview_7, set_imagePreview_7] = useState("");
  const [imagePreview_8, set_imagePreview_8] = useState("");

  const [title_1, set_title_1] = useState("");

  const updateOurWork = async () => {
    if (
      !imagePreview_1 ||
      !imagePreview_2 ||
      !imagePreview_3 ||
      !imagePreview_4 ||
      !imagePreview_5 ||
      !imagePreview_6 ||
      !imagePreview_7 ||
      !imagePreview_8
    ) {
      toast.error("plz complete the section");
      return;
    }

    if (!auth.currentUser) {
      toast.error("Unable to Verify")
      return
    }
    const response = await axios.post(
      "https://decours-dashboard-server-sf8t.onrender.com/api/v1/updateOurWork",
      {
        workTitle: title_1,
        imageUrls: [
          {
            workUrl: imagePreview_1,
          },
          {
            workUrl: imagePreview_2,
          },
          {
            workUrl: imagePreview_3,
          },
          {
            workUrl: imagePreview_4,
          },
          {
            workUrl: imagePreview_5,
          },
          {
            workUrl: imagePreview_6,
          },
          {
            workUrl: imagePreview_7,
          },
          {
            workUrl: imagePreview_8,
          },
        ],
      }
    );

    toast.success(response.data.msg);
  };

  async function getWorkInfo() {
    try {
      const response = await axios.get(
        "https://decours-dashboard-server-sf8t.onrender.com/api/v1/getOurWork"
      ); // Replace with your API endpoint

      if (!response.data.data) {
        console.log("no api data");
        return;
      }

      set_title_1(response.data.data[0].workTitle);

      console.log(response.data.data);
      let info = response.data.data[0].imageUrls[0];
      set_imagePreview_1(info.workUrl);

      info = response.data.data[0].imageUrls[1];
      set_imagePreview_2(info.workUrl);

      info = response.data.data[0].imageUrls[2];
      set_imagePreview_3(info.workUrl);

      info = response.data.data[0].imageUrls[3];
      set_imagePreview_4(info.workUrl);

      info = response.data.data[0].imageUrls[4];
      set_imagePreview_5(info.workUrl);

      info = response.data.data[0].imageUrls[5];
      set_imagePreview_6(info.workUrl);

      info = response.data.data[0].imageUrls[6];
      set_imagePreview_7(info.workUrl);

      info = response.data.data[0].imageUrls[7];
      set_imagePreview_8(info.workUrl);
    } catch (error) {
      console.error("Error fetching image URL:", error);
      return null;
    }
  }

  useEffect(() => {
    getWorkInfo();
  }, []);

  return (
    <div className="section">
      <ResponsiveAppBar></ResponsiveAppBar>
 
      <h2>Our Work Section</h2>

      <div className="flex-center-center gutterbottom10">
        <div className="marginBottom15px">
          <InputArea value={title_1} set_value={set_title_1}></InputArea>
        </div>
        <div className="flex-col-wrap">
          <div className="flex-center-center gutterbottom10">
            <h4>Work 1</h4>
            <div
              className="imagePreviewDIv gutterbottom10"
              style={{ height: "250px", width: "400px" }}
            >
              <img src={imagePreview_1} height="250px" />
            </div>
            <InputFileUpload
              set_imagePreview={set_imagePreview_1}
            ></InputFileUpload>
          </div>
          <div className="flex-center-center gutterbottom10">
            <h4>Work 2</h4>
            <div
              className="imagePreviewDIv gutterbottom10"
              style={{ height: "250px", width: "400px" }}
            >
              <img src={imagePreview_2} height="250px" />
            </div>
            <InputFileUpload
              set_imagePreview={set_imagePreview_2}
            ></InputFileUpload>
          </div>
          <div className="flex-center-center gutterbottom10">
            <h4>Work 3</h4>
            <div
              className="imagePreviewDIv gutterbottom10"
              style={{ height: "250px", width: "400px" }}
            >
              <img src={imagePreview_3} height="250px" />
            </div>
            <InputFileUpload
              set_imagePreview={set_imagePreview_3}
            ></InputFileUpload>
          </div>

          <div className="flex-center-center gutterbottom10">
            <h4>Work 4</h4>
            <div
              className="imagePreviewDIv gutterbottom10"
              style={{ height: "250px", width: "400px" }}
            >
              <img src={imagePreview_4} height="250px" />
            </div>
            <InputFileUpload
              set_imagePreview={set_imagePreview_4}
            ></InputFileUpload>
          </div>

          <div className="flex-center-center gutterbottom10">
            <h4>Work 5</h4>
            <div
              className="imagePreviewDIv gutterbottom10"
              style={{ height: "250px", width: "400px" }}
            >
              <img src={imagePreview_5} height="250px" />
            </div>
            <InputFileUpload
              set_imagePreview={set_imagePreview_5}
            ></InputFileUpload>
          </div>

          <div className="flex-center-center gutterbottom10">
            <h4>Work 6</h4>
            <div
              className="imagePreviewDIv gutterbottom10"
              style={{ height: "250px", width: "400px" }}
            >
              <img src={imagePreview_6} height="250px" />
            </div>
            <InputFileUpload
              set_imagePreview={set_imagePreview_6}
            ></InputFileUpload>
          </div>
          <div className="flex-center-center gutterbottom10">
            <h4>Work 7</h4>
            <div
              className="imagePreviewDIv gutterbottom10"
              style={{ height: "250px", width: "400px" }}
            >
              <img src={imagePreview_7} height="250px" />
            </div>
            <InputFileUpload
              set_imagePreview={set_imagePreview_7}
            ></InputFileUpload>
          </div>
          <div className="flex-center-center gutterbottom10">
            <h4>Work 8</h4>
            <div
              className="imagePreviewDIv gutterbottom10"
              style={{ height: "250px", width: "400px" }}
            >
              <img src={imagePreview_8} height="250px" />
            </div>
            <InputFileUpload
              set_imagePreview={set_imagePreview_8}
            ></InputFileUpload>
          </div>
        </div>
      </div>

      <div className="update_section_btn flex-center-center gutterbottom10">
        <Button variant="contained" onClick={updateOurWork} sx={btnStyle}>
        Apply Changes
        </Button>
      </div>
    </div>
  );
};

export default OurWork;
