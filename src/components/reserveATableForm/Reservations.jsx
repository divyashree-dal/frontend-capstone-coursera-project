import React, { useState,useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useAlertContext } from "../../context/alertContext";
import useSubmit from "../../hooks/useBookATable";
import Alert from "./Alert";

function Reservations() {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const [formValues, setFormValues] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "birthday",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", formValues);
    submit("", formValues);
  };

  useEffect(() => {
    if (response) {
      console.log('Alert triggered:', response);
      onOpen(response.type, response.message);
      if (response.type === "success") {
        setFormValues({
          date: "",
          time: "",
          guests: 1,
          occasion: "birthday",
        });
      }
    }
  }, [response]);


  return (
    <section>
      <Header />
      <section className="flex justify-center items-center min-h-screen text-secondary-gray bg-secondary-gray font-karla">
        <div className="p-10 bg-primary-green rounded-lg shadow-lg w-full max-w-lg text-center">
          <h1 className="text-4xl font-semibold mb-5">Table Reservations</h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label
              htmlFor="Date"
              className="font-semibold text-secondary-gray text-left"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              required
              value={formValues.date}
              className="text-secondary-black border rounded p-2"
              onChange={handleInputChange}
            />
            <label
              htmlFor="time"
              className="font-semibold text-secondary-gray text-left"
            >
              Time
            </label>
            <input
              type="time"
              name="time"
              required
              value={formValues.time}
              className="text-secondary-black border rounded p-2"
              onChange={handleInputChange}
            />
            {/* Guests Dropdown */}
            <label
              htmlFor="guests"
              className="font-semibold text-secondary-gray text-left"
            >
              Guests
            </label>
            <select
              id="guests"
              name="guests"
              required
              value={formValues.guests}
              className="text-secondary-black border rounded p-2"
              onChange={handleInputChange}
            >
              {Array.from({ length: 10 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>

            {/* Occasion Dropdown */}
            <label
              htmlFor="occasion"
              className="font-semibold text-secondary-gray text-left"
            >
              Occasion
            </label>
            <select
              id="occasion"
              name="occasion"
              required
              className="text-secondary-black border rounded p-2"
              value={formValues.occasion}
              onChange={handleInputChange}
            >
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="business">Business</option>
              <option value="other">Other</option>
            </select>

            <button
              className="bg-primary-yellow border-r-2 rounded-md md:p-2 p-5 text-primary-green font-semibold md:mt-4 mt-10"
              type="submit"
              width="full"
              isLoading={isLoading}
            >
              Book a Table
            </button>
          </form>
        </div>
      </section>

      <Footer />
      {response && <Alert />}
    </section>
  );
}

export default Reservations;
