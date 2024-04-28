import React, { useEffect, useState } from "react";
import InputFileUpload from "../logo/uploadBTN";
import { Button, TextField } from "@mui/material";
import { toast, Toaster } from "sonner";
import axios from "axios";
import ResponsiveAppBar from "../NavBar/ResponsiveAppBar";
import InputFiled, { InputArea } from "../InputFiled";
import { btnStyle } from "../styles";
import { auth } from "../../firebase";

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

    if (!auth.currentUser) {
      toast.error("Unable to Verify")
      return
    }

    const response = await axios.post(
      "https://decours-dashboard-server-sf8t.onrender.com/api/v1/updateReviews",

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

  async function getReviewsInfo() {
    try {
      const response = await axios.get(
        "https://decours-dashboard-server-sf8t.onrender.com/api/v1/getReviews"
      ); // Replace with your API endpoint

      if (!response.data.data) {
        console.log("no api data");
        return;
      }

      set_title(response.data.data[0].title);
      set_discript(response.data.data[0].discript);


      let info = response.data.data[0].data[0];
      set_imagePreview_1(info.profileImage);
      set_title_1(info.title);
      set_discript_1(info.discript);
      
       info = response.data.data[0].data[1];
      set_imagePreview_2(info.profileImage);
      set_title_2(info.title);
      set_discript_2(info.discript);
      
       info = response.data.data[0].data[2];
      set_imagePreview_3(info.profileImage);
      set_title_3(info.title);
      set_discript_3(info.discript);
      
       info = response.data.data[0].data[3];
      set_imagePreview_4(info.profileImage);
      set_title_4(info.title);
      set_discript_4(info.discript);
      
       info = response.data.data[0].data[4];
      set_imagePreview_5(info.profileImage);
      set_title_5(info.title);
      set_discript_5(info.discript);

       
    } catch (error) {
      console.error("Error fetching image URL:", error);
      return null;
    }
  }

  useEffect(() => {
    getReviewsInfo();
  }, []);

  return (
    <div className="section">
      <ResponsiveAppBar></ResponsiveAppBar>
 
      <h2>Reviews Section</h2>

      <div className="flex-center-center">
        <div className="marginBottom15px">
          <InputFiled value={title} set_value={set_title} />

          <InputArea value={discript} set_value={set_discript} />
        </div>

        <div className="flex-col-wrap">
          <div className="flex-center-center gutterbottom10">
            <div>
              <div className="flex-center-center gutterbottom10">
                <h4>Reviews 1</h4>
                <div
                  className="imagePreviewDIv gutterbottom10"
                  style={{
                    height: "150px",
                    width: "150px",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={imagePreview_1}
                    width="100px"
                    style={{ borderRadius: "50%" }}
                  />
                </div>

                <InputFileUpload
                  set_imagePreview={set_imagePreview_1}
                ></InputFileUpload>
              </div>
            </div>

            <div className="marginBottom15px">
              <InputFiled value={title_1} set_value={set_title_1} />

              <InputArea value={discript_1} set_value={set_discript_1} />
            </div>
          </div>

          <div className="flex-center-center gutterbottom10">
            <div>
              <div className="flex-center-center gutterbottom10">
                <h4>Reviews 2</h4>
                <div
                  className="imagePreviewDIv gutterbottom10"
                  style={{
                    height: "150px",
                    width: "150px",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={imagePreview_2}
                    width="100px"
                    style={{ borderRadius: "50%" }}
                  />
                </div>

                <InputFileUpload
                  set_imagePreview={set_imagePreview_2}
                ></InputFileUpload>
              </div>
            </div>

            <div className="marginBottom15px">
              <InputFiled value={title_2} set_value={set_title_2} />

              <InputArea value={discript_2} set_value={set_discript_2} />
            </div>
          </div>

          <div className="flex-center-center gutterbottom10">
            <div>
              <div className="flex-center-center gutterbottom10">
                <h4>Reviews 3</h4>
                <div
                  className="imagePreviewDIv gutterbottom10"
                  style={{
                    height: "150px",
                    width: "150px",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={imagePreview_3}
                    width="100px"
                    style={{ borderRadius: "50%" }}
                  />
                </div>

                <InputFileUpload
                  set_imagePreview={set_imagePreview_3}
                ></InputFileUpload>
              </div>
            </div>

            <div className="marginBottom15px">
              <InputFiled value={title_3} set_value={set_title_3} />

              <InputArea value={discript_3} set_value={set_discript_3} />
            </div>
          </div>
          <div className="flex-center-center gutterbottom10">
            <div>
              <div className="flex-center-center gutterbottom10">
                <h4>Reviews 4</h4>
                <div
                  className="imagePreviewDIv gutterbottom10"
                  style={{
                    height: "150px",
                    width: "150px",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={imagePreview_4}
                    width="100px"
                    style={{ borderRadius: "50%" }}
                  />
                </div>

                <InputFileUpload
                  set_imagePreview={set_imagePreview_4}
                ></InputFileUpload>
              </div>
            </div>

            <div className="marginBottom15px">
              <InputFiled value={title_4} set_value={set_title_4} />

              <InputArea value={discript_4} set_value={set_discript_4} />
            </div>
          </div>
          <div className="flex-center-center gutterbottom10">
            <div>
              <div className="flex-center-center gutterbottom10">
                <h4>Reviews 5</h4>
                <div
                  className="imagePreviewDIv gutterbottom10"
                  style={{
                    height: "150px",
                    width: "150px",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={imagePreview_5}
                    width="100px"
                    style={{ borderRadius: "50%" }}
                  />
                </div>

                <InputFileUpload
                  set_imagePreview={set_imagePreview_5}
                ></InputFileUpload>
              </div>
            </div>

            <div className="marginBottom15px">
              <InputFiled value={title_5} set_value={set_title_5} />

              <InputArea value={discript_5} set_value={set_discript_5} />
            </div>
          </div>
        </div>
      </div>

      <div className="update_section_btn flex-center-center gutterbottom10">
        <Button variant="contained" onClick={updateReviews} sx={btnStyle}>
         Apply Changes
        </Button>
      </div>
    </div>
  );
};

export default Reviews;
