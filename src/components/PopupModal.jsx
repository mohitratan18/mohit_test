/* eslint-disable no-unused-vars */
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import img_links from "../../img_links.json";
import { useState } from "react";
import ImgCard from "./ImgCard";
import { Alert } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function PopupModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [images, setImages] = useState([]);
  const [opennn, setopennn] = useState(false)
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <input></input>
          {/* <ChildModal /> */}
          <div className="flex flex-col items-center gap-6">
            <div>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => {
                  setImages(e.target.files);
                }}
              />
            </div>
            <div className="flex flex-col items-center">
              {images.length > 0 && (
                 <Alert severity="warning" onClose={() => {setopennn(!opennn)}}>
                Images added successfully
              </Alert> 
              )}
              <div>Recent Used Images</div>
              <div className="flex flex-row flex-wrap">
                {img_links.images.map((link, index) => {
                  return <ImgCard key={index} />;
                })}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
