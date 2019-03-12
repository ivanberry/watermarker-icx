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

module.exports = { presets };