import React from "react";
import { TextField, Button, Box } from "@mui/material";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        label="Name"
        variant="outlined"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <TextField
        label="Phone"
        variant="outlined"
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        inputProps={{
          pattern: "^((?+?[0-9]*)?)?[0-9_- ()]*$",
        }}
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <Button variant="contained" type="submit">
        Add Contact
      </Button>
    </Box>
  );
};
