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
    "father", "photographer"
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
      "employer": "US Navy",
      "title": "Machinest Mate 3rd Class",
      "location": "Mayport, FL, USA",
      "dates": "1996 - 2001",
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
      "employer": "Kindred Healthcare, Inc",
      "title": "Change Management Analyst",
      "location": "Louisville, KY, USA",
      "dates": "2008",
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
      "employer": "Apple, Inc",
      "title": "Genius",
      "location": "Houston, TX, USA and Glasgow, Scotland, UK",
      "dates": "Oct 2010 - Current",
      "description": "Kogi DIY tilde next level. Thundercats actually pickled fanny pack. Freegan pug knausgaard, DIY art party bicycle rights sartorial leggings gochujang scenester pour-over salvia meditation umami."
    },
  ]
};

var projects = {
  "projects": [
    {
    "title": "title",
    "dates": "dates",
    "description": "Kogi DIY tilde next level. Thundercats actually pickled fanny pack. Freegan pug knausgaard, DIY art party bicycle rights sartorial leggings gochujang scenester pour-over salvia meditation umami."
    },
    {
    "title": "title",
    "dates": "dates",
    "description": "Kogi DIY tilde next level. Thundercats actually pickled fanny pack. Freegan pug knausgaard, DIY art party bicycle rights sartorial leggings gochujang scenester pour-over salvia meditation umami."
    }
  ]
};

for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);
}





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
