const data = {
  navBar: {
    button: {
      text: "Resume",
      target:
        "https://docs.google.com/document/d/1v2XezneFL_CoUhR61u1zAOmFMJ3bFSXsI_YY7wMxOXo/edit?usp=sharing",
    },
    items: [
      {
        text: "About",
        target: "#about",
      },
      // {
      //   text: "Experience",
      //   target: "#experience",
      // },
      {
        text: "Projects",
        target: "#projects",
      },
      {
        text: "Contact",
        target: "#contact",
      },
    ],
  },
  sectionOne: {
    id: "",
    badge: "Hi, my name is",
    name: "Abolfazl Abadli",
    slogan: "I build things for the web",
    desc: "I’m a Front-End developer specializing in building single page web applications . Currently, I’m looking for a new opportunity.",
    button: {
      text: "Check my resume",
      target:
        "https://docs.google.com/document/d/1v2XezneFL_CoUhR61u1zAOmFMJ3bFSXsI_YY7wMxOXo/edit?usp=sharing",
    },
  },
  social: {
    github: "https://github.com/abdalicodes",
    instagram: "https://www.instagram.com/_abolfazlabdali/",
    twitter: "https://twitter.com/_abolfazlabdali",
    linkedin: "https://www.linkedin.com/in/abolfazl-abdali/",
    codepen: "",
  },
  email: "abolfazlabdalimore@gmail.com",
  sectionAboutMe: {
    show: true,
    id: "about",
    title: "About Me",
    desc: `<p>Hello! My name is Abolfazl and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I decided to try editing custom WordPress themes — turns out hacking together a custom  button taught me a lot about HTML &amp; CSS!</p> <p>Here are a few technologies I’ve been working with recently:</p>`,
    list: ["JavaScript", "TypeScript", "React", "Next.Js", "CSS", "Redux"],
    picture: "/me.jpg",
  },
  sectionWork: {
    show: false,
    title: "Where I’ve Worked",
    id: "experience",
    tabs: [
      {
        tabName: "Upstatement",
        content: {
          title: "Studio Developer ",
          company: { name: "Scout", link: "#" },
          date: "January - April 2018",
          contentList: [
            "Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern",
            "Helped solidify a brand direction for blistabloc that spans both packaging and web",
            "Interfaced with clients on a weekly basis, providing technological expertise",
          ],
        },
      },
      {
        tabName: "MullenLowe",
        content: {
          title: "Creative Technologist Co-op",
          company: { name: "MullenLowe", link: "#" },
          date: "July - December 2015",
          contentList: [
            "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
            "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
            "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
          ],
        },
      },
      {
        tabName: "Starry",
        content: {
          title: "Software Engineer Co-op ",
          company: { name: "Starry", link: "#" },
          date: "July - December 2016",
          contentList: [
            "Engineered and maintained major features of Starry's customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS",
            "Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry Station",
            "Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Starry’s iOS and Android mobile apps",
          ],
        },
      },
      {
        tabName: "Apple",
        content: {
          title: "UI Engineer Co-op ",
          company: { name: "Apple", link: "#" },
          date: "July - December 2017",
          contentList: [
            "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
            "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
            "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
            "Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps",
          ],
        },
      },
      {
        tabName: "Scout",
        content: {
          title: "Studio Developer",
          company: { name: "Scout", link: "#" },
          date: "January - June 2017",
          contentList: [
            "Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern",
            "Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript",
          ],
        },
      },
    ],
  },
  sectionProjects: {
    show: true,
    id: "projects",
    title: "Some Things I’ve Built",
    projects: [
      {
        image: "/spotify.jpg",
        badge: "Featured Project",
        title: "Spotify clone",
        description:
          "A Spotify-like music app build according to Spotify redesign with React.js",
        tags: ["React", "Material UI", "React Query"],
        link: "https://www.youtube.com/watch?v=qF3OSSuB3Nk",
        github: "https://github.com/abdalicodes/spotify",
        direction: "rtl",
      },
      {
        image: "/ui-ai.jpg",
        badge: "Featured Project",
        title: "UI-AI blog",
        description:
          "A multi-authoring blog where users can change their role to the author and write content",
        tags: ["React", "TypeScript", "Tailwind"],
        link: "https://ui-ai.ir",
        github: "",
        direction: "ltr",
      },
      {
        image: "/coinbase.jpg",
        badge: "Featured project",
        title: "Coinbase UI",
        description: "coinbase clone app with using React and Chakra-UI kit.",
        tags: ["React", "Chakra-UI"],
        link: "https://abdalicodes.github.io/coinbase-react/",
        github: "https://github.com/abdalicodes/coinbase-react",
        direction: "rtl",
      },
    ] as projectTypes[],
  },
  sectionMoreProjects: {
    show: true,
    title: "Other Noteworthy Projects",
    projects: [
      {
        title: "Go Movies",
        description: "Show movies and series information",
        tags: ["React", "SASS"],
        link: "https://gomovies-2021.web.app/",
        github: "https://github.com/abdalicodes/GoMovies",
      },
      {
        title: "RUNO",
        description: "Minimal SSR blog",
        tags: ["Next.JS", "Graph QL", "Tailwind"],
        link: "https://nextjs-blog-simple.herokuapp.com/",
        github: "https://github.com/abdalicodes/nextjs-graphql",
      },
      {
        title: "Netflix Clone",
        description: "This is my very first React app that looks like Netflix",
        tags: ["React"],
        link: "https://netflix-clone-22d53.web.app/",
        github: "https://github.com/abdalicodes/netflix-clone",
      },
    ],
  },
  sectionContact: {
    show: true,
    id: "contact",
    badge: "05. What's Next?",
    title: "Get In Touch",
    description:
      "My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
    button: {
      text: "Send Email",
      target: "mailto:abolfazlabdalimore@gmail.com",
    },
  },
  sectionCodingActivity: {
    title: "Coding Activity",
    number: 4,
    src: [
      "https://wakatime.com/share/@6d1942db-fe72-4cf8-bdae-485d39b2c16a/b5ed4485-3a02-4c47-803d-ba203d0cc818.svg",
      "https://wakatime.com/share/@6d1942db-fe72-4cf8-bdae-485d39b2c16a/878f25fd-1c65-4b1e-9c27-4778befaea5a.svg",
    ],
  },
};
type projectTypes = {
  image: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  direction: "rtl" | "ltr";
};
export const {
  sectionContact,
  navBar,
  email,
  social,
  sectionOne,
  sectionAboutMe,
  sectionWork,
  sectionProjects,
  sectionMoreProjects,
  sectionCodingActivity,
} = data;
export default data;
