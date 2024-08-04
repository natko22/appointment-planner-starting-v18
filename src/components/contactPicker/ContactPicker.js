import React from "react";
import { TextField, MenuItem } from "@mui/material";

export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <TextField
      select
      label="Contact"
      name={name}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      required
    >
      <MenuItem value="">No Contact Selected</MenuItem>
      {contacts.map((contact, index) => (
        <MenuItem key={index} value={contact.name}>
          {contact.name}
        </MenuItem>
      ))}
    </TextField>
  );
};
