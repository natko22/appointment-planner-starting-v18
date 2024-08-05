/* eslint-disable no-undef */
import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import { Container, CssBaseline, Typography, Box } from "@mui/material";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addContact = (name, phone, email) => {
    setContacts([...contacts, { name, phone, email }]);
  };

  const addAppointment = (name, contact, date, time) => {
    setAppointments([...appointments, { name, contact, date, time }]);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={<ContactsPage contacts={contacts} addContact={addContact} />}
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              appointments={appointments}
              contacts={contacts}
              addAppointment={addAppointment}
            />
          }
        />
      </Route>
    )
  );

  return (
    <CssBaseline>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Appointment Planner
          </Typography>
        </Box>
        <RouterProvider router={router} />
      </Container>
    </CssBaseline>
  );
}

export default App;
