import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        label="Appointment Title"
        variant="outlined"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Appointment Title"
        required
      />
      <TextField
        label="Date"
        type="date"
        variant="outlined"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          min: getTodayString(),
        }}
        required
      />
      <TextField
        label="Time"
        type="time"
        variant="outlined"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        required
      />
      <ContactPicker
        contacts={contacts}
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        name="contact"
      />
      <Button variant="contained" type="submit">
        Add Appointment
      </Button>
    </Box>
  );
};
