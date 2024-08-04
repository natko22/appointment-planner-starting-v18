import React from "react";
import { Tile } from "../tile/Tile";
import { Box } from "@mui/material";

export const TileList = ({ tiles }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {tiles.map((tile, index) => (
        <Tile key={index} name={tile.name} description={tile} />
      ))}
    </Box>
  );
};
