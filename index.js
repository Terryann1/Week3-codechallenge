
document.addEventListener("DOMContentLoaded",()=>{
    const url="http://localhost:3000/films";
    const filmDetails={
        poster: document.getElementById("movie-poster"),
        title: document.getElementById("movie-title"),
        runtime: document.getElementById("movie-runtime"),
        showtime: document.getElementById("movie-showtime"),
        capacity: document.getElementById("movie-capacity"),
        availableTickets: document.getElementById("available-tickets"),
        Description: document.getElementById("movie-description"),
        buyButton: document.getElementById("buy-ticket-button"),
    };
    const moviesList=document.getElementById("film-details");
    let currentFilm;

    //Fetch all movies and populate the list
    fetch(url)
    .then((response)=>response.json())
    .then((films)=>{
        films.forEach((film)=>{
        createFilmListItem(film);
        });
        //Display the first movie  by default
        if(films.length >0){
            currentFilm=films[0]; 
            displayFilmDetails(currentFilm);
        }
    });
    //create a list item for each file with a delete button
    function createFilmListItem(film){
      
        const li=document.createElement("li");
         li.textContent=film.title;
        //Add 'sold-out' class if necessary
        if(film.capacity-film.tickets_sold===0){
            li.classList.add("sold-out");
        }
        //Add click event to display details
        li.addEventListener("click",()=>displayFilmDetails(film));
        //Add delete button
        const deleteButton=document.createElement("button");
        deleteButton.textContent="Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click",(event)=>{
            event.stopPropagation(); //prevent triggering the display event
            deleteFilm(film,li);
        });
        li.appendChild(deleteButton);
        moviesList.appendChild(li);
    }
    
    //Display movie details in the main section
    function displayFilmDetails(film){
        currentFilm=film;
        filmDetails.poster.src=film.poster;
        filmDetails.title.textContent=film.title;
        filmDetails.Description.textContent=film.description;
        filmDetails.runtime.textContent=film.runtime;
        filmDetails.showtime.textContent=film.showtime;
        filmDetails.capacity.textContent=film.capacity;
        

        const availableTickets=film.capacity-film.tickets_sold;
        filmDetails.availableTickets.textContent=availableTickets;
        //Update button state and text for sold-out films
        if(availableTickets===0){
            filmDetails.buyButton.textContent="Sold out";
            filmDetails.buyButton.disabled=true;
        }
        else{
            filmDetails.buyButton.textContent="Buy Ticket";
            filmDetails.buyButton.disabled=false;
       }
        //Attach event listener for buying tickets
        filmDetails.buyButton.onclick= ()=>buyTicket(film);
    }
    //Handle ticket purchase
    function buyTicket(film){
        const availableTickets=film.capacity-film.tickets_sold;
        if(availableTickets>0){
            film.tickets_sold +=1;
            const updatedTickets=film.capacity-film.tickets_sold;
            filmDetails.availableTickets.textContent=updatedTickets;
        }
        
        //update button state and text if sold out
        if(updatedTickets===0){
            filmDetails.buyButton.textContent="Sold out";
            filmDetails.buyButton.disabled=true;
        }
        //update the sold-out class in the movie list
        const movieitems=moviesList.querySelectorAll("li");
        movieitems.forEach((item)=>
        {
            if (item.textContent.includes(film.title)){
                item.classList.add("sold-out");
            }
        });
    }
    function deleteFilm(film, li) {
        // Send request to delete the film from the server (not implemented here)
        // Remove the list item from the DOM
        li.remove();
    }

    
})