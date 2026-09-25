export interface BookingCardProps {
  // Props for the booking card component
  desk: string;
  floor: number;
  date: string;
  active: boolean;
}

export default function BookingCard({ desk, floor, date, active }: BookingCardProps) {
    // Booking card component that displays individual booking details
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 16,
        opacity: active ? 1 : 0.5,
      }}
    >
      {/* Display booking details */}
      <h3>Desk {desk}</h3>
      <p>Floor: {floor}</p>
      <p>Date: {date}</p>
      <p>Status: {active ? "Active" : "Inactive"}</p>  
      {/* One line IF statement If active is true, show "Active", otherwise show "Inactive" */}
    </div>
  );
}
