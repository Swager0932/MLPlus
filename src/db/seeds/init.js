const User = require('../models/user');
const Lesson = require('../models/lesson');
const Quiz = require('../models/quiz');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await User.deleteAll();
  await User.create('cool_cat', '1234');
  await User.create('l33t-guy', '1234');
  await User.create('wowow', '1234');
  // ////////////////////////////////////////
  await Lesson.create('Your First Web Page', 'https://www.youtube.com/embed/BvJYXl2ywUE?si=lqNDj6hho0tQhqho', 'In this video we dive into the basics of HTML. We will cover the basic structure of an HTML file, as well as the steps needed to set up an efficient development environment. We will also create our very first web page.');
  await Lesson.create('Basic HTML Elements','https://www.youtube.com/embed/PypMN-yui4Y?si=lBAFcCRXM9j4Hrva', 'In this video we learn what makes up an HTML element, and apply that knowledge to create an HTML about page for a musician of your choosing. By the end of this video you will have the complete HTML for the first page of this courses band website project.')
  await Lesson.create('Advanced HTML Elements','https://www.youtube.com/embed/1rbo_HHt5nw?si=5f5KKn4OmC_pQpNY', "In this video we learn what HTML elements are and how to use them in our web pages. We'll also learn about the most used type of HTML elements & meaningless elements. Lastly, we'll use that knowledge to create the home page of our band website.")
  
///////////////////////////////////////////////////////////////
  await Quiz.create('What is mandatory when naming an HTML file?', "add a '.html' at the end" , "To name it 'index'" , "To name it 'HTML'" , "Nothing" , 1)
  await Quiz.create('What is the proper way to close a tag?', "</tagname>" , "<!tagname>" , "<tagname!>" , "<tagname\>" , 1)
  await Quiz.create('How do we see our changes on our page?', "Reload the browser" , "reload your IDE" , "Restart the preview" , "Reload your terminal" , 1)
  await Quiz.create('What is the default address when we preview our code?', "127.0.0.1/localhost" , "https://preview.com" , "https://local.preview.com" , "https://localhost" , 1)
  await Quiz.create('What is “:8080” in the url?', "The port" , "The link" , "The tag" , "The rock" , 1)
////////////////////////////////////////
  await Quiz.create('?', "" , "" , "" , "" , 2)

};
