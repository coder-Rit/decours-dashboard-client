import React, { useState } from "react";
import InputFileUpload from "../logo/uploadBTN";
import { Button, TextField } from "@mui/material";
import { toast, Toaster } from "sonner";
import axios from "axios";
import ResponsiveAppBar from "../NavBar/ResponsiveAppBar";
import InputFiled from "../InputFiled";
import { useEffect } from "react";
import { btnStyle } from "../styles";
import { auth } from "../../firebase";

const OurService = () => {
  const [imagePreview_1, set_imagePreview_1] = useState("");
  const [imagePreview_2, set_imagePreview_2] = useState("");
  const [imagePreview_3, set_imagePreview_3] = useState("");
  const [imagePreview_4, set_imagePreview_4] = useState("");
  const [imagePreview_5, set_imagePreview_5] = useState("");
  const [imagePreview_6, set_imagePreview_6] = useState("");

  const [title_1, set_title_1] = useState("");
  const [title_2, set_title_2] = useState("");
  const [title_3, set_title_3] = useState("");
  const [title_4, set_title_4] = useState("");
  const [title_5, set_title_5] = useState("");
  const [title_6, set_title_6] = useState("");

  const updateOurService = async () => {
    if (
      !imagePreview_1 ||
      !imagePreview_2 ||
      !imagePreview_3 ||
      !imagePreview_4 ||
      !imagePreview_5 ||
      !imagePreview_6
    ) {
      toast.error("plz complete the section");
      return;
    }
    if (!auth.currentUser) {
      toast.error("Unable to Verify")
      return
    }

    const response = await axios.post(
      "https://decours-dashboard-server.onrender.com/api/v1/updateOurService",
      [
        {
          serviceUrl: imagePreview_1,
          title: title_1,
        },
        {
          serviceUrl: imagePreview_2,
          title: title_2,
        },
        {
          serviceUrl: imagePreview_3,
          title: title_3,
        },
        {
          serviceUrl: imagePreview_4,
          title: title_4,
        },
        {
          serviceUrl: imagePreview_5,
          title: title_5,
        },
        {
          serviceUrl: imagePreview_6,
          title: title_6,
        },
      ]
    );

    toast.success(response.data.msg);
  };


  async function getServiceInfo() {
    try {
      const response = await axios.get(
        "https://decours-dashboard-server.onrender.com/api/v1/getOurService"
      ); // Replace with your API endpoint
      

      if (!response.data.data) {
        console.log("no api data");
        return;
      }
 
        let info = response.data.data[0].data[0];
        set_imagePreview_1(info.serviceUrl);
        set_title_1(info.title);
        
         info = response.data.data[0].data[1];
        set_imagePreview_2(info.serviceUrl);
        set_title_2(info.title);
        
         info = response.data.data[0].data[2];
        set_imagePreview_3(info.serviceUrl);
        set_title_3(info.title);
        
         info = response.data.data[0].data[3];
        set_imagePreview_4(info.serviceUrl);
        set_title_4(info.title);
        
         info = response.data.data[0].data[4];
        set_imagePreview_5(info.serviceUrl);
        set_title_5(info.title);
        
         info = response.data.data[0].data[5];
        set_imagePreview_6(info.serviceUrl);
        set_title_6(info.title);
        
        


    } catch (error) {
      console.error("Error fetching image URL:", error);
      return null;
    }
  }

  useEffect(() => {
    getServiceInfo()
  }, [ ])
  

  return (
    <div className="section">
      <ResponsiveAppBar></ResponsiveAppBar>
 
      <h2>Our Service Section</h2>

      <div className="flex-col-wrap gutterbottom10">
        <div className="flex-center-center gutterbottom10">
          <h4>Service 1</h4>
          <div
            className="imagePreviewDIv gutterbottom10"
            style={{ height: "250px", width: "300px" }}
          >
            <img src={imagePreview_1} height="200px" />
          </div>
          <InputFileUpload
            set_imagePreview={set_imagePreview_1}
          ></InputFileUpload>
          <div className="marginBottom15px">
            <InputFiled value={title_1} set_value={set_title_1}></InputFiled>
          </div>
        </div>
        <div className="flex-center-center gutterbottom10">
          <h4>Service 2</h4>
          <div
            className="imagePreviewDIv gutterbottom10"
            style={{ height: "250px", width: "300px" }}
          >
            <img src={imagePreview_2} height="200px" />
          </div>
          <InputFileUpload
            set_imagePreview={set_imagePreview_2}
          ></InputFileUpload>
          <div className="marginBottom15px">
            <InputFiled value={title_2} set_value={set_title_2}></InputFiled>
          </div>
        </div>
        <div className="flex-center-center gutterbottom10">
          <h4>Service 3</h4>
          <div
            className="imagePreviewDIv gutterbottom10"
            style={{ height: "250px", width: "300px" }}
          >
            <img src={imagePreview_3} height="200px" />
          </div>
          <InputFileUpload
            set_imagePreview={set_imagePreview_3}
          ></InputFileUpload>
          <div className="marginBottom15px">
            <InputFiled value={title_3} set_value={set_title_3}></InputFiled>
          </div>
        </div>
        <div className="flex-center-center gutterbottom10">
          <h4>Service 4</h4>{" "}
          <div
            className="imagePreviewDIv gutterbottom10"
            style={{ height: "250px", width: "300px" }}
          >
            <img src={imagePreview_4} height="200px" />
          </div>
          <InputFileUpload
            set_imagePreview={set_imagePreview_4}
          ></InputFileUpload>
          <div className="marginBottom15px">
            <InputFiled value={title_4} set_value={set_title_4}></InputFiled>
          </div>
        </div>
        <div className="flex-center-center gutterbottom10">
          <h4>Service 5</h4>{" "}
          <div
            className="imagePreviewDIv gutterbottom10"
            style={{ height: "250px", width: "300px" }}
          >
            <img src={imagePreview_5} height="200px" />
          </div>
          <InputFileUpload
            set_imagePreview={set_imagePreview_5}
          ></InputFileUpload>
          <div className="marginBottom15px">
            <InputFiled value={title_5} set_value={set_title_5}></InputFiled>
          </div>
        </div>
        <div className="flex-center-center gutterbottom10">
          <h4>Service 6</h4>
          <div
            className="imagePreviewDIv gutterbottom10"
            style={{ height: "250px", width: "300px" }}
          >
            <img src={imagePreview_6} height="200px" />
          </div>
          <InputFileUpload
            set_imagePreview={set_imagePreview_6}
          ></InputFileUpload>
          <div className="marginBottom15px">
            <InputFiled value={title_6} set_value={set_title_6}></InputFiled>
          </div>
        </div>
      </div>

      <div className="update_section_btn flex-center-center">
        <Button variant="contained" onClick={updateOurService}  sx={btnStyle}>
          Apply Changes
        </Button>
      </div>
    </div>
  );
};

export default OurService;
