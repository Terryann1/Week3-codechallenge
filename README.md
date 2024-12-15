# WEEK 3 CODE CHALLENGE
## Description
Implement a 'mini' web application using JavaScript.
## Table of contents
- [Requirements](#requirements)
- [Core deliverables](#core-deliverables)
- [Bonus features](#bonus-features)
- [Installation Requirements](#installation-requirements)
- [Contributions](#contributions)
- [Contact](#contact)

## Requirements
 Fetch data from a local server running JSON DB server.

 ## Core deliverables
 1. **See the first movie's details, including its **poster, title, runtime, showtime, and available tickets** when the page loads. The number of available tickets will need to be derived by subtracting the number of `tickets_sold` from the theater's `capacity`. You will need to make a GET request to the following endpoint to retrieve the film data**
2. **See a menu of all movies on the left side of the page in the `ul#films` element when the page loads. (_optional_: you can style each film in the list by adding the classes `film item` to each `li` element.) There is a placeholder `li` in the `ul#films` element that is hardcoded in the HTML — feel free to remove that element by editing the HTML file directly, or use JavaScript to remove the placeholder element before populating the list. You will need to make a GET request to the following endpoint to retrieve the film data:**
3. **Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should see the number of available tickets decreasing on the frontend. I should not be able to buy a ticket if the showing is sold out (if there are 0 tickets available). **No persistence is needed for this feature****

## Bonus Features
1. **Click on a movie in the menu to replace the currently displayed movie's details with the new movie's details. Note that you may have to make an additional GET request to access the movie's details.**
2. **When a movie is sold out (when there are no available tickets remaining), indicate that the movie is sold out by changing the button text to "Sold Out". Also update the film item in the `ul#films` menu by adding a class of `sold-out` to the film. For reference, here's what the contents of the `ul#films` element should look like with a sold out film:**
3. **When a ticket is purchased, persist the updated number of `tickets_sold` on the server. Remember, the frontend shows the number of available tickets based on the `tickets_sold` and the `capacity`, so only the `tickets_sold` should be updated on the backend when a ticket is purchased. You will need to make a request that follows this structure:**

## Installation Requirements
1. **Clone the repository**
```bash
git@github.com:Terryann1/Week3-codechallenge.git
```
2. **Navigate to the project directory**
```bash
cd week3-codechallenge
```
## Contributions
1. **Fork the repository**
2. **Commit your changes**
```bash
git commit -m "Add a new Feature"
```
3. **Push to the branch**
```bash
git push origin main
```

## Contact
1. **Name: Terryann Odinga**
2. **Email: terryann.odinga@student.moringaschool.com**
3. **Project link**
```bash
https://github.com/Terryann1/Week3-codechallenge.git
```
