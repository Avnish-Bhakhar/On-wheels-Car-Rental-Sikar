document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', () => {
        const carModel = button.getAttribute('data-car');
        document.getElementById('car').value = carModel;
        window.location.href = '#booking';
    });
});

// Form submission handler (can be extended with backend integration)
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Booking confirmed for ' + document.getElementById('car').value + '!');
});
// Example: Fetch car data
fetch('/api/cars')
  .then(response => response.json())
  .then(data => {
    // Handle car data on the frontend
    console.log(data);
  })
  .catch(error => console.error('Error fetching car data:', error));

// Example: Book a car
const bookingData = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  carId: '606c25db6f43ad19e4411b30', // Example car ID
  date: '2024-09-30',
};

fetch('/api/bookings', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(bookingData),
})
  .then(response => response.json())
  .then(data => {
    console.log('Booking confirmed:', data);
  })
  .catch(error => console.error('Error booking car:', error));

