const presets = [
  [
    "@babel/env",
    {
      targets: {
        "browsers": "cover 99.5% in CN"
      },
      useBuiltIns: "usage",
    },
  ],
];

if (process.env["ENV"] === "prod") {
	presets.push(["minify"]);
}

module.exports = { presets };