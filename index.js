
// Define URLs
const filmsUrl = 'http://localhost:3000/films'; // For fetching all films
const filmUrl = 'http://localhost:3000/films/1'; // For fetching details of the first film (id: 1)

// Function to calculate available tickets
function calculateAvailableTickets(film) {
    return film.capacity - film.tickets_sold;
}



// Fetch details of the first movie and display it
fetch(filmUrl)
    .then(response => response.json())
    .then(film => {
        document.getElementById('movie-title').innerText = film.title;
        document.getElementById('movie-poster').src= film.poster;
        document.getElementById('movie-description').textContent = film.description;
        document.getElementById('movie-runtime').textContent = film.runtime;
        document.getElementById('movie-showtime').textContent = film.showtime;
        document.getElementById('movie-capacity').textContent = film.capacity;
        document.getElementById('movie-ticket').textContent = film.tickets_sold;


        const availableTickets = calculateAvailableTickets(film);
        document.getElementById('available-tickets').textContent = film.availableTickets;
        const buyTicketButton = document.getElementById('buy-ticket-button');
        buyTicketButton.disabled = availableTickets <= 0;

        buyTicketButton.addEventListener('click', () => {
            if (availableTickets > 0) {
                // Update UI after buying ticket (decrease available tickets)
                document.getElementById('available-tickets').textContent = availableTickets;
                buyTicketButton.disabled = availableTickets - 1 <= 0; // Disable button if sold out
            }
        });
    })
    .catch(error => console.error('Error fetching film details:', error));

