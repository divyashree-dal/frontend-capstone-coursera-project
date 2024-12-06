import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("Booking Form", () =>{
    test("Booking form Heading", () => {
        const handleSubmit = jest.fn();
        render(
            <BookingForm
              onFormSubmit={handleSubmit}
              isFormSubmitted={false}
              availableTimes={["18:00", "19:00", "20:00"]}
              dispatchOnDateChange={jest.fn()}
              formValues={{
                date: "",
                time: "",
                guests: "",
                occasion: "",
              }}
              setFormValues={jest.fn()}
            />
          );
        const headingElement = screen.getByText("Table Reservations");
        expect(headingElement).toBeInTheDocument();
    })
})