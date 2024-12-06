import React from "react";

function BookingForm({
  onFormSubmit,
  isFormSubmitted,
  availableTimes,
  dispatchOnDateChange,
  formValues,
  setFormValues,
}) {
  const minGuest = 1;
  const maxGuest = 10;

  const handleInputChange = (e) => {
    if (e.target.name === "date") {
      dispatchOnDateChange(e.target.value);
    }
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="flex justify-center items-center min-h-screen text-secondary-gray bg-secondary-gray font-karla">
      <div className="p-10 bg-primary-green rounded-lg shadow-lg w-full max-w-lg text-center">
        <h1 className="text-4xl font-semibold mb-5">Table Reservations</h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => onFormSubmit(e, formValues)}
        >
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
            id="date"
            onChange={handleInputChange}
            className={`text-secondary-black border rounded p-2 ${
              isFormSubmitted && !formValues.date ? "border-red-500" : ""
            }`}
          />
          <label
            htmlFor="time" 
            className="font-semibold text-secondary-gray text-left"
          >
            Time
          </label>
          <select
            id="time"
            name="time"
            value={formValues.time}
            onChange={handleInputChange}
            className={`text-secondary-black border rounded p-2 ${
              isFormSubmitted && !formValues.time ? "border-red-500" : ""
            }`}
          >
            {availableTimes.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>
          {/* Guests Dropdown */}
          <label
            htmlFor="guests"
            className="font-semibold text-secondary-gray text-left"
          >
            Guests
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            min={minGuest}
            max={maxGuest}
            onChange={handleInputChange}
            className={`text-secondary-black border rounded p-2 ${
              isFormSubmitted && !formValues.guests ? "border-red-500" : ""
            }`}
          />

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
            className={`text-secondary-black border rounded p-2 ${
              isFormSubmitted && !formValues.occasion ? "border-red-500" : ""
            }`}
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
          >
            Book a Table
          </button>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;
