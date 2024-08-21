/* eslint-disable no-unused-vars */
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import img from "../assets/img.jpeg"
import { Button, CardActionArea, CardActions } from "@mui/material";

const ImgCard = () => {
  return (
    <div className="p-3">
    <Card sx={{ maxWidth: 345 }} onClick={()=>console.log("hello")
    }>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
      </CardActionArea>
    </Card>
    </div>
  )
}

export default ImgCard
