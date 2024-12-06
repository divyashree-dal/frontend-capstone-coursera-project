// import React from "react";
// import { render, screen } from "@testing-library/react";
// import Reservations from "./Reservations";
// import { BrowserRouter as Router } from "react-router-dom";
// import * as AlertContext from "../../context/alertContext"; // Import the entire context module

// describe("Render the Reservations component", () => {
//   test("Should render Reservations component", () => {
//     // Mock the useAlertContext hook
//     jest.spyOn(AlertContext, "useAlertContext").mockReturnValue({
//       onOpen: jest.fn(), // Mock onOpen function
//       response: null, // Mock response as null initially
//     });

//     render(
//       <Router>
//         <Reservations />
//       </Router>
//     );

//     const reservationComponent = screen.getByTestId("reservations-component");
//     expect(reservationComponent).toBeInTheDocument();

//     // Clean up the mock after the test
//     jest.restoreAllMocks();
//   });
// });
