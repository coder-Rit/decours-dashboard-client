import React, { useState } from "react";
import InputFileUpload from "../logo/uploadBTN";
import { Button, TextField } from "@mui/material";
import { toast, Toaster } from "sonner";
import axios from "axios";
import ResponsiveAppBar from "../NavBar/ResponsiveAppBar";
import { btnStyle } from "../styles";
import { useEffect } from "react";
import { auth } from "../../firebase";

const Brands = () => {
  const [imagePreview_1, set_imagePreview_1] = useState("");
  const [imagePreview_2, set_imagePreview_2] = useState("");
  const [imagePreview_3, set_imagePreview_3] = useState("");
  const [imagePreview_4, set_imagePreview_4] = useState("");
  const [imagePreview_5, set_imagePreview_5] = useState("");
  const [imagePreview_6, set_imagePreview_6] = useState("");

  const updateBrands = async () => {
    if (!auth.currentUser) {
      toast.error("Unable to Verify")
      return
    }
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

  async function getBrandInfo() {
    try {
      const { data } = await axios.get(
        "https://decours-dashboard-server.onrender.com/api/v1/getBrands"
      ); // Replace with your API endpoint

      if (!data.data) {
        console.log("no api data");
        return;
      }

      let info = data.data[0].brandUrls[0];
      set_imagePreview_1(info.brandUrl);

      info = data.data[0].brandUrls[1];
      set_imagePreview_2(info.brandUrl);

      info = data.data[0].brandUrls[2];
      set_imagePreview_3(info.brandUrl);

      info = data.data[0].brandUrls[3];
      set_imagePreview_4(info.brandUrl);

      info = data.data[0].brandUrls[4];
      set_imagePreview_5(info.brandUrl);

      info = data.data[0].brandUrls[5];
      set_imagePreview_6(info.brandUrl);
    } catch (error) {
      console.error("Error fetching image URL:", error);
      return null;
    }
  }

  useEffect(() => {
    getBrandInfo();
  }, []);

  return (
    <div className="section">
      <ResponsiveAppBar></ResponsiveAppBar>
 
      <h2>Brand Section</h2>

      <div className="flex-col-wrap">
        <div className="flex-center-center gutterbottom10 flex_reverce">
          <InputFileUpload
            set_imagePreview={set_imagePreview_1}
          ></InputFileUpload>
          <div
            className="imagePreviewDIv gutterbottom10 imagePreviewDiv-white "
            style={{ height: "150px", width: "150px" }}
          >
            <img src={imagePreview_2} width="100px" />
          </div>
          <h4>Brand 1</h4>
        </div>
        <div className="flex-center-center gutterbottom10 flex_reverce">
          <InputFileUpload
            set_imagePreview={set_imagePreview_2}
          ></InputFileUpload>

          <div
            className="imagePreviewDIv gutterbottom10 imagePreviewDiv-white"
            style={{ height: "150px", width: "150px" }}
          >
            <img src={imagePreview_2} width="100px" />
          </div>
          <h4>Brand 2</h4>
        </div>
        <div className="flex-center-center gutterbottom10 flex_reverce">
          <InputFileUpload
            set_imagePreview={set_imagePreview_3}
          ></InputFileUpload>

          <div
            className="imagePreviewDIv gutterbottom10 imagePreviewDiv-white"
            style={{ height: "150px", width: "150px" }}
          >
            <img src={imagePreview_3} width="100px" />
          </div>
          <h4>Brand 3</h4>
        </div>
        <div className="flex-center-center gutterbottom10 flex_reverce">
          <InputFileUpload
            set_imagePreview={set_imagePreview_4}
          ></InputFileUpload>

          <div
            className="imagePreviewDIv gutterbottom10 imagePreviewDiv-white"
            style={{ height: "150px", width: "150px" }}
          >
            <img src={imagePreview_4} width="100px" />
          </div>
          <h4>Brand 4</h4>
        </div>
        <div className="flex-center-center gutterbottom10 flex_reverce">
          <InputFileUpload
            set_imagePreview={set_imagePreview_5}
          ></InputFileUpload>

          <div
            className="imagePreviewDIv gutterbottom10 imagePreviewDiv-white"
            style={{ height: "150px", width: "150px" }}
          >
            <img src={imagePreview_5} width="100px" />
          </div>
          <h4>Brand 5</h4>
        </div>
        <div className="flex-center-center gutterbottom10 flex_reverce">
          <InputFileUpload
            set_imagePreview={set_imagePreview_6}
          ></InputFileUpload>

          <div
            className="imagePreviewDIv gutterbottom10 imagePreviewDiv-white"
            style={{ height: "150px", width: "150px" }}
          >
            <img src={imagePreview_6} width="100px" />
          </div>
          <h4>Brand 6</h4>
        </div>
      </div>

      <div className="update_section_btn flex-center-center gutterbottom10">
        <Button variant="contained" onClick={updateBrands} sx={btnStyle}>
          Apply Changes
        </Button>
      </div>
    </div>
  );
};

export default Brands;
