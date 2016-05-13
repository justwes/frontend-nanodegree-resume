// Bio info and code
var bio = {
  "name" : "Wes Chamness",
  "role" : "Front-end Developer",
  "contacts" : {
    "email" : "justwes@email.com",
    "mobile" : "07700 900000",
    "github" : "justwes",
    "twitter" : "justwes",
    "location" : "West Lothian, Scotland"
  },
  "welcomeMessage" : "Single-origin coffee crucifix direct trade, portland bitters fanny pack 90's swag hammock. Health goth sartorial +1 shabby chic migas, small batch waistcoat irony vinyl tacos PBR&B ramps tousled. Vegan squid fixie, portland sustainable slow-carb mixtape actually put a bird on it cornhole deep v. Taxidermy etsy literally skateboard heirloom. Swag cronut neutra, gochujang four dollar toast chartreuse blue bottle lo-fi aesthetic shabby chic farm-to-table. Helvetica pinterest kickstarter truffaut yuccie single-origin coffee. Banh mi tilde retro man braid letterpress.",
  "skills" : [
    "HTML/CSS", "Javascript", "MVC", "Ruby", "Python"
  ],
  "biopic" : "images/fry.jpg"
};

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#footerContacts, #topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);
	var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMsg);
	var biopic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").prepend(biopic);

  if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for (var i = 0; i < bio.skills.length; i++) {
  		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    		$("#skills").prepend(formattedSkills);
    	}
  }
};

bio.display();

// Education info and code
var education = {
  "schools": [
    {
      "name": "Sullivan University",
      "location": "Louisville, KY, USA",
      "degree": "Associates",
      "majors": ["Programming"],
      "dates": "2006-2008",
      "url": "http://example.com"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-end Nanodegree",
      "school": "Udacity",
      "date": "March 2016",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};

education.dispaly = function () {
	for (var school in education.schools) {
		$("#education").append (HTMLschoolStart);
		var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedschoolName + formattedschoolDegree);

    var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedschoolDates);

    var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedschoolLocation);

    var formattedschoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    $(".education-entry:last").append(formattedschoolMajors);
	}

// Online course info
  if (education.onlineCourses.length > 0) {
  $("#education").append(HTMLonlineClasses);
  for (i in education.onlineCourses) {
	  $("#education").append(HTMLschoolStart);

	  var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
	  var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);

    var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
    $(".education-entry:last").append(formattedonlineDate);

    var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
    $(".education-entry:last").append(formattedonlineURL);
    }
  }
}

education.dispaly();

// Work info and code
var work = {
  "jobs": [
    {
      "employer": "Apple, Inc",
      "title": "Genius",
      "location": "Glasgow, Scotland, UK",
      "dates": "March 2012 - Current",
      "description": "Thundercats pinterest franzen, photo booth butcher yr retro roof party selfies echo park narwhal truffaut tilde slow-carb. Small batch yuccie venmo fingerstache blue bottle. Migas cornhole ennui craft beer deep v pop-up, man bun shabby chic chartreuse neutra ethical cronut kinfolk. Godard flannel schlitz hella beard DIY. Street art truffaut squid, fap keffiyeh slow-carb skateboard small batch locavore keytar everyday carry dreamcatcher single-origin coffee. Biodiesel occupy blue bottle readymade gluten-free put a bird on it pug, trust fund health goth. Waistcoat microdosing lomo cornhole."
    },
    {
      "employer": "Apple, Inc",
      "title": "Creative",
      "location": "Houston, TX, USA",
      "dates": "Oct 2010 - March 2012",
      "description": "Thundercats pinterest franzen, photo booth butcher yr retro roof party selfies echo park narwhal truffaut tilde slow-carb. Small batch yuccie venmo fingerstache blue bottle. Migas cornhole ennui craft beer deep v pop-up, man bun shabby chic chartreuse neutra ethical cronut kinfolk. Godard flannel schlitz hella beard DIY. Street art truffaut squid, fap keffiyeh slow-carb skateboard small batch locavore keytar everyday carry dreamcatcher single-origin coffee. Biodiesel occupy blue bottle readymade gluten-free put a bird on it pug, trust fund health goth. Waistcoat microdosing lomo cornhole."
    },
    {
      "employer": "UPS Supply Chain Solutions",
      "title": "Computer Repair Technician",
      "location": "Louisville, KY, USA",
      "dates": "Dec 2009 - May 2010",
      "description": "Pop-up selfies austin tousled, sartorial narwhal squid you probably haven't heard of them pork belly hammock vegan intelligentsia man bun crucifix. Austin typewriter mixtape, blog cold-pressed tousled church-key migas blue bottle. Banh mi normcore mlkshk yr crucifix, locavore bespoke sriracha umami twee pabst. Next level kitsch gluten-free ennui drinking vinegar slow-carb. XOXO pitchfork leggings salvia, next level whatever try-hard craft beer. Keytar drinking vinegar offal, crucifix cliche selvage man braid waistcoat deep v semiotics polaroid sartorial taxidermy meh. Retro paleo salvia readymade tattooed, everyday carry swag post-ironic cronut celiac gentrify before they sold out"
    },
    {
      "employer": "Kindred Healthcare, Inc",
      "title": "Change Management Analyst",
      "location": "Louisville, KY, USA",
      "dates": "2008",
      "description": "Chartreuse vice hoodie, post-ironic freegan artisan echo park viral man braid sartorial health goth. Wayfarers meggings poutine, 90's kogi forage hella umami. PBR&B 8-bit fixie trust fund mumblecore. Chia taxidermy iPhone beard pork belly. Occupy godard williamsburg kickstarter, mlkshk messenger bag gochujang keytar roof party green juice lo-fi ramps small batch craft beer vinyl. Neutra sriracha drinking vinegar, selvage 8-bit you probably haven't heard of them mixtape distillery brooklyn thundercats forage ugh occupy godard. Marfa sartorial cold-pressed tofu meh raw denim, dreamcatcher green juice trust fund echo park fap single-origin coffee."
    },
    {
      "employer": "Insight Communications, Inc",
      "title": "Change Management Analyst",
      "location": "Louisville, KY, USA",
      "dates": "2002 - 2008",
      "description": "Pinterest craft beer marfa hoodie tattooed freegan, kale chips asymmetrical. Helvetica cred paleo, readymade cronut portland fixie. Disrupt lumbersexual ramps food truck chartreuse. Retro fap four loko jean shorts, pitchfork viral gochujang. Fixie letterpress chambray typewriter, +1 everyday carry ramps man bun vegan franzen. Venmo flannel fanny pack tote bag wayfarers cardigan. Four dollar toast trust fund seitan scenester, farm-to-table sustainable schlitz kale chips mlkshk cliche cray asymmetrical gochujang post-ironic street art."
    },
    {
      "employer": "US Navy",
      "title": "Machinest Mate 3rd Class",
      "location": "Mayport, FL, USA",
      "dates": "1996 - 2001",
      "description": "Skateboard meggings wayfarers, scenester polaroid vinyl butcher migas trust fund man braid VHS offal bitters listicle. Distillery chillwave umami, health goth banjo photo booth selfies 90's scenester. Letterpress freegan PBR&B, thundercats tofu retro mlkshk cred brooklyn tacos knausgaard. Literally tumblr venmo four loko migas etsy. Gochujang shabby chic mumblecore fanny pack bitters kickstarter yr, pork belly typewriter jean shorts fixie ennui. Readymade yr meggings, cardigan roof party gentrify banh mi fashion axe kitsch art party kickstarter raw denim lumbersexual. Chambray gluten-free raw denim, four dollar toast ugh post-ironic meditation pug before they sold out poutine."
    }
  ]
};

