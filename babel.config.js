module.exports = function(api) {
  api.cache(true);

  const presets = [
    // [
    //   [
    //     "@babel/preset-env",
    //     {
    //       targets: {
    //         edge: "17",
    //         firefox: "60",
    //         chrome: "67",
    //         safari: "11.1"
    //       }
    //     }
    //   ],
    //   {
    //     targets: {
    //       esmodules: true
    //     }
    //   }
    // ],
    // "@babel/preset-react"
  ];
  const plugins = [
    // ["@babel/plugin-proposal-decorators", { legacy: true }]
    // "@babel/plugin-transform-typescript"
  ];

  return {
    presets,
    plugins
  };
};
