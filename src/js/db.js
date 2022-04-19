export const user =
{
  id: 1,
  firstname: "Reza",
  lastname: "Hossaini",
  Email: "Hos18672@spengergasse.com",
  tel: "06704099219",
 aboutMe :
    "Hello, my name is Reza Hossaini and I live in Vienna in Austria. I develop front-end applications. I am currently attending Coding School Wörthersee as a web development student with the goal to learn CSS, HTML, Javascript and one of the best web frameworks and will graduate from HTL Spengerasse this summer.",
  works: [
    {
      id: 1,
      title: "Liferando",
      date: "2022-2",
      description: "Working as a Delivery driver by Liferando.",
    },
    {
      id: 2,
      title: "Reintegra",
      date: "2021-4",
      description: "Working as a Warehouse employee be Reintegra company.",
    },
    {
      id: 3,
      title: "Bauhaus",
      date: "2020-1",
      description: "Working as a Warehouse employee be Bauhaus company.",
    },
    {
      id: 4,
      title: "Internship",
      date: "2014-2",
      description: "Working as a Schweißer by Alizadeh Holding im Iran. ",
    },
  ],
  educations: [
    {
      id: 1,
      title: "Coding School",
      date: "2022-3 -2022-9",
      description:
        "Learn web development from the basics to the advanced level in the programming school Wörthersee.",
    },

    {
      id: 2,
      title: "HTL Spengergasse",
      date: "2027 - 2022",
      description:
        "Education as an IT student at the HTL Spengergasse in Vienna.",
    },

    {
      id: 3,
      title: "Pflichtschulabschluss",
      date: "2016 - 2017",
      description: "Pflichtschulabschluss  by UKI in Vienna.",
    },
  ],

  projects: [
    {
      id: 1,
      title: "Personal Portfolio",
      date: "2022-3",
      description: "My first personal portfolio website.",
      webLink: "https://www.rezahossaini.de/",
      githubLink: "https://github.com/Hos18672/Personal-Portfolio",
      img: (function() {
        var img = new Image();
        img.src = "https://github.com/Hos18672/PersonalProtfolio2022-4/blob/master/src/images/portfolio.png?raw=true";
        return img;
      })()
    },

    {
      id: 2,
      title: "My Fitness Note",
      date: "2021",
      description:
        "My Fitness Note is an Android app that is my first Android project for school. It provides the user with a chat box and the user can save their training data and plan their training there. ",
      githubLink: "https://github.com/Hos18672/MyFitnessNote",
      img: Object.assign(new Image, {
        src: "https://github.com/Hos18672/PersonalProtfolio2022-4/blob/master/src/images/mfn.png?raw=true"
      })
    },

    {
      id: 3,
      title: "Graph programm",
      date: "2020",
      description:
        "The Graph programme is another school project I developed with Java.",
      githubLink: "https://github.com/Hos18672/GarphTheory",
      img: Object.assign(new Image, {
        src: "https://github.com/Hos18672/PersonalProtfolio2022-4/blob/master/src/images/graph.png?raw=true"
      })
    },

    {
      id: 4,
      title: "Neumorphism Calculator",
      date: "2020",
      description:
        "The Neumorphism Calculator is my second web project developed only with CSS and HTML.",
      webLink: "https://codepen.io/hos18672/pen/WNZqRyK",
      githubLink: "https://github.com/Hos18672/Calculator",
      img: Object.assign(new Image, {
        src: "https://github.com/Hos18672/PersonalProtfolio2022-4/blob/master/src/images/cal.png?raw=true"
      })
    },
  ],
  socials:{
      linkedIn: 'https://www.linkedin.com/in/reza-hossaini-bb5ab614b/?originalSubdomain=at',
      xing: 'https://www.xing.com/profile/reza_hosseini15',
      facebook: 'https://www.facebook.com/profile.php?id=100008372049580'
  }
};
