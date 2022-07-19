const workProjects = [
  //  * Tokapi
  {
    general: {
      slug: "tokapi",
      title: "Tokapi",
      description:
        "A custodial NFT marketplace for a European client making NFTs accessible and allow any and everyone to purchase NFTs.",
      clientSize: "Startup",
      location: "Portugal, Lisbon",
      Services: "Redesign | Technological Improvements | Frontend Development",
      //   * the header image will appear on a single case study page
      headerImage: "https://i.imgur.com/qXqQq.png",
      // * the images will appear on the work page
      workPageImageCount: 2,
      workPageImages: [
        "https://i.imgur.com/qXqQq.png",
        "https://i.imgur.com/qXqQq.png",
      ],
    },
    sections: [
      {
        position: 1,
        header: "Finding The Right Solution",
        subHeader: "The challenge",
        description:
          "The cosmos network based blockchain Agoric wanted us to build more DApps, so we decided to jump on the NFT bandwagon and develop a very simple baseball cards NFT marketplace. The creator could publish new projects, while users could trade the cards on the secondary marketplace.",
        // * imageCount will help us to know what image layout is needed for this section
        imageCount: 3,
        images: [
          "https://i.imgur.com/qXqQq.png",
          "https://i.imgur.com/qXqQq.png",
          "https://i.imgur.com/qXqQq.png",
        ],
      },
    ],
    techStack: {
      description:
        "The cosmos network based blockchain Agoric wanted us to build more DApps, so we decided to jump on the NFT bandwagon and develop a very simple baseball cards NFT marketplace.",
      frontend: ["React", "Angular 7", "Bootstrap", "Sass"],
      backend: ["Node.js", "Express", "MongoDB", "Mongoose"],
      other: ["Cosmos SDK", "Git", "Github", "Heroku"],
    },
    relatedProject: {
      title: "Tokapi",
      slug: "tokapi",
      description:
        "A custodial NFT marketplace for a European client. The idea was to make NFTs accessible and allow any and everyone to purchase....",
    },
  },
];

export default workProjects;
