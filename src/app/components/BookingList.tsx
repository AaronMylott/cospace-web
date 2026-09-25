// BookingList component for managing and displaying a list of bookings
"use client"; //Client-Side 


import { useState } from "react";
import BookingCard, { BookingCardProps } from "./BookingCard"; 
// Component for managing and displaying a list of bookings
import RegistrationForm from "./RegistrationForm";

const initialBookings: BookingCardProps[] = [
  { desk: "A1", floor: 1, date: "2026-09-25", active: true },
  { desk: "B4", floor: 2, date: "2026-09-26", active: false },
  { desk: "C7", floor: 3, date: "2026-09-27", active: true },
  { desk: "D2", floor: 1, date: "2026-09-28", active: true },
];
// Initial list of bookings
// BookingList component
export default function BookingList() {
  const [bookings, setBookings] = useState<BookingCardProps[]>(initialBookings);
  // State for managing the search input, it does this by notifying React of changes to the input field.
  // This state variable holds the current value of the search input field.
  // Whenever the user types in the search input, the onChange handler updates this state.
  const [search, setSearch] = useState("");

  function handleAddBooking(booking: BookingCardProps) {
    // Add the new booking to the list of bookings
    // Update the state with the new booking added to the previous list of bookings
    setBookings((prev) => [...prev, booking]);
  }

  const filteredBookings = bookings.filter((booking) =>
    // Filter bookings based on the search input
    // Convert both the desk name and the search input to lowercase for case-insensitive comparison
    booking.desk.toLowerCase().includes(search.toLowerCase())
  );

  return (
    // Booking list container
    <div>
      <RegistrationForm onAddBooking={handleAddBooking} />
      <input
        type="text"
        placeholder="Search by desk..."
        value={search} // Controlled input value, '{search}' reflects the current state of the search input field. 
        onChange={(e) => setSearch(e.target.value)} // Update the search state whenever the user types in the input field
        style={{ padding: 8, marginBottom: 16, width: "100%", maxWidth: 300 }}
      />
      {/* Search input field for filtering bookings by desk */}
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {/* Render the list of filtered bookings, each represented by a BookingCard component */}
        {filteredBookings.map((booking) => (
            //An iteration over the filtered bookings array, rendering a BookingCard for each booking. Map has returns stuff, while For each does not.
          <BookingCard key={booking.desk} {...booking} />
        ))}
      </div>
    </div>
  );
}