work.display = function() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedDescription;

    $(".work-entry:last").append(formattedEmployerTitle);
  }
}

work.display();

// Project info and code
var projects = {
  "projects": [
    {
    "title": "title1",
    "dates": "2016",
    "images": [" "],
    "description": "Ennui direct trade beard normcore, williamsburg church-key knausgaard paleo PBR&B gochujang leggings green juice wolf pitchfork. Pitchfork blue bottle kombucha vinyl humblebrag. Squid polaroid health goth heirloom, fashion axe tilde man bun gluten-free freegan cold-pressed disrupt direct trade meditation biodiesel. Wayfarers flannel normcore blue bottle cornhole, typewriter letterpress pinterest. Mixtape seitan disrupt organic, ethical food truck mustache. Disrupt photo booth artisan, meh kinfolk post-ironic ramps hashtag salvia neutra lo-fi beard ennui synth meggings. Polaroid franzen blog health goth chicharrones."
    },
    {
    "title": "title2",
    "dates": "2015",
    "images": [" "],
    "description": "Williamsburg cray asymmetrical quinoa tumblr echo park ugh, fingerstache venmo selvage. Tumblr trust fund bushwick paleo twee pop-up, man braid organic raw denim leggings migas retro pickled. Offal leggings irony, kinfolk pop-up intelligentsia aesthetic everyday carry +1 PBR&B. Hella pickled polaroid normcore. Celiac scenester blue bottle, viral chicharrones cred cliche letterpress wolf readymade venmo 90's pickled sustainable squid. Blog try-hard man braid vice pork belly pug, aesthetic waistcoat meditation chambray art party twee banh mi locavore. Hashtag tofu pour-over yuccie salvia letterpress."
    }
  ]
};

projects.display = function() {
  for (var project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
// Commented out as I have no images to display for the projects
    // if (projects.projects[project].images.length > 0) {
    //   for (image in projects.projects[project].images) {
    //     var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
    //     $(".project-entry:last").append(formattedImage);
    //   }
    // }
  }
}

projects.display();

// Google map display
$("#mapDiv").append(googleMap);

// ****** Unused code ******

// function locationizer(work_obj) {
//   var locationArray = [];
//
//   for (job in work_obj.jobs) {
//     var newLocation = work_obj.jobs[job].location;
//     locationArray.push(newLocation);
//   }
//
//   return locationArray;
// }

// Function to allow name format changes via button on site
// function inName() {
//   var name = window.name;
//   name = name.trim().split(" ");
//   console.log(name);
//   name[1] = name[1].toUpperCase();
//   name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//
//   return name[0] +" "+ name[1];
// }

// var name = $("#name").text();
// Format change button
// $('#main').append(internationalizeButton);
