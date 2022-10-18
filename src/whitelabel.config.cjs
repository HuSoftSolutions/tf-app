import path from "path";

const getWhitelabelAliases = (mode) => {
  console.log(`configuring white label aliases for ${mode}...`);

  const interchangeables = {
    variables: {
      base: "./assets/css/variables.css",
      thebunker: "./assets/css/templates/thebunker/variables.css",
    },
    navbar: {
      base: "./components/navigation/NavBar.vue",
      thebunker: "./components/navigation/templates/thebunker/NavBar.vue",
    },
  };

  const whitelabelAliases = {};

  Object.keys(interchangeables).forEach((key) => {
    whitelabelAliases[key] = path.resolve(
      __dirname,
      `${interchangeables[key][mode]}`
    );
  });

  return whitelabelAliases;
};

export default getWhitelabelAliases;
