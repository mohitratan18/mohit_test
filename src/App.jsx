import "./App.css";

import img_links from "../img_links.json";
import Button from "@mui/material/Button";
import ImgCard from "./components/ImgCard";
import { useState } from "react";
function App() {
  const [toogleimg, settoogleimg] = useState(false);
  const [imagesLength, setimagesLength] = useState([]);
  return (
    <>
      <div className="w-full h-full bg-gray-500 min-h-[100vh]">
        <div className="flex flex-col items-center justify-center p-12">
          <Button
            variant="contained"
            onClick={() => {
              settoogleimg(!toogleimg);
            }}
          >
            toogle images
          </Button>

          {toogleimg && (
            <div className="flex flex-col gap-2 md:flex-row p-12">
              {img_links.images.map((link, index) => {
                return <ImgCard key={index} link={link} />;
              })}
            </div>
          )}
        </div>
        <div className="flex flex-row items-center justify-center">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
              setimagesLength(e.target.files);
            }}
          />
        </div>

        {/* {imagesLength.length > 0 && (<div>
          <p>no of images selected : {imagesLength.length}</p>
          {
            
          }
        </div>)} */}

        {imagesLength.length > 0 && (
          <div className="flex flex-col justify-center items-center">
            <p>Number of images selected: {imagesLength.length}</p>
            <p>
              Image names:
              <br />
              <div className="bg-blue-100 p-6">
                {Array.from(imagesLength).map((file, index) => (
                  <p key={index} className="bg-blue-200 p-3">
                    {file.name} url-url{index + 1}
                    <br />
                  </p>
                ))}
              </div>
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
