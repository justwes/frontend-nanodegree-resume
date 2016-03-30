/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
  "name" : "Wes Chamness",
  "role" : "Front End Developer",
  "contacts" : {
    "email" : "justwes@gmail.com",
    "github" : "justwes",
    "twitter" : "justwes",
    "location" : "Scotland"
  },
  "welcomeMessage" : "Kogi DIY tilde next level. Thundercats actually pickled fanny pack. Freegan pug knausgaard, DIY art party bicycle rights sartorial leggings gochujang scenester pour-over salvia meditation umami.",
  "skills" : [
    "father", "photographer",
  ],
  "bioPic" : "images/fry.jpg"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
HTMLemail

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPic);

$("#footerContacts").prepend(formattedGithub);
$("#footerContacts").prepend(formattedTwitter);
$("#topContacts").prepend(formattedEmail);
// $("#header").prepend(formattedName);
// $("#header").prepend(formattedName);
// $("#header").prepend(formattedName);
// $("#header").prepend(formattedName);
// $("#main").append(bio.name);
