const Path = require("path");

module.exports = (options, ctx) => {
  console.log("options:::", options);

  return {
    define: {
      HOST: options.host || "",
      FetchUrl: options.fetchUrl || "",
      IncrUrl: options.incrUrl || "",
      User: options.user || "",
      Tag: options.tag || "",
    },
    name: "vuepress-plugin-visit",
    enhanceAppFiles: Path.resolve(__dirname, "enhance_app.js"),
  };
};
