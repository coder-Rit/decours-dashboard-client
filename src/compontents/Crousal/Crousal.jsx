import React, { useState } from "react";
import InputFileUpload from "../logo/uploadBTN";
import { Button, TextField } from "@mui/material";
import { toast } from "sonner";
import axios from "axios";

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

    const response = await axios.post(
      "http://localhost:4000/api/v1/updateCarousel",
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

  return (
    <div className="section">
      <h2>3. Crousal Section Section</h2>

      <div>
        <div>
          <div>
            <div>
              <h4>Carousel 1</h4>
              <InputFileUpload
                set_imagePreview={set_imagePreview_1}
              ></InputFileUpload>
            </div>
          </div>
          <div>
            <img src={imagePreview_1} width="200px" />
          </div>

          <div className="marginBottom15px">
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              sx={{ width: "100%", maxWidth: "400px" }}
              value={title_1}
              onChange={(e) => set_title_1(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              sx={{ width: "100%", maxWidth: "600px" }}
              value={discript_1}
              onChange={(e) => set_discript_1(e.target.value)}
            />
          </div>
        </div>
        <hr />
        <div>
          <div>
            <div>
              <h4>Carousel 2</h4>
              <InputFileUpload
                set_imagePreview={set_imagePreview_2}
              ></InputFileUpload>
            </div>
          </div>
          <div>
            <img src={imagePreview_2} width="200px" />
          </div>

          <div className="marginBottom15px">
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              sx={{ width: "100%", maxWidth: "400px" }}
              value={title_2}
              onChange={(e) => set_title_2(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              sx={{ width: "100%", maxWidth: "600px" }}
              value={discript_2}
              onChange={(e) => set_discript_2(e.target.value)}
            />
          </div>
        </div>
        <hr />

        <div>
          <div>
            <div>
              <h4>Carousel 3</h4>
              <InputFileUpload
                set_imagePreview={set_imagePreview_3}
              ></InputFileUpload>
            </div>
          </div>
          <div>
            <img src={imagePreview_3} width="200px" />
          </div>

          <div className="marginBottom15px">
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              sx={{ width: "100%", maxWidth: "400px" }}
              value={title_3}
              onChange={(e) => set_title_3(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              sx={{ width: "100%", maxWidth: "600px" }}
              value={discript_3}
              onChange={(e) => set_discript_3(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="update_section_btn">
        <Button variant="contained" onClick={updateCarousel}>
          Update Crousal Section
        </Button>
      </div>
    </div>
  );
};

export default Carousel;
