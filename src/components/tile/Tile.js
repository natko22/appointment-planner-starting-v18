import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export const Tile = ({ name, description }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
      <Typography variant="h6" component="div" sx={{ marginBottom: 1 }}>
        {name}
      </Typography>
      {Object.values(description).map((value, index) => (
        <Typography key={index} variant="body2" component="p">
          {value}
        </Typography>
      ))}
    </Paper>
  );
};
