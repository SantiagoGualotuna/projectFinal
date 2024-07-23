# Universidad Central Del Ecuador
## Final Programming Project
#### Members: Santiago Gualotuña, Sneider Lechón
#### Subject: Programming 1
#### Faculty: Engineering and Applied Sciences
#### Degree: Information Systems Engineering
#### Semester: First semester

# Movie Ticket Purchase Confirmation

## Features

- Movie selection from a dropdown menu.
- Specification of the number of tickets.
- Seat selection.
- Calculation of the total price based on the price per ticket of the selected movie.
- Generation of a PDF with the purchase confirmation, including details such as the movie title, number of tickets, selected seats, and total price.
- Automatic download of the generated PDF.
## Technologies Used

- HTML5
- CSS3
- JavaScript
- [jsPDF](https://github.com/parallax/jsPDF) - Library for generating PDFs in the browser.

## Usage

1. Select a movie from the dropdown menu.
2. Enter the number of tickets.
3. Select the desired seats.
4. Click the "Download Confirmation" button to generate and download the PDF with the purchase details.

# Functional Requirements

**Movie Selection**:
- The user must be able to select a movie from a dropdown menu.

**Ticket Specification**:
- The user must be able to enter the number of tickets they want to purchase.

**Seat Selection**:
- The user must be able to select available seats for the selected movie and number of tickets specified.

**Total Price Calculation**:
- The system must calculate the total price based on the price per ticket of the selected movie and the number of tickets entered.

**PDF Generation**:
- The system must generate a PDF that includes:
- Movie title.
- Number of tickets.
- Selected seats.
- Total price.

**PDF Download**:
- The user must be able to download the generated PDF with the purchase details.

# Non-Functional requirements

## Style and Design

- **Description:** Ensures a consistent and visually appealing appearance throughout the website. The CSS styles applied across different files guarantee a pleasant visual experience and an intuitive user interface.

**Files Involved:** `base.css`, `components.css`, `login.css`, `ticket.css`

## Interactivity and Usability

- **Description:** Interactivity and usability are crucial for effective user interaction with the website. JavaScript scripts ensure that elements such as buttons and seats respond appropriately to user actions, enhancing the overall user experience.

**Files Involved:** `components.css`, `initializeseats.js`, `initializeticketform.js`

## Error Handling

- **Description:** Error handling mechanisms provide immediate feedback to the user when an issue occurs, such as an occupied seat or a communication error with the server. This improves the reliability and transparency of the application.

**Files Involved:** `initializeseats.js`, `initializeticketform.js`

## Security

- **Description:** User data security and prevention of unauthorized access are crucial. This includes the secure handling of login credentials and protection of transaction data.

**Files Involved:** `initializelogin.js`, `initializelogout.js`

## Compatibility

- **Description:** Ensuring that the website is compatible with different browsers and devices is crucial for a good user experience. CSS styles and JavaScript scripts should work correctly across all modern browsers and mobile devices.

**Files Involved:** `base.css`, `components.css`, `login.css`, `ticket.css`, `initializelogin.js`, `initializelogout.js`, `initializeseats.js`, `initializeticketform.js`, `generatepdf.js`

# Methods Used

* `document.getElementById()`: Gets an element by its ID.

* `addEventListener()`: Adds an event to an element.

* `event.preventDefault()`: Prevents the default action of the event.

* `parseInt()`: Converts a string to an integer.

* `parseFloat()`: Converts a string to a floating-point number.

* `Array.from()`: Creates a new Array instance from an iterable object.

* `classList.add()`: Adds a class to an element.

* `classList.remove()`: Removes a class from an element.

* `textContent`: Sets or returns the text content of a node.

* `innerHTML`: Sets or returns the HTML content of an element.

* `style.display`: Changes the value of an element's display property.

* `localStorage.getItem()`: Gets an item from local storage.

* `localStorage.setItem()`: Sets an item in local storage.

* `window.jspdf.jsPDF`: Accesses the jsPDF constructor from the jsPDF library.

* `doc.setFontSize()`: Sets the font size in the PDF document.

* `doc.text()`: Writes text to the PDF document.

* `doc.save()`: Saves the PDF document with a specified file name.

* `createElement()`: Creates a new HTML element.

* `appendChild()`: Adds a new node as a child of the specified node.

* `join()`: Joins all elements of an array into a string.



# Images

![Imagen 1](https://github.com/user-attachments/assets/1132289f-8704-48c2-9d3e-4170e13b8cf6)

![Imagen 2](https://github.com/user-attachments/assets/bca6caaf-f142-482e-aebb-5db716560232)

![image](https://github.com/user-attachments/assets/5d5c0170-4278-4acd-a2a8-b5dfd158c307)


