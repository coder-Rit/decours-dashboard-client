import React, { useState } from "react";
import InputFileUpload from "../logo/uploadBTN";
import { Button, TextField } from "@mui/material";
import { toast } from "sonner";
import axios from "axios";

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

    const response = await axios.post(
      "http://localhost:4000/api/v1/updateOurService",
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

  return (
    <div className="section">
      <h2>4. Our Service Section</h2>
       

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <InputFileUpload
            set_imagePreview={set_imagePreview_1}
          ></InputFileUpload>
          <div className="marginBottom15px">
            <TextField
              id="outlined-basic"
              label="Title_"
              variant="outlined"
              sx={{ width: "100%", maxWidth: "400px", height: "40px" }}
              value={title_1}
              onChange={(e) => set_title_1(e.target.value)}
            />
          </div>
          <div>
            <img src={imagePreview_1} height="40px" />
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <InputFileUpload
            set_imagePreview={set_imagePreview_2}
          ></InputFileUpload>
          <div className="marginBottom15px">
            <TextField
              id="outlined-basic"
              label="Title_"
              variant="outlined"
              sx={{ width: "100%", maxWidth: "400px", height: "40px" }}
              value={title_2}
              onChange={(e) => set_title_2(e.target.value)}
            />
          </div>
          <div>
            <img src={imagePreview_2} height="40px" />
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <InputFileUpload
            set_imagePreview={set_imagePreview_3}
          ></InputFileUpload>
          <div className="marginBottom15px">
            <TextField
              id="outlined-basic"
              label="Title_"
              variant="outlined"
              sx={{ width: "100%", maxWidth: "400px", height: "40px" }}
              value={title_3}
              onChange={(e) => set_title_3(e.target.value)}
            />
          </div>
          <div>
            <img src={imagePreview_3} height="40px" />
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <InputFileUpload
            set_imagePreview={set_imagePreview_4}
          ></InputFileUpload>
          <div className="marginBottom15px">
            <TextField
              id="outlined-basic"
              label="Title_"
              variant="outlined"
              sx={{ width: "100%", maxWidth: "400px", height: "40px" }}
              value={title_4}
              onChange={(e) => set_title_4(e.target.value)}
            />
          </div>
          <div>
            <img src={imagePreview_4} height="40px" />
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <InputFileUpload
            set_imagePreview={set_imagePreview_5}
          ></InputFileUpload>
          <div className="marginBottom15px">
            <TextField
              id="outlined-basic"
              label="Title_"
              variant="outlined"
              sx={{ width: "100%", maxWidth: "400px", height: "40px" }}
              value={title_5}
              onChange={(e) => set_title_5(e.target.value)}
            />
          </div>
          <div>
            <img src={imagePreview_5} height="40px" />
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <InputFileUpload
            set_imagePreview={set_imagePreview_6}
          ></InputFileUpload>
          <div className="marginBottom15px">
            <TextField
              id="outlined-basic"
              label="Title_"
              variant="outlined"
              sx={{ width: "100%", maxWidth: "400px", height: "40px" }}
              value={title_6}
              onChange={(e) => set_title_6(e.target.value)}
            />
          </div>
          <div>
            <img src={imagePreview_6} height="40px" />
          </div>
        </div>
      </div>

      <div className="update_section_btn">
        <Button variant="contained" onClick={updateOurService}>
          Update Our Service Section
        </Button>
      </div>
    </div>
  );
};

export default OurService;
