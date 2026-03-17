Live Demo: 

https://react-project-beryl-theta.vercel.app/

Reflection:

This project involved building a fully responsive URL shortening application by using React, and integrating the Bitly API to handle dynamic link generation. One of the most significant challenges that I faced was managing asynchronous API requests while keeping the application state up to date and consistent. At first, I struggled with dynamically updating the list of shortened URLs after each submission. I was able to resolve this issue by structuring state with React's "useState" hook to make sure that updates to the application triggered re-rendering of components.

Another challenge was using form validation. I needed to provide feedback to users when an invalid URL was submitted. I resolved this by adding conditional checks and displaying error messages to help users correct their input. This improves usability and user experience.

Making sure that the application was fully responsive across multiple different devices was also a challenge. I resolved this by using CSS techniques such as flexbox and media queries to create layouts that adapt to varying screen sizes.

Working with the Bitly API was also challengeing because it required understanding authentication,constructing HTTP requests, and handling API errors. I overcame this by reseaching and deepening my understanding of the Bitly API.

If I were to improve this project, I would add UI animations to make the application more interactive.