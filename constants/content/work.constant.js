const workProjects = [
  // * Odown
  {
    general: {
      slug: "odown",
      title: "Odown",
      description:
        "Use Odown to monitor webapps, APIs and a whole lot of other things. Get notified when something goes wrong.",
      clientSize: "Startup",
      location: "Europe",
      services:
        "Redesign | Full-Stack Development | Maintenance ",
      //   * the header image will appear on a single case study page
      headerImage:
        "https://robor-team.s3.eu-central-1.amazonaws.com/work/odown-home-page.png",

      // * the images will appear on the work page
      workPageImageCount: 1,

      workPageImages: [
        {
          imageUrl:
            "https://robor-team.s3.eu-central-1.amazonaws.com/work/odown-dashboard-homepage.png",
          blurImageUrl:
            "https://robor-team.s3.eu-central-1.amazonaws.com/work/odown-dashboard-homepage-blurred.jpeg",
          width: "1414px",
          height: "816px",
          premium: "true",
        },
      ],
    },
    sections: [
      {
        id: "odown-moniotring",
        position: 1,
        header: "Monitoring web applications",
        subHeader: "About Client",
        description:
          "Providing a competitive, reliable and easy to use monitoring service for web applications. Focused on Europe, the platform complies with GDPR regulations and is built with privacy in mind. Can be viewed at Odown.com",
      },
    ]
  },
  // * Premium Voices
  {
    general: {
      slug: "premium-voices",
      title: "Premium Voices",
      description:
        "A tool for converting textual content into natural sounding voices using the latest Neural networks provided by Google and AWS.",
      clientSize: "Startup",
      location: "Christchurch, New Zealand",
      services:
        "Redesign | Technological Improvements | Full-Stack Development",
      //   * the header image will appear on a single case study page
      headerImage:
        "https://robor-team.s3.eu-central-1.amazonaws.com/work/Premium_Voices-header-cover.png",

      // * the images will appear on the work page
      workPageImageCount: 1,

      workPageImages: [
        {
          imageUrl:
            "https://robor-team.s3.eu-central-1.amazonaws.com/work/premium+voices.png",
          blurImageUrl:
            "https://robor-team.s3.eu-central-1.amazonaws.com/work/premium+voices.png",
          width: "1414px",
          height: "816px",
          premium: "true",
        },
      ],
    },
    sections: [
      {
        id: "premium-voices-client",
        position: 1,
        header: "Premium Voices",
        subHeader: "About Client",
        description:
          "Running a marketing firm out of Christchurch, our client needed a tool through which they could transform their marketing content into natural sounded voices to be embedded in their ads and other videos.",
      },
      {
        id: "agoric-the-challenge",
        position: 2,
        header: "What Do We Need?",
        subHeader: "The Idea",
        description:
          "Our client needed a system that allowed it's employees to convert their marketing content into beautiful natural sounding voices. These could then be used as background voices in videos for various purposes. Furthermore, the client wanted the system to be efficient and optimize API calls to reduce CPU wastage and decrease costs.",
        // * imageCount will help us to know what image layout is needed for this section
        image:
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/premium-challenge-section.png",
        blurImage:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeElEQVQImWWMQQ7DIAwE/f8vJpeiHqKkuK0gxngBV6W5dW6rWQ0RkbvXCZjBbCK/SUQUQtj3/TxPNxQRFRlmPsalU0qYjFe61xIbIOKGS6/repu0lB+ltNZcK8yA+di2LcaYc56B3J/vrgqg966q38A/y7Icx8HMH8y4jFg0wyWrAAAAAElFTkSuQmCC",
      },
      {
        id: "the-challenge",
        position: 3,
        header: "Finding The Right Solution",
        subHeader: "The Challenge",
        description:
          "While there are tons of text to speech systems out there, the challenge was to build a system that provided natural sounding voices while minimizing the cost of operations through efficient and smart caching to avoid repeated calls.",
        image:
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/premium-section-2.png",
        blurImage:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAIAAADzBuo/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYUlEQVQImVXNwQ3DMAxDUe+/T+cwskLPqYAAjSSKkVzEbQL0XXj4BzYAMdE9ItR9jNFuZsZMDRzkzshMTA68XM/smUKwSoiqGhcza6sZj4m//cvPbXssy/eo9y4i74uqfgBR2YJcZlmh+QAAAABJRU5ErkJggg==",
      },
      {
        id: "the-solution",
        position: 4,
        header: "Building The Right Solution",
        subHeader: "The Solution",
        description:
          "Following the guidelines provided by the client, we developed a Next.js based SPA, allowing us to use TypeScript, making the app less prone to bugs and more robust. We built a smart caching system that cached voices of paragraphs on AWS S3, making conversions faster and testing easier. The team at Christchurch has been very happy to use the system.",
        image:
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/premium-section-3.png",
        blurImage:
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/blurred-agoric-1.png",
      },
    ],
    techStack: {
      description:
        "TypeScript was a necessity here since the client wanted reliability and efficiency. Furthermore, Next.js allowed us to Server Side Rendering to make the app lightning fast. Using the light-weighted Tailwind CSS further boosted the speed of the app.",
      frontend: ["Next.js", "Tailwind"],
      backend: ["Node.js", "TypeScript", "AWS Amplify"],
      other: ["AWS Cognito", "AWS AppSync", "AWS DynamoDB", "AWS S3", "Github"],
    },

    relatedProject: {
      title: "Kontractory",
      slug: "kontractory",
      description:
        "Dealing with lawyers can be excruciating. Kontractory makes it simpler by digitising the whole process of finding the right laywer for legal advise OR skipping the lawyer altogether through  the updated contract generator.",
    },
  },
  // * Kontractory
  {
    general: {
      slug: "kontractory",
      title: "Kontractory",
      description:
        "Dealing with lawyers can be excruciating. Kontractory makes it simpler by digitising the whole process of finding the right laywer for legal advise OR skipping the lawyer altogether through  the updated contract generator.",
      clientSize: "Startup",
      location: "Vienna, Austria",
      services: "Redesign | Technological Improvements | Frontend Development",
      //   * the header image will appear on a single case study page
      headerImage:
        "https://robor-team.s3.eu-central-1.amazonaws.com/work/kontractory-header-cover.png",

      // * the images will appear on the work page
      workPageImageCount: 1,

      workPageImages: [
        {
          imageUrl:
            "https://robor-team.s3.eu-central-1.amazonaws.com/work/kontractory.png",
          blurImageUrl:
            "https://robor-team.s3.eu-central-1.amazonaws.com/work/kontractory.png",
          width: "1106px",
          height: "765px",
        },
      ],
    },
    sections: [
      {
        id: "agoric-about-client",
        position: 1,
        header: "Kontractory",
        subHeader: "About Client",
        description:
          "Dealing with lawyers can be excruciating. Kontractory makes it simpler by digitising the whole process of finding the right laywer for legal advise OR skipping the lawyer altogether through the updated contract generator.",
      },
      {
        id: "the-idea",
        position: 2,
        header: "Making Law Convenient",
        subHeader: "The Idea",
        description: `The founders had a simple questions, "How can we make the legal work more convenient?" - The answer is Kontractory.`,
        // * imageCount will help us to know what image layout is needed for this section
        image:
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/Kontractary-section-1.png",
        blurImage:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeElEQVQImWWMQQ7DIAwE/f8vJpeiHqKkuK0gxngBV6W5dW6rWQ0RkbvXCZjBbCK/SUQUQtj3/TxPNxQRFRlmPsalU0qYjFe61xIbIOKGS6/repu0lB+ltNZcK8yA+di2LcaYc56B3J/vrgqg966q38A/y7Icx8HMH8y4jFg0wyWrAAAAAElFTkSuQmCC",
      },
      {
        id: "the-challenge",
        position: 3,
        header: "Finding The Right Solution",
        subHeader: "The Challenge",
        description:
          "Apart from the usual regulatory hurdles, the biggest problem was how to make the contractor generator simple yet powerful enough to cover a wide range of contractors and their variations. There was no other answer than building a highly versatile contract generator CMS that had all possible configurations for the admin to select from. ",
        image:
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/kontractory-section2.png",
        blurImage:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAIAAADzBuo/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYUlEQVQImVXNwQ3DMAxDUe+/T+cwskLPqYAAjSSKkVzEbQL0XXj4BzYAMdE9ItR9jNFuZsZMDRzkzshMTA68XM/smUKwSoiqGhcza6sZj4m//cvPbXssy/eo9y4i74uqfgBR2YJcZlmh+QAAAABJRU5ErkJggg==",
      },
      {
        id: "the-solution",
        position: 4,
        header: "Grinding to Success",
        subHeader: "The Solution",
        description:
          "Contracts are complex, with tons of variations and possibilities. Covering everything is impossible but we developed a complex CMS that allowed the system managers to develop complex contract questionnaires that the end-users could answer to get their generated in real-time.",
        image:
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/kontractory-section-3.png",
        blurImage:
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/blurred-agoric-1.png",
      },
    ],
    techStack: {
      description:
        "The solution relied heavily on JAM stack. Instead of building everything ourselves, we built on top of an opensource CMS to improve development time and reduce reptitive code.",
      frontend: ["Next.js", "Tailwind"],
      backend: ["Node.js", "TypeScript", "AWS Amplify", "Sanity CMS"],
      other: ["AWS S3", "AWS Cognito", "AWS DynamoDB", "AWS AppSync", "Github"],
    },
    relatedProject: {
      title: "Tokapi",
      slug: "tokapi",
      description:
        "A custodial NFT marketplace for a European client. The idea was to make NFTs accessible and allow any and everyone to purchase....",
    },
  },
  // * Agoric AMM
  // {
  //   general: {
  //     slug: "agoric-amm",
  //     title: "Agoric AMM",
  //     description:
  //       "A custodial NFT marketplace for a European client making NFTs accessible and allow any and everyone to purchase NFTs.",
  //     // * used in case study page
  //     clientSize: "Startup",
  //     location: "Portugal, Lisbon",
  //     services: "Redesign | Technological Improvements | Frontend Development",
  //     //   * the header image will appear on a single case study page
  //     headerImage:
  //       "https://robor-team.s3.eu-central-1.amazonaws.com/work/Cover_-_Agoric.png",

  //     // * the images will appear on the work page
  //     workPageImageCount: 1,

  //     workPageImages: [
  //       {
  //         imageUrl:
  //           "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric.png",
  //         blurImageUrl:
  //           "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmUlEQVQImVWOwQqCQBRFBb+vTzCoj2uftAmiSIgZDGWiAYfAasoWjq8nKUkwwqswkO7yHg4cR2ltSjQl5gDyu30ORfcorZ0MDBHthBh6HhFZa8/q8GoaIsrA/LA/9R3XnYW8qutoGTyr6g9vo2gwHk3Wq5sxfL54IPa4te0dMU6Sq76kx1McbHq7S8uhkLEIGQ8Zk1J2dZ+0NybtmrU9VPshAAAAAElFTkSuQmCC",
  //         width: "1146px",
  //         height: "816px",
  //       },
  //     ],
  //   },
  //   sections: [
  //     {
  //       id: "agoric-about-client",
  //       position: 1,
  //       header: "Agoric AMM",
  //       subHeader: "About Client",
  //       description:
  //         "Agoric AMM is a - Built on Cosmos network, Agoric blockchain offers hardened JavaScript smart contracts. They're making waves in the blockchain industry and are led by some very smart individuals lorem ispum.",
  //     },
  //     {
  //       id: "agoric-the-challenge",
  //       position: 2,
  //       header: "Finding The Right Solution",
  //       subHeader: "The challenge",
  //       description:
  //         "The cosmos network based blockchain Agoric wanted us to build more DApps, so we decided to jump on the NFT bandwagon and develop a very simple baseball cards NFT marketplace. The creator could publish new projects, while users could trade the cards on the secondary marketplace.",
  //       // * imageCount will help us to know what image layout is needed for this section
  //       image:
  //         "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-1.svg",
  //       blurImage:
  //         "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeElEQVQImWWMQQ7DIAwE/f8vJpeiHqKkuK0gxngBV6W5dW6rWQ0RkbvXCZjBbCK/SUQUQtj3/TxPNxQRFRlmPsalU0qYjFe61xIbIOKGS6/repu0lB+ltNZcK8yA+di2LcaYc56B3J/vrgqg966q38A/y7Icx8HMH8y4jFg0wyWrAAAAAElFTkSuQmCC",
  //     },
  //     {
  //       id: "agoric-lorem-ipsum-1",
  //       position: 1,
  //       header: "Finding The Right Solution",
  //       subHeader: "lorem ipsum",
  //       description:
  //         "The cosmos network based blockchain Agoric wanted us to build more DApps, so we decided to jump on the NFT bandwagon and develop a very simple baseball cards NFT marketplace. The creator could publish new projects, while users could trade the cards on the secondary marketplace.",
  //       image:
  //         "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-amm2.svg",
  //       blurImage:
  //         "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAIAAADzBuo/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYUlEQVQImVXNwQ3DMAxDUe+/T+cwskLPqYAAjSSKkVzEbQL0XXj4BzYAMdE9ItR9jNFuZsZMDRzkzshMTA68XM/smUKwSoiqGhcza6sZj4m//cvPbXssy/eo9y4i74uqfgBR2YJcZlmh+QAAAABJRU5ErkJggg==",
  //     },
  //     {
  //       id: "agoric-lorem-ipsum-2",
  //       position: 1,
  //       header: "Finding The Right Solution",
  //       subHeader: "lorem ipsum",
  //       description:
  //         "The cosmos network based blockchain Agoric wanted us to build more DApps, so we decided to jump on the NFT bandwagon and develop a very simple baseball cards NFT marketplace. The creator could publish new projects, while users could trade the cards on the secondary marketplace.",
  //       image:
  //         "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-3.png",
  //       blurImage:
  //         "https://robor-team.s3.eu-central-1.amazonaws.com/work/blurred-agoric-1.png",
  //     },
  //   ],
  //   techStack: {
  //     description:
  //       "The cosmos network based blockchain Agoric wanted us to build more DApps, so we decided to jump on the NFT bandwagon and develop a very simple baseball cards NFT marketplace.",
  //     frontend: ["React", "Angular 7", "Bootstrap", "Sass"],
  //     backend: ["Node.js", "Express", "MongoDB", "Mongoose"],
  //     other: ["Cosmos SDK", "Git", "Github", "Heroku"],
  //   },
  //   relatedProject: {
  //     title: "Tokapi",
  //     slug: "tokapi",
  //     description:
  //       "A custodial NFT marketplace for a European client. The idea was to make NFTs accessible and allow any and everyone to purchase....",
  //   },
  // },
  // // * Agoric Baseball Card Store
  // {
  //   general: {
  //     slug: "agoric-baseball",
  //     title: "Agoric Baseball Card Store",
  //     description:
  //       "A custodial NFT marketplace for a European client making NFTs accessible and allow any and everyone to purchase NFTs.",
  //     clientSize: "Startup",
  //     location: "Portugal, Lisbon",
  //     services: "Redesign | Technological Improvements | Frontend Development",
  //     //   * the header image will appear on a single case study page
  //     headerImage:
  //       "https://robor-team.s3.eu-central-1.amazonaws.com/work/Agoric_BCS-cover-header.png",

  //     // * the images will appear on the work page
  //     workPageImageCount: 1,

  //     workPageImages: [
  //       {
  //         imageUrl:
  //           "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric+-+card+store.png",
  //         blurImageUrl:
  //           "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric+-+card+store.png",
  //         width: "1420px",
  //         height: "2027px",
  //       },
  //     ],
  //   },
  //   sections: [
  //     {
  //       id: "agoric-about-client",
  //       position: 1,
  //       header: "Agoric AMM",
  //       subHeader: "About Client",
  //       description:
  //         "Agoric AMM is a - Built on Cosmos network, Agoric blockchain offers hardened JavaScript smart contracts. They're making waves in the blockchain industry and are led by some very smart individuals lorem ispum.",
  //     },
  //     {
  //       id: "agoric-the-challenge",
  //       position: 2,
  //       header: "Finding The Right Solution",
  //       subHeader: "The challenge",
  //       description:
  //         "The cosmos network based blockchain Agoric wanted us to build more DApps, so we decided to jump on the NFT bandwagon and develop a very simple baseball cards NFT marketplace. The creator could publish new projects, while users could trade the cards on the secondary marketplace.",
  //       // * imageCount will help us to know what image layout is needed for this section
  //       image:
  //         "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-bs-challenge-section.png",
  //       blurImage:
  //         "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeElEQVQImWWMQQ7DIAwE/f8vJpeiHqKkuK0gxngBV6W5dW6rWQ0RkbvXCZjBbCK/SUQUQtj3/TxPNxQRFRlmPsalU0qYjFe61xIbIOKGS6/repu0lB+ltNZcK8yA+di2LcaYc56B3J/vrgqg966q38A/y7Icx8HMH8y4jFg0wyWrAAAAAElFTkSuQmCC",
  //     },
  //     {
  //       id: "agoric-lorem-ipsum-1",
  //       position: 1,
  //       header: "Finding The Right Solution",
  //       subHeader: "lorem ipsum",
  //       description:
  //         "The cosmos network based blockchain Agoric wanted us to build more DApps, so we decided to jump on the NFT bandwagon and develop a very simple baseball cards NFT marketplace. The creator could publish new projects, while users could trade the cards on the secondary marketplace.",
  //       image:
  //         "https://robor-team.s3.eu-central-1.amazonaws.com/work/agroic-bs-section-2.png",
  //       blurImage:
  //         "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAIAAADzBuo/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYUlEQVQImVXNwQ3DMAxDUe+/T+cwskLPqYAAjSSKkVzEbQL0XXj4BzYAMdE9ItR9jNFuZsZMDRzkzshMTA68XM/smUKwSoiqGhcza6sZj4m//cvPbXssy/eo9y4i74uqfgBR2YJcZlmh+QAAAABJRU5ErkJggg==",
  //     },
  //     {
  //       id: "agoric-lorem-ipsum-2",
  //       position: 1,
  //       header: "Finding The Right Solution",
  //       subHeader: "lorem ipsum",
  //       description:
  //         "The cosmos network based blockchain Agoric wanted us to build more DApps, so we decided to jump on the NFT bandwagon and develop a very simple baseball cards NFT marketplace. The creator could publish new projects, while users could trade the cards on the secondary marketplace.",
  //       image:
  //         "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-bs-section-3.png",
  //       blurImage:
  //         "https://robor-team.s3.eu-central-1.amazonaws.com/work/blurred-agoric-1.png",
  //     },
  //   ],
  //   techStack: {
  //     description:
  //       "The cosmos network based blockchain Agoric wanted us to build more DApps, so we decided to jump on the NFT bandwagon and develop a very simple baseball cards NFT marketplace.",
  //     frontend: ["React", "Angular 7", "Bootstrap", "Sass"],
  //     backend: ["Node.js", "Express", "MongoDB", "Mongoose"],
  //     other: ["Cosmos SDK", "Git", "Github", "Heroku"],
  //   },
  //   relatedProject: {
  //     title: "Tokapi",
  //     slug: "tokapi",
  //     description:
  //       "A custodial NFT marketplace for a European client. The idea was to make NFTs accessible and allow any and everyone to purchase....",
  //   },
  // },
  // // * Genesis Plot
  // {
  //   general: {
  //     slug: "genesis-plot",
  //     title: "Genesis Plot",
  //     description:
  //       "A custodial NFT marketplace for a European client making NFTs accessible and allow any and everyone to purchase NFTs.",
  //     clientSize: "Startup",
  //     location: "Portugal, Lisbon",
  //     services: "Redesign | Technological Improvements | Frontend Development",
  //     //   * the header image will appear on a single case study page
  //     headerImage:
  //       "https://robor-team.s3.eu-central-1.amazonaws.com/work/Genesis_Plots-header-cover.png",

  //     // * the images will appear on the work page
  //     workPageImageCount: 2,

  //     workPageImages: [
  //       {
  //         imageUrl:
  //           "https://robor-team.s3.eu-central-1.amazonaws.com/work/Genesis+Plot.png",
  //         blurImageUrl:
  //           "https://robor-team.s3.eu-central-1.amazonaws.com/work/Genesis+Plot.png",
  //         width: "665px",
  //         height: "746px",
  //         genesis: true,
  //       },
  //       {
  //         imageUrl:
  //           "https://robor-team.s3.eu-central-1.amazonaws.com/work/genesis-new-image.png",
  //         blurImageUrl:
  //           "https://robor-team.s3.eu-central-1.amazonaws.com/work/genesis-image-bg.png",
  //         width: "399",
  //         height: "1769",
  //         genesis: true,
  //       },
  //     ],
  //   },
  //   sections: [
  //     {
  //       id: "genesis-plots-client",
  //       position: 1,
  //       header: "Genesis Plots",
  //       subHeader: "About Client",
  //       description:
  //         "Genesis Plots is a - Built on Cosmos network, Agoric blockchain offers hardened JavaScript smart contracts. They're making waves in the blockchain industry and are led by some very smart individuals lorem ispum.",
  //     },
  //     {
  //       id: "agoric-the-challenge",
  //       position: 2,
  //       header: "Finding The Right Solution",
  //       subHeader: "The challenge",
  //       description:
  //         "The cosmos network based blockchain Agoric wanted us to build more DApps, so we decided to jump on the NFT bandwagon and develop a very simple baseball cards NFT marketplace. The creator could publish new projects, while users could trade the cards on the secondary marketplace.",
  //       // * imageCount will help us to know what image layout is needed for this section
  //       image:
  //         "https://robor-team.s3.eu-central-1.amazonaws.com/work/genesis-plots-challenge-section.png",
  //       blurImage:
  //         "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeElEQVQImWWMQQ7DIAwE/f8vJpeiHqKkuK0gxngBV6W5dW6rWQ0RkbvXCZjBbCK/SUQUQtj3/TxPNxQRFRlmPsalU0qYjFe61xIbIOKGS6/repu0lB+ltNZcK8yA+di2LcaYc56B3J/vrgqg966q38A/y7Icx8HMH8y4jFg0wyWrAAAAAElFTkSuQmCC",
  //     },
  //     {
  //       id: "agoric-lorem-ipsum-1",
  //       position: 1,
  //       header: "Finding The Right Solution",
  //       subHeader: "lorem ipsum",
  //       description:
  //         "The cosmos network based blockchain Agoric wanted us to build more DApps, so we decided to jump on the NFT bandwagon and develop a very simple baseball cards NFT marketplace. The creator could publish new projects, while users could trade the cards on the secondary marketplace.",
  //       image:
  //         "https://robor-team.s3.eu-central-1.amazonaws.com/work/genesis-plots-section-2.png",
  //       blurImage:
  //         "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAIAAADzBuo/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYUlEQVQImVXNwQ3DMAxDUe+/T+cwskLPqYAAjSSKkVzEbQL0XXj4BzYAMdE9ItR9jNFuZsZMDRzkzshMTA68XM/smUKwSoiqGhcza6sZj4m//cvPbXssy/eo9y4i74uqfgBR2YJcZlmh+QAAAABJRU5ErkJggg==",
  //     },
  //     {
  //       id: "agoric-lorem-ipsum-2",
  //       position: 1,
  //       header: "Finding The Right Solution",
  //       subHeader: "lorem ipsum",
  //       description:
  //         "The cosmos network based blockchain Agoric wanted us to build more DApps, so we decided to jump on the NFT bandwagon and develop a very simple baseball cards NFT marketplace. The creator could publish new projects, while users could trade the cards on the secondary marketplace.",
  //       image:
  //         "https://robor-team.s3.eu-central-1.amazonaws.com/work/genesis-plots-section-3.png",
  //       blurImage:
  //         "https://robor-team.s3.eu-central-1.amazonaws.com/work/genesis-plots-section-3.png",
  //     },
  //   ],
  //   techStack: {
  //     description:
  //       "The cosmos network based blockchain Agoric wanted us to build more DApps, so we decided to jump on the NFT bandwagon and develop a very simple baseball cards NFT marketplace.",
  //     frontend: ["React", "Angular 7", "Bootstrap", "Sass"],
  //     backend: ["Node.js", "Express", "MongoDB", "Mongoose"],
  //     other: ["Cosmos SDK", "Git", "Github", "Heroku"],
  //   },
  //   relatedProject: {
  //     title: "Tokapi",
  //     slug: "tokapi",
  //     description:
  //       "A custodial NFT marketplace for a European client. The idea was to make NFTs accessible and allow any and everyone to purchase....",
  //   },
  // },
];

export default workProjects;
