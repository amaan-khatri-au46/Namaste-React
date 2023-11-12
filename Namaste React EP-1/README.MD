Q1. What is Emmet ?
Ans : Emmet is a web development toolkit that significantly enhances HTML and CSS workflow. It allows developers to write abbreviated syntax, resembling CSS selectors, and then expand that syntax into full-fledged HTML or CSS code. Emmet is often used as a plugin in various text editors and integrated development environments (IDEs) to boost productivity.


Q2. What is the difference between framework and library and why react is libraray 

Ans : library is which can be work in the small portion of the app like we had taken the id of the root and render the portion which we want using react 
      next portion which we had not written can be go with as html elements or through pure javascript 

Q3. What is cdn ? do we use it ?
Ans : A Content Delivery Network (CDN) is a network of geographically distributed servers that work together to enhance the performance and speed of content delivery, such as web pages, images, videos, and scripts, by serving them from servers closer to the user's location.
yes we use and and import in our folder or wwe can say it as file structure to make use of react we

Q4. What if there is anthing already present inside rooot ?
Ans : Root.render will replace that and render the new html which ever element we had written using React.createElement


Q5. What is Cross Origin  is  script tag  ?
Ans : The crossorigin attribute in a  tag is used to control how the browser handles cross-origin requests when loading a script. This attribute is specifically relevant when the script source is on a different domain (origin) than the one of the HTML document that includes the script.


Q6. what is the difference beween react and reactDom ?
Ans : React:

The React library is the core library for building user interfaces in React applications.
It provides the essential functionality for defining and creating React components, managing component state, and handling the component lifecycle.


ReactDOM:

The ReactDOM library is specific to the web platform and provides the methods necessary for rendering React components in a web browser.
It includes functions like ReactDOM.render(), which takes a React element and attaches it to a DOM element, effectively rendering the component on the web page.
ReactDOM is responsible for the interaction between React and the DOM (Document Object Model.


Q4. what is the difference between react.development.js and react.production.js files via cdn links ?
Ans : The key differences between react.development.js and react.production.js files are related to performance, debugging, and the size of the code.


* Development Version (react.development.js):

1. Uncompressed and Readable Code: The development version is human-readable and retains comments and descriptive variable names. This makes it easier to understand and debug the code.

2. Performance Overhead: The development version includes extra checks and warnings, providing better error messages and warnings during development. However, these additional checks and warnings come with a performance overhead.
Bigger File Size: The file size of the development version is larger compared to the production version because it includes extra development-related code and comments.

* Production Version (react.production.js):

1. Minified and Optimized Code: The production version is minified and optimized for better performance. It removes unnecessary comments, whitespace, and console logs, resulting in a smaller file size.

2. Performance Optimization: The production version excludes certain development-only checks and warnings, leading to improved runtime performance.

3. Smaller File Size: The production version is smaller in size compared to the development version, reducing the time it takes for users to download and execute the script.

Q5. Is it Compulsory to write the script file in sequece if yes then why ? if No Then Why ? 

Ans : yes it is Compulsory to write the script file in sequece  beacuse first we need to define that the react then only our javascript file will run
      else it will throw and error react is not define 


Q6. what if i write something inside below or down in react what happen ?
Ans thus we are getting the root id and and everthing which we wrote that will display inside the root element only beacuse we had written all the 
    the stuf code using react and the belelow or any content which was not written inside root element that will also be reneder due to to html structure 

<!-- Important Question -->
Q7. What is react ?
Ans : React is just a javascript library which was written by a facebook in 2015 it is just a helper method which we have to use to develop fast application 
      React can works in the existing app only no need to create a new app like frameworks We can just inject react and through cdn links 


