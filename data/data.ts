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
      {
        text: "Experience",
        target: "#experience",
      },
      {
        text: "Projects",
        target: "#projects",
      },
      {
        text: "Activity",
        target: "#activity",
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
    show: true,
    title: "Where I’ve Worked",
    id: "experience",
    tabs: [
      {
        tabName: "Freelance",
        content: {
          title: "Front-End developer",
          company: { name: "Freelance", link: "#" },
          date: "May 2021 - May 2022",
          contentList: [
            "Work with must common React ecosystem technologies including Redux, Next.js, etc",
            "Build stateful web applications",
            "Work elegantly with styling libraries and tools ",
          ],
        },
      },
      {
        tabName: "Wordpress Developer",
        content: {
          title: "WordPress developer",
          company: { name: "Freelance", link: "#" },
          date: "January 2019 - December 2020",
          contentList: [
            "Build E-commerce websites with WordPress CMS and WooCommerce plugin.",
            "Work closely with WordPress core API .e.g built in hooks.",
            "Edit and build WordPress themes and using PHP and CSS.",
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
    buttons: [
      {
        text: "📩 Send Email",
        target: "mailto:abolfazlabdalimore@gmail.com",
      },
      {
        text: `📞 WhatsApp`,
        target:
          "https://api.whatsapp.com/send/?phone=989390623327&text=Hello+Abolfazl%21+I%27ve+reached+you+through+your+personal+website.&app_absent=0",
      },
    ],
  },
  sectionCodingActivity: {
    title: "Coding Activity",
    id: "activity",
    number: 4,
    src: [
      "https://wakatime.com/share/@6d1942db-fe72-4cf8-bdae-485d39b2c16a/403afa8b-ac5c-4205-aa98-d7684d38b7eb.svg",
      "https://wakatime.com/share/@6d1942db-fe72-4cf8-bdae-485d39b2c16a/0f4586fa-7045-4a34-abc1-8e9bc6ffc662.svg",
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
