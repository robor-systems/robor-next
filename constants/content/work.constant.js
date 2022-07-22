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
      services: "Redesign | Technological Improvements | Frontend Development",
      //   * the header image will appear on a single case study page
      headerImage:
        "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric_header.png",
      blurHeaderImage:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAADCAIAAAAlXwkiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZklEQVQImWOIYWCIZWCIYGBY5hL79///U+s27Vuz/sru/U1xaStWrmSIZ2CoYJCJY2AoYZBaOWXmxPrmpuSsZ48eH92525dBDKQ1noEhjoEhlIGht6B0xdz57Wm5HVZ+4QysgQwMAN3iIt/UnT4AAAAAAElFTkSuQmCC",
      // * the images will appear on the work page
      workPageImageCount: 2,
      workPageImages: [
        {
          imageUrl:
            "https://robor-team.s3.eu-central-1.amazonaws.com/work/tokapi1.png",
          blurImageUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAKCAIAAAAcmWhZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjUlEQVQImQGCAH3/ABMAJRgAKA0WPAUGIgBIE2xOKWg+SGAbLz8A5Ljz1LneyK/IrJbLAJyWuoBof4xyhHdbfgDK2+S9wLzMyb3R0cgA+vT78e725+bl+Pb7AMav2KOPr4mAiMujvQD+///29vT29fL7/P0A7e7z6+vr7Ozr8vH5AB8WPSojRDQqTDocXHL0SYDj47v6AAAAAElFTkSuQmCC",
        },
        {
          imageUrl:
            "https://robor-team.s3.eu-central-1.amazonaws.com/work/tokapi2.png",
          blurImageUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAKCAIAAAAcmWhZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjUlEQVQImQGCAH3/AA8APRkQTgoNRgAEPABaEYdsXJldY4pBUXoA+/D++/b79vX1///8AMi61b2yxc7Ky87CywDQsd7Gr8mym7zHttkAlImyiHGFeVx4r561AMDO1Lu7usTBueXm3wDm1uje1+Lh3eLk3+QAyLbVuq/Cy8LL0bvUACwoRjo0T0A1WEInYvxYSru4IFhbAAAAAElFTkSuQmCC",
        },
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
        image:
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-1.svg",
        blurImage:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeElEQVQImWWMQQ7DIAwE/f8vJpeiHqKkuK0gxngBV6W5dW6rWQ0RkbvXCZjBbCK/SUQUQtj3/TxPNxQRFRlmPsalU0qYjFe61xIbIOKGS6/repu0lB+ltNZcK8yA+di2LcaYc56B3J/vrgqg966q38A/y7Icx8HMH8y4jFg0wyWrAAAAAElFTkSuQmCC",
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
      title: "Agoric AMM",
      slug: "agoric-amm",
      description:
        "A custodial NFT marketplace for a European client. The idea was to make NFTs accessible and allow any and everyone to purchase....",
    },
  },
  // * Agoric AMM
  {
    general: {
      slug: "agoric-amm",
      title: "Agoric AMM",
      description:
        "A custodial NFT marketplace for a European client making NFTs accessible and allow any and everyone to purchase NFTs.",
      clientSize: "Startup",
      location: "Portugal, Lisbon",
      services: "Redesign | Technological Improvements | Frontend Development",
      //   * the header image will appear on a single case study page
      headerImage:
        "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric_header.png",
      blurHeaderImage:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAADCAIAAAAlXwkiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZklEQVQImWOIYWCIZWCIYGBY5hL79///U+s27Vuz/sru/U1xaStWrmSIZ2CoYJCJY2AoYZBaOWXmxPrmpuSsZ48eH92525dBDKQ1noEhjoEhlIGht6B0xdz57Wm5HVZ+4QysgQwMAN3iIt/UnT4AAAAAAElFTkSuQmCC",
      // * the images will appear on the work page
      workPageImageCount: 1,
      workPageImages: [
        {
          imageUrl:
            "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-amm1.svg",
          blurImageUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmUlEQVQImVWOwQqCQBRFBb+vTzCoj2uftAmiSIgZDGWiAYfAasoWjq8nKUkwwqswkO7yHg4cR2ltSjQl5gDyu30ORfcorZ0MDBHthBh6HhFZa8/q8GoaIsrA/LA/9R3XnYW8qutoGTyr6g9vo2gwHk3Wq5sxfL54IPa4te0dMU6Sq76kx1McbHq7S8uhkLEIGQ8Zk1J2dZ+0NybtmrU9VPshAAAAAElFTkSuQmCC",
        },
      ],
    },
    sections: [
      {
        id: "agoric-about-client",
        position: 1,
        header: "Agoric AMM",
        subHeader: "About Client",
        description:
          "Agoric AMM is a - Built on Cosmos network, Agoric blockchain offers hardened JavaScript smart contracts. They're making waves in the blockchain industry and are led by some very smart individuals lorem ispum.",
      },
      {
        id: "agoric-the-challenge",
        position: 2,
        header: "Finding The Right Solution",
        subHeader: "The challenge",
        description:
          "The cosmos network based blockchain Agoric wanted us to build more DApps, so we decided to jump on the NFT bandwagon and develop a very simple baseball cards NFT marketplace. The creator could publish new projects, while users could trade the cards on the secondary marketplace.",
        // * imageCount will help us to know what image layout is needed for this section
        image:
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-1.svg",
        blurImage:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeElEQVQImWWMQQ7DIAwE/f8vJpeiHqKkuK0gxngBV6W5dW6rWQ0RkbvXCZjBbCK/SUQUQtj3/TxPNxQRFRlmPsalU0qYjFe61xIbIOKGS6/repu0lB+ltNZcK8yA+di2LcaYc56B3J/vrgqg966q38A/y7Icx8HMH8y4jFg0wyWrAAAAAElFTkSuQmCC",
      },
      {
        id: "agoric-lorem-ipsum-1",
        position: 1,
        header: "Finding The Right Solution",
        subHeader: "lorem ipsum",
        description:
          "The cosmos network based blockchain Agoric wanted us to build more DApps, so we decided to jump on the NFT bandwagon and develop a very simple baseball cards NFT marketplace. The creator could publish new projects, while users could trade the cards on the secondary marketplace.",
        image:
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-amm2.svg",
        blurImage:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAIAAADzBuo/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYUlEQVQImVXNwQ3DMAxDUe+/T+cwskLPqYAAjSSKkVzEbQL0XXj4BzYAMdE9ItR9jNFuZsZMDRzkzshMTA68XM/smUKwSoiqGhcza6sZj4m//cvPbXssy/eo9y4i74uqfgBR2YJcZlmh+QAAAABJRU5ErkJggg==",
      },
      {
        id: "agoric-lorem-ipsum-2",
        position: 1,
        header: "Finding The Right Solution",
        subHeader: "lorem ipsum",
        description:
          "The cosmos network based blockchain Agoric wanted us to build more DApps, so we decided to jump on the NFT bandwagon and develop a very simple baseball cards NFT marketplace. The creator could publish new projects, while users could trade the cards on the secondary marketplace.",
        image:
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-3.png",
        blurImage:
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/blurred-agoric-1.png",
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
  // * Agoric Baseball Card Store
  {
    general: {
      slug: "agoric-baseball",
      title: "Agoric Baseball Card Store",
      description:
        "A custodial NFT marketplace for a European client making NFTs accessible and allow any and everyone to purchase NFTs.",
      clientSize: "Startup",
      location: "Portugal, Lisbon",
      services: "Redesign | Technological Improvements | Frontend Development",
      //   * the header image will appear on a single case study page
      headerImage:
        "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric_header.png",
      blurHeaderImage:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAADCAIAAAAlXwkiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZklEQVQImWOIYWCIZWCIYGBY5hL79///U+s27Vuz/sru/U1xaStWrmSIZ2CoYJCJY2AoYZBaOWXmxPrmpuSsZ48eH92525dBDKQ1noEhjoEhlIGht6B0xdz57Wm5HVZ+4QysgQwMAN3iIt/UnT4AAAAAAElFTkSuQmCC",
      // * the images will appear on the work page
      workPageImageCount: 1,
      workPageImages: [
        {
          imageUrl:
            "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-amm1.svg",
          blurImageUrl:
            "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-amm1.svg",
        },
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
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-1.svg",
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-1.svg",
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-1.svg",
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
  // * Genesis Plot
  {
    general: {
      slug: "genesis-plot",
      title: "Genesis Plot",
      description:
        "A custodial NFT marketplace for a European client making NFTs accessible and allow any and everyone to purchase NFTs.",
      clientSize: "Startup",
      location: "Portugal, Lisbon",
      services: "Redesign | Technological Improvements | Frontend Development",
      //   * the header image will appear on a single case study page
      headerImage:
        "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric_header.png",
      blurHeaderImage:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAADCAIAAAAlXwkiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZklEQVQImWOIYWCIZWCIYGBY5hL79///U+s27Vuz/sru/U1xaStWrmSIZ2CoYJCJY2AoYZBaOWXmxPrmpuSsZ48eH92525dBDKQ1noEhjoEhlIGht6B0xdz57Wm5HVZ+4QysgQwMAN3iIt/UnT4AAAAAAElFTkSuQmCC",
      // * the images will appear on the work page
      workPageImageCount: 2,
      workPageImages: [
        {
          imageUrl:
            "https://robor-team.s3.eu-central-1.amazonaws.com/work/tokapi1.png",
          blurImageUrl:
            "https://robor-team.s3.eu-central-1.amazonaws.com/work/tokapi1.png",
        },
        {
          imageUrl:
            "https://robor-team.s3.eu-central-1.amazonaws.com/work/tokapi2.png",
          blurImageUrl:
            "https://robor-team.s3.eu-central-1.amazonaws.com/work/tokapi2.png",
        },
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
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-1.svg",
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-1.svg",
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-1.svg",
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
  // * Premium Voices
  {
    general: {
      slug: "premium-voices",
      title: "Premium Voices",
      description:
        "A custodial NFT marketplace for a European client making NFTs accessible and allow any and everyone to purchase NFTs.",
      clientSize: "Startup",
      location: "Portugal, Lisbon",
      services: "Redesign | Technological Improvements | Frontend Development",
      //   * the header image will appear on a single case study page
      headerImage:
        "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric_header.png",
      blurHeaderImage:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAADCAIAAAAlXwkiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZklEQVQImWOIYWCIZWCIYGBY5hL79///U+s27Vuz/sru/U1xaStWrmSIZ2CoYJCJY2AoYZBaOWXmxPrmpuSsZ48eH92525dBDKQ1noEhjoEhlIGht6B0xdz57Wm5HVZ+4QysgQwMAN3iIt/UnT4AAAAAAElFTkSuQmCC",
      // * the images will appear on the work page
      workPageImageCount: 1,
      workPageImages: [
        {
          imageUrl:
            "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-amm1.svg",
          blurImageUrl:
            "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-amm1.svg",
        },
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
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-1.svg",
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-1.svg",
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-1.svg",
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
  // * Kontractory
  {
    general: {
      slug: "kontractory",
      title: "Kontractory",
      description:
        "A custodial NFT marketplace for a European client making NFTs accessible and allow any and everyone to purchase NFTs.",
      clientSize: "Startup",
      location: "Portugal, Lisbon",
      services: "Redesign | Technological Improvements | Frontend Development",
      //   * the header image will appear on a single case study page
      headerImage:
        "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric_header.png",
      blurHeaderImage:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAADCAIAAAAlXwkiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZklEQVQImWOIYWCIZWCIYGBY5hL79///U+s27Vuz/sru/U1xaStWrmSIZ2CoYJCJY2AoYZBaOWXmxPrmpuSsZ48eH92525dBDKQ1noEhjoEhlIGht6B0xdz57Wm5HVZ+4QysgQwMAN3iIt/UnT4AAAAAAElFTkSuQmCC",
      // * the images will appear on the work page
      workPageImageCount: 1,
      workPageImages: [
        {
          imageUrl:
            "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-amm1.svg",
          blurImageUrl:
            "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-amm1.svg",
        },
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
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-1.svg",
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-1.svg",
          "https://robor-team.s3.eu-central-1.amazonaws.com/work/agoric-1.svg",
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
