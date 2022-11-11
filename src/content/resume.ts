const dateFormatter = new Intl.DateTimeFormat("default", {
  month: "short",
  year: "2-digit",
});

export const resumeData = {
  firstName: "Adham",
  lastName: "Zaki",
  experience: [
    {
      title: "Konrad Group",
      subtitle: "Full Stack Developer",
      startTime: dateFormatter.format(new Date(2020, 5)),
      skills: ["React", "Next.js", "Typescript", "Sass", "Node", "AWS"],
      text: [
        "Developed 10+ responsive full-stack web applications that interact with multiple APIs and databases.",
        "Created a customized online shopping experience for [Equinox+](https://www.equinoxplus.com/) using **Stripe** and **Shopify**",
        "Implemented user authentication and integrated with **Maps API** to display nearby car dealerships and service stations for [Kia.ca](https://www.kia.ca/)",
        "Streamlined database migration process by automating repetitive tasks, reducing total migration time from **8 hours to 30 minutes**",
      ],
    },
    {
      title: "Cancer Care Ontario",
      subtitle: "Full Stack Developer",
      startTime: dateFormatter.format(new Date(2019, 7)),
      endTime: dateFormatter.format(new Date(2020, 3)),
      skills: ["HTML", "CSS", "Javascript", "Firebase", "Netlify"],
      text: [
        "Data analysis and shareability of cancer operative reports are hindered due to non-standard storage solutions (often still on paper)",
        "Developed a real-time collaborative surgical report builder allowing for live edits and feedback based on [Synoptic Reporting](https://www.softworksgroup.com/synoptec-blog/what-is-synoptic-reporting/) standards",
        "**Saved 20 hours per week** of manual work involved in sharing reports and collecting feedback via email. Reduced the total time of generating a report from **one year to 6 months**",
      ],
    },
    {
      title: "Procter & Gamble",
      subtitle: "Web & Search Analyst",
      startTime: dateFormatter.format(new Date(2018, 4)),
      endTime: dateFormatter.format(new Date(2018, 9)),
      skills: ["Java", "Javascript", "Google Analytics", "Postman"],
      text: [
        "Search Engine Optimization (SEO) is partly achieved through scoring well on webpage performance audits such as [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)",
        "Built an automated tool to run Lighthouse audits on 500+ marketing pages and generate actionable recommendations",
        "Collaborated with brand teams to implement the findings, increasing overall web **traffic by 20%** and **improving search ranking by ~2**",
        // Context: " Auditing the performance of the current digital marketing strategy (how we are spending the ad budget)",
        // Context: " Combine current budget distribution, web traffic data, and ad performance to identify high and low-value advertisement channels and optimize the budget accordingly.",
        // `**R:** Increased ad performance [(CTR)](https://support.google.com/google-ads/answer/2615875 "Click Through Rate") by 15% overall without any additional funding.`,
      ],
    },
  ],
  education: {
    title: "University of Toronto",
    subtitle: "Industrial Engineering",
    startTime: dateFormatter.format(new Date(2015, 8)),
    endTime: dateFormatter.format(new Date(2020, 5)),
    text: [
      "Graduated with Honours",
      "Minor in Artificial Intelligence Engineering",
    ],
    logo: ["UofT Logo"],
  },

  projects: [
    {
      title: "TurboMenu",
      url: "https://turbo.menu",
      skills: ["React", "Gatsby", "Firebase", "Netlify", "Sass", "Git"],
      text: [
        `Developed a free and [open-source](https://github.com/azakiio/turbomenu) tool to create and host contactless menus for use in restaurants during the pandemic.`,
        `35,000+ menus accessed in last year; in use at [Beavertails](https://turbo.menu/beavertails), [Foxley Bistro](https://turbo.menu/foxley), and [Patagonia](https://turbo.menu/patagonia)`,
      ],
    },
    {
      title: "Where's Waldo Finder",
      url: "",
      skills: ["Python", "PyTorch", "Jupyter"],
      text: [
        `Trained a machine learning model to solve *Where's Waldo?* puzzles`,
        "Collected and processed 100+ puzzles to generate model inputs",
        `Analyzed and tuned model, achieving a success rate of >80% on previously unseen puzzles`,
      ],
    },
    {
      title: "Diversify.io",
      url: "https://website-azakiio.vercel.app/",
      skills: ["Vue", "Nuxt", "Vercel", "Tailwind"],
      text: [
        `Building and maintaining the website for a DAO specializing in diversified investment pools`,
        `Writing, deploying, and interacting with smart contracts on the Ethereum blockchain using [Solidity](https://soliditylang.org/), [Hardhat](https://hardhat.org/), and [ethers.js](https://docs.ethers.io/v5/)`,
      ],
    },
  ],
};
