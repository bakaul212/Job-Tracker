1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

 1.1 getElementById: Returns a single element by its unique ID. It is highly efficient and the fastest way to select an element.

 1.2 getElementsByClassName: Returns a "live" HTMLCollection of all elements with a specific class. If the DOM updates, this collection updates automatically.

 1.3 querySelector: Uses CSS selector syntax (e.g., .class, #id, div > p) and returns only the first matching element.

 1.4 querySelectorAll: Uses CSS selectors to return all matching elements in a static NodeList. Unlike HTMLCollections, it does not update automatically if the DOM changes.

2. How do you create and insert a new element into the DOM? 

 The process involves three main steps:

 2.1 Creation: Use document.createElement('tagName') to create the element node (e.g., const div = document.createElement('div');).

 2.2 Configuration: Add content or attributes using properties like innerText, innerHTML, or classList.add().

 2.3 Insertion: Use methods like appendChild() to add it as the last child of a parent, or prepend() to add it as the first child.

Example: parentElement.appendChild(newElement);

3. What is Event Bubbling? And how does it work?

In the world of web development, Event Bubbling is a type of event propagation where an event starts from the deepest possible element (the target) and "bubbles" up through its ancestors in the DOM (Document Object Model) tree until it reaches the highest level (usually the window object).

Think of it like a bubble rising in a glass of soda—it starts at the bottom and travels all the way to the surface.

How It Works (The Mechanics)
When you click a button that is nested inside several other elements, the browser doesn't just trigger the click event on that button. It follows a specific cycle.

 3.1 The Target Phase: The event happens on the specific element you   interacted with (e.g., a <button>).

 3.2 The Bubbling Phase: The browser checks if the button's parent has an  event handler. If it does, that runs. Then it moves to the grandparent,  then the great-grandparent, and so on.


4. What is Event Delegation in JavaScript? Why is it useful?

 Event Delegation is a design pattern where you attach a single event listener to a parent element instead of attaching multiple listeners to individual child elements.

 4.1Why it is useful:

  4.1.1 Memory Efficiency: It saves memory by reducing the number of event listeners on the page.

  4.1.2 Dynamic Elements: It allows you to handle events for "future" elements that are added to the DOM dynamically (like new job cards) without needing to re-bind listeners.

5. What is the difference between preventDefault() and stopPropagation() methods?

 5.1 preventDefault(): This method stops the default browser behavior associated with an event. For example, it prevents a form from submitting/reloading the page or a link from navigating to a URL.

 5.2 stopPropagation(): This method stops the event from bubbling up the DOM tree. It ensures that the event triggers the handler on the current element but does not notify any parent elements that the event occurred.