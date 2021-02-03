# Trivia Registration
![MIT License Shield](https://img.shields.io/badge/license-MIT-green?style=flat-square) 

### A static website for managing Trivia Night registrations. 
Live website: [trivia.itsryan.org](https://trivia.itsryan.org) *(hosted by [repl.it](https://repl.it))*

## Huh? 
Originally, event registration was done on a simple Google Form. Teams would fill out the form, and then the event organizers would send follow-up emails/texts by hand one at a time. This worked fine back when it was limited to 20 teams and ~90 participants. However, nowadays, with 50+ teams and 250+ participants, it's a little more tedious. 

So, enter this website. Made using an unnecessarily large number of libraries (Materialize CSS, Font Awesome, and Vue.js), it aims to hook into a Google Apps Script backend to allow users to view their registration status and edit and/or submit materials in real time. You know, like a ghetto version of [Slate](https://technolutions.com/solutions/slate). 

I don't actually expect others to use this, especially since only the front end is hosted on GitHub. The Google Form, Google Apps Script files, and Google Sheets spreadsheet are all stored separately and aren't in this repository. Nonetheless, the source code is here if you'd like to do something with it. It's licensed under the MIT license so you can nearly whatever you want. 

**Looking for the actual Trivia competition platform (instead of the registration page)?** That would be [Open Trivia](https://github.com/Ryan778/OpenTrivia), a fully open-source web server that's behind our Trivia Night events. 