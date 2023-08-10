# Accordian-Simple-Way 
# The Main goal is to Understand The Logic How it is working.
# Open project code one side and this readme another side to better understand what I'm trying to say.
Check out Demo: https://simplifiedweb.github.io/Accordian-Simple-Way/

Layout Structure:

You have a large container that wraps everything.
Within this container, you have 4 smaller boxes. Each of these small boxes is a "section" containing a question and its corresponding answer.
Your HTML structure involves nesting boxes within boxes.
Logic Explanation:

The key concept here is using the HTMLCollection in the DOM, which allows you to iterate through elements using index numbers. In your case, you're using it to interact with the accordion's different sections.

Click Interaction:

Whenever a box is clicked, you're targeting the index number of that box within the HTMLCollection.
You then add the "active" class to the clicked box, which triggers CSS transitions and increases the height of the box to reveal the answer.
By toggling the "active" class, you're effectively opening and closing the sections.

CSS Transitions:

Your CSS is set up to smoothly transition changes in height caused by adding/removing the "active" class. This creates a smooth accordion effect.
In summary, your accordion is built around a layout that includes nested boxes. The JavaScript logic revolves around using index numbers to identify and interact with different sections. When a section is clicked, the "active" class is toggled, causing a smooth transition in height and revealing the answer.
