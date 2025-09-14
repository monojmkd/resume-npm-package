#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import link from "terminal-link";

const resume = {
  name: "Monoj Kumar Das",
  title: "Full-Stack Developer",
  location: "Assam, India",
  email: "monoj.mkd@hotmail.com",
  phone: "+91-9707741308",
  linkedin: "https://linkedin.com/in/monoj-kumar-das-019340a9",
  github: "https://github.com/monojmkd",
  website: "https://monojkumardas.in/",
  summary:
    "A fullstack developer passionate about crafting elegant solutions for complex problems. My journey in tech has been fueled by curiosity, creativity, and a love for impactful design.",
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Testing",
    "Git",
  ],
  experience: [
    {
      company: "Borgos Technologies, Guwahati",
      role: "Software Developer",
      duration: "2019-2020",
      bullets: [
        "Developed and deployed scalable software products, ensuring adherence to best practices for optimal performance and reliability.",
        "Collaborated with cross-functional teams, leading to a 25% increase in project efficiency and timely delivery.",
        "Improved software efficiency by 30% through effective troubleshooting and code optimization.",
        "Produced software for desktop and mobile OS, utilizing Webpack for module bundling and RESTful APIs for seamless data integration.",
      ],
    },
  ],
  education: [
    {
      institute: "Assam Science & Technology University, Guwahati",
      degree: "B.Tech in Computer Science & Engineering",
      duration: "2014 — 2019",
    },
  ],
  projects: [
    {
      name: "TaazaKhabr",
      description:
        "Built with Node.js and Express, leveraging the inshorts-news-api npm package to fetch and serve fresh news across multiple categories through a REST API.\n  Its frontend is developed in React, featuring a modern, responsive UI with card-based layouts, dynamic routing for categories",
      link: "https://taazakhabr-news.vercel.app/",
    },
    {
      name: "Recipe Management API",
      description:
        "A simple, robust RESTful API built with Node.js, Express, and MongoDB (via Mongoose) for managing recipes.",
      link: "https://github.com/monojmkd/recipes-backend-mongoose",
    },
  ],
};

function printHeader() {
  const title =
    chalk.bold.green(resume.name) + " — " + chalk.cyan(resume.title);

  // Make contact links clickable
  const emailLink = link(resume.email, `mailto:${resume.email}`);
  const linkedinLink = link("LinkedIn Profile:", resume.linkedin);
  const githubLink = link("GitHub:", resume.github);
  const websiteLink = link("Portfolio:", resume.website);

  const contact = `${chalk.gray("📍 Location:")} ${
    resume.location
  }  ${chalk.gray("📧 Email:")} ${emailLink}
${chalk.gray("📱 Phone:")} ${resume.phone}
${chalk.gray()}${linkedinLink}  ${chalk.gray()}${githubLink}  ${chalk.gray(
    "🌐 "
  )}${websiteLink}`;

  console.log(
    boxen(`${title}\n\n${contact}`, {
      padding: 1,
      margin: 1,
      borderStyle: "round",
      borderColor: "cyan",
    })
  );
}

function printSection(title, emoji = "") {
  console.log(chalk.bold.yellow(`${emoji} ${title.toUpperCase()}`));
  console.log(chalk.gray("─".repeat(title.length + 3)));
}

function printSummary() {
  console.log(resume.summary + "\n");
}

function printSkills() {
  console.log(resume.skills.join(" • ") + "\n");
}

function printExperience() {
  resume.experience.forEach((exp) => {
    console.log(
      chalk.bold.white(exp.role) +
        chalk.gray(" @ ") +
        chalk.blue(exp.company) +
        "  " +
        chalk.italic.gray(`(${exp.duration})`)
    );
    exp.bullets.forEach((bullet) => {
      console.log("  " + chalk.green("▸") + " " + bullet);
    });
    console.log("");
  });
}

function printEducation() {
  resume.education.forEach((ed) => {
    console.log(chalk.bold.white(ed.degree));
    console.log(
      chalk.gray("🏫 ") +
        ed.institute +
        "  " +
        chalk.italic.gray(`(${ed.duration})`)
    );
  });
  console.log("");
}

function printProjects() {
  resume.projects.forEach((project) => {
    console.log(chalk.bold.white(project.name));
    console.log("  " + chalk.gray(project.description));
    console.log("  " + chalk.cyan(project.link) + "\n");
  });
}

function footer() {
  const thanksMessage = chalk.gray("Thank you for viewing my resume! 🙏");
  const contactMessage = chalk.cyan(
    "Feel free to reach out for opportunities or collaborations."
  );

  console.log(
    boxen(`${thanksMessage}\n${contactMessage}`, {
      padding: 1,
      borderStyle: "round",
      borderColor: "green",
      textAlignment: "center",
    })
  );
}

function run() {
  console.clear();

  printHeader();

  printSection("Summary", "📝");
  printSummary();

  printSection("Skills", "🚀");
  printSkills();

  printSection("Experience", "💼");
  printExperience();

  printSection("Education", "🎓");
  printEducation();

  printSection("Projects", "📂");
  printProjects();

  footer();
}

run();
