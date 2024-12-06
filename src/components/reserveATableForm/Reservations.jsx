import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Alert from "./Alert";
import useSubmit from "../../hooks/useBookATable";
import { useReducer } from "react";
import { fetchAPI } from "../../utils/Api";
import BookingForm from "./BookingForm";
import { useAlertContext } from "../../context/alertContext";

function Reservations() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const {  response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const updateTimes = (availableTimes, date) => {
    const response1 = fetchAPI(new Date(date));
    return response1.length !== 0 ? response1 : availableTimes;
  };

  const initializeTimes = () => {
    const times = fetchAPI(new Date());
    return times;
  };

  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    undefined,
    initializeTimes
  );

  const defaultTime = availableTimes.length > 0 ? availableTimes[0] : "";

  const [formValues, setFormValues] = useState({
    date: "",
    time: defaultTime,
    guests: 1,
    occasion: "birthday",
  });

  const handleSubmit = (e, formValues) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    submit("", formValues);
  };

  useEffect(() => {
    if (response) {
      console.log("Alert triggered:", response);
      onOpen(response.type, response.message);
      if (response.type === "success") {
        setFormValues({
          date: "",
          time: defaultTime,
          guests: "",
          occasion: "birthday",
        });
      }
    }
  }, [response]);

  return (
    <section data-testid="reservations-component">
      <Header />
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        onFormSubmit={handleSubmit}
        isFormSubmitted={isFormSubmitted}
        formValues={formValues}
        setFormValues={setFormValues}
      />
      <Footer />
      {response && <Alert />}
    </section>
  );
}

export default Reservations;
