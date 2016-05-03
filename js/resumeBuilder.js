/*
This is empty on purpose! Your code to build the resume will go here.
 */

// Site data starts here

var bio = {
  "name" : "Wes Chamness",
  "role" : "Front-end Developer",
  "contacts" : {
    "email" : "justwes@gmail.com",
    "github" : "justwes",
    "twitter" : "justwes",
    "location" : "West Lothian, Scotland"
  },
  "welcomeMessage" : "Kogi DIY tilde next level. Thundercats actually pickled fanny pack. Freegan pug knausgaard, DIY art party bicycle rights sartorial leggings gochujang scenester pour-over salvia meditation umami.",
  "skills" : [
    "Father", "Photographer", "Cook", "Avid Reader"
  ],
  "bioPic" : "images/fry.jpg"
};

var education = {
  "schools": [
    {
      "name": "Sullivan University",
      "location": "Louisville, KY, USA",
      "degree": "Associates",
      "majors": "Programming",
      "dates": "2006-2008",
      "url": "http://example.com"
    }
  ],
  "onlineCourses": [
    {
      "title": "title",
      "school": "school",
      "dates": "dates",
      "url": "http://example.com"
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer": "Apple, Inc",
      "title": "Genius",
      "location": "Houston, TX, USA and Glasgow, Scotland, UK",
      "dates": "Oct 2010 - Current",
      "description": "Kogi DIY tilde next level. Thundercats actually pickled fanny pack. Freegan pug knausgaard, DIY art party bicycle rights sartorial leggings gochujang scenester pour-over salvia meditation umami."
    },
    {
      "employer": "UPS Supply Chain Solutions",
      "title": "Computer Repair Technician",
      "location": "Louisville, KY, USA",
      "dates": "Dec 2009 - May 2010",
      "description": "Kogi DIY tilde next level. Thundercats actually pickled fanny pack. Freegan pug knausgaard, DIY art party bicycle rights sartorial leggings gochujang scenester pour-over salvia meditation umami."
    },
    {
      "employer": "Kindred Healthcare, Inc",
      "title": "Change Management Analyst",
      "location": "Louisville, KY, USA",
      "dates": "2008",
      "description": "Kogi DIY tilde next level. Thundercats actually pickled fanny pack. Freegan pug knausgaard, DIY art party bicycle rights sartorial leggings gochujang scenester pour-over salvia meditation umami."
    },
    {
      "employer": "Insight Communications, Inc",
      "title": "Change Management Analyst",
      "location": "Louisville, KY, USA",
      "dates": "2002 - 2008",
      "description": "Kogi DIY tilde next level. Thundercats actually pickled fanny pack. Freegan pug knausgaard, DIY art party bicycle rights sartorial leggings gochujang scenester pour-over salvia meditation umami."
    },
    {
      "employer": "US Navy",
      "title": "Machinest Mate 3rd Class",
      "location": "Mayport, FL, USA",
      "dates": "1996 - 2001",
      "description": "Kogi DIY tilde next level. Thundercats actually pickled fanny pack. Freegan pug knausgaard, DIY art party bicycle rights sartorial leggings gochujang scenester pour-over salvia meditation umami."
    }
  ]
};

var projects = {
  "projects": [
    {
    "title": "title",
    "dates": "dates",
    "images": " ",
    "description": "Kogi DIY tilde next level. Thundercats actually pickled fanny pack. Freegan pug knausgaard, DIY art party bicycle rights sartorial leggings gochujang scenester pour-over salvia meditation umami."
    },
    {
    "title": "title",
    "dates": "dates",
    "images": " ",
    "description": "Kogi DIY tilde next level. Thundercats actually pickled fanny pack. Freegan pug knausgaard, DIY art party bicycle rights sartorial leggings gochujang scenester pour-over salvia meditation umami."
    }
  ],
};

// Scripts to load data start here

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

$("#topContacts").prepend(formattedTwitter);

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedDescription;

    $(".work-entry:last").append(formattedEmployerTitle);
  }
}

function locationizer(work_obj) {
  var locationArray = [];

  for (job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }

  return locationArray;
}

// TODO: change bio to for loop if possible

if(bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
};

// Function to allow name format changes via button on site
function inName() {
  var name = window.name;
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] +" "+ name[1];
}

 // Projects display fucntion
function projectsDisplay() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
// Commented out as I have no images to display for the projects
    // if (projects.projects[project].images.length > 0) {
    //   for (image in projects.projects[project].images) {
    //     var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
    //     $(".project-entry:last").append(formattedImage);
    //   }
    // }
  }
};

var name = $("#name").text();
// Format change button
// $('#main').append(internationalizeButton);


// Run fucntions at end
$("#mapDiv").append(googleMap);
displayWork();
projectsDisplay();
