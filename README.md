# Button Ripple Effect

I created a button with a ripple effect using HTML, CSS, and JavaScript. The button has a blue background and a shadow, and when I hover over it, a pink circle expands from the center to create a ripple effect. I used CSS ::before pseudo-elements and transform to create the circle, and JavaScript to calculate the position of the user's mouse and update the CSS custom properties used for the ripple animation. I'm happy with how the button turned out and feel like it adds some interactivity to my webpage.

## Demo

You can try out the application by visiting [this link](https://paribhandarkar.github.io/button-ripple-effect/).

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

To get started with this project, clone the repository and open the `index.html` file in your preferred web browser.

## New Things I Learned

I learned a lot from this project! I now understand that **`pageX`** and **`pageY`** are properties of the **`MouseEvent`** object that represent the coordinates of the mouse pointer relative to the entire document, and **`offsetLeft`** and **`offsetTop`** are properties of an HTML element that represent its position relative to its offset parent. 

Additionally, I learned about the **`setProperty()`** method, which is used to set custom CSS properties for an element. 

Finally, I learned about the **`mouseover`** event, which is triggered when the mouse pointer enters an element. Overall, this project was a great learning experience for me.

## Challenges I faced

I faced a few challenges while working on this project. Firstly, I had trouble differentiating between the **`pageX`** and **`pageY`** coordinates, which are relative to the entire document, versus the **`offsetLeft`** and **`offsetTop`** coordinates, which are relative to an element's offset parent. 

Secondly, I struggled to find a way to grab the mouse pointer's position specifically on the button, as opposed to the document as a whole. 

Finally, I had some difficulty understanding how to use the **`setProperty()`** method to set custom CSS properties for an element. 

However, with some research and experimentation, I was able to overcome these challenges and successfully complete the project.

![image](https://user-images.githubusercontent.com/76446574/236895729-395a1a12-0276-46a9-b168-b7b5f397d963.png)
