import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import { Typography, Container, Box } from "@mui/material";

export const AppointmentsPage = ({
  appointments,
  contacts,
  addAppointment,
}) => {
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time);
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Add Appointment
        </Typography>
        <AppointmentForm
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </Box>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Appointments
        </Typography>
        <TileList tiles={appointments} />
      </Box>
    </Container>
  );
};
