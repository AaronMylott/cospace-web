"use client";

import { useState, FormEvent } from "react";
import { BookingCardProps } from "./BookingCard";

interface RegistrationFormProps {
  onAddBooking: (booking: BookingCardProps) => void;
}

export default function RegistrationForm({ onAddBooking }: RegistrationFormProps) {
  // State for managing form inputs. Each input field has its own state variable.  useState is used to create and update these state variables.
  const [desk, setDesk] = useState("");
  const [floor, setFloor] = useState(1);
  const [date, setDate] = useState("");

  // Handle form submission
  // Function to handle form submission
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // stop the browser from reloading the page on submit

    if (!desk || !date) return; // Validate required fields before submission

    onAddBooking({ desk, floor, date, active: true });

    setDesk("");
    setFloor(1);
    setDate("");
    // Reset form fields after submission
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {/* Registration form for adding a new booking */}
      <input
        type="text"
        placeholder="Desk"
        value={desk}
        onChange={(e) => setDesk(e.target.value)}
        required
      />
      {/* Input field for the floor number */}
      <input
        type="number"
        placeholder="Floor"
        value={floor}
        onChange={(e) => setFloor(Number(e.target.value))}
        min={1}
        required
      />
      {/* Input field for the booking date */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Add Booking</button>
    </form>
  );
}

