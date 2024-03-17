import React, { useState } from "react";
import InputFileUpload from "../logo/uploadBTN";
import { Button, TextField } from "@mui/material";
import { toast } from "sonner";
import axios from "axios";

const Reviews = () => {
  const [imagePreview_1, set_imagePreview_1] = useState("");
  const [imagePreview_2, set_imagePreview_2] = useState("");
  const [imagePreview_3, set_imagePreview_3] = useState("");
  const [imagePreview_4, set_imagePreview_4] = useState("");
  const [imagePreview_5, set_imagePreview_5] = useState("");

  const [title, set_title] = useState("");
  const [title_1, set_title_1] = useState("");
  const [title_2, set_title_2] = useState("");
  const [title_3, set_title_3] = useState("");
  const [title_4, set_title_4] = useState("");
  const [title_5, set_title_5] = useState("");

  const [discript, set_discript] = useState("");
  const [discript_1, set_discript_1] = useState("");
  const [discript_2, set_discript_2] = useState("");
  const [discript_3, set_discript_3] = useState("");
  const [discript_4, set_discript_4] = useState("");
  const [discript_5, set_discript_5] = useState("");

  const updateReviews = async () => {
    if (!imagePreview_1 || !imagePreview_2 || !imagePreview_3) {
      toast.error("plz complete the section");
      return;
    }

    const response = await axios.post(
      "https://decours-dashboard-server.onrender.com/api/v1/updateReviews",

      {
        title: title,
        discript: discript,
        data: [
          {
            profileImage: imagePreview_1,
            title: title_1,
            discript: discript_1,
          },
          {
            profileImage: imagePreview_2,
            title: title_2,
            discript: discript_2,
          },
          {
            profileImage: imagePreview_3,
            title: title_3,
            discript: discript_3,
          },
          {
            profileImage: imagePreview_3,
            title: title_3,
            discript: discript_3,
          },
          {
            profileImage: imagePreview_3,
            title: title_3,
            discript: discript_3,
          },
        ],
      }
    );

    toast.success(response.data.msg);
  };

  return (
    <div className="section">
      <h2>6. Reviews Section Section</h2>

      <div className="marginBottom15px">
        <TextField
          id="outlined-basic"
          label="Profile Name"
          variant="outlined"
          sx={{ width: "100%", maxWidth: "400px" }}
          value={title}
          onChange={(e) => set_title(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Toughts..."
          multiline
          rows={4}
          sx={{ width: "100%", maxWidth: "600px" }}
          value={discript}
          onChange={(e) => set_discript(e.target.value)}
        />
      </div>

      <hr />

      <div>
        <div>
          <div>
            <div>
              <h4>Reviews 1</h4>
              <p>Profile Image 1</p>

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
              label="Profile Name"
              variant="outlined"
              sx={{ width: "100%", maxWidth: "400px" }}
              value={title_1}
              onChange={(e) => set_title_1(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Toughts..."
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
              <h4>Reviews 2</h4>
              <p>Profile Image 2</p>
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
              label="Profile Name"
              variant="outlined"
              sx={{ width: "100%", maxWidth: "400px" }}
              value={title_2}
              onChange={(e) => set_title_2(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Toughts..."
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
              <h4>Reviews 3</h4>
              <p>Profile Image 3</p>
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
              label="Profile Name"
              variant="outlined"
              sx={{ width: "100%", maxWidth: "400px" }}
              value={title_3}
              onChange={(e) => set_title_3(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Toughts..."
              multiline
              rows={4}
              sx={{ width: "100%", maxWidth: "600px" }}
              value={discript_3}
              onChange={(e) => set_discript_3(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div>
            <div>
              <h4>Reviews 4</h4>
              <p>Profile Image 4</p>
              <InputFileUpload
                set_imagePreview={set_imagePreview_4}
              ></InputFileUpload>
            </div>
          </div>
          <div>
            <img src={imagePreview_4} width="200px" />
          </div>

          <div className="marginBottom15px">
            <TextField
              id="outlined-basic"
              label="Profile Name"
              variant="outlined"
              sx={{ width: "100%", maxWidth: "400px" }}
              value={title_4}
              onChange={(e) => set_title_4(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Toughts..."
              multiline
              rows={4}
              sx={{ width: "100%", maxWidth: "600px" }}
              value={discript_4}
              onChange={(e) => set_discript_4(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div>
            <div>
              <h4>Reviews 5</h4>
              <p>Profile Image 5</p>
              <InputFileUpload
                set_imagePreview={set_imagePreview_5}
              ></InputFileUpload>
            </div>
          </div>
          <div>
            <img src={imagePreview_5} width="200px" />
          </div>

          <div className="marginBottom15px">
            <TextField
              id="outlined-basic"
              label="Profile Name"
              variant="outlined"
              sx={{ width: "100%", maxWidth: "400px" }}
              value={title_5}
              onChange={(e) => set_title_5(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Toughts..."
              multiline
              rows={4}
              sx={{ width: "100%", maxWidth: "600px" }}
              value={discript_5}
              onChange={(e) => set_discript_5(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="update_section_btn">
        <Button variant="contained" onClick={updateReviews}>
          Update Reviews Section
        </Button>
      </div>
    </div>
  );
};

export default Reviews;
