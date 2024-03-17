import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";

import uploadFiles from "../../Hooks/uploadImage";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function InputFileUpload({ set_imagePreview }) {
  const [newLogo, set_newLogo] = useState();

  const handleImageChange = async (e) => {
    const selectedFile = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png"]; // Allowed MIME types

    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      // File is valid, set it to state
      set_newLogo(selectedFile);

      try {
        const url = await uploadFiles(selectedFile, "logo");
        set_imagePreview(url)
      } catch (error) {

        console.log(error);
      }
    } else {
      // Invalid file type, display error message
      alert("Please upload a valid JPEG or PNG image.");
      e.target.value = ""; // Clear the input field
      set_newLogo(null); // Reset the state
    }
  };



  return (
    <>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={handleImageChange}
        />
      </Button>
      
    </>
  );
}
