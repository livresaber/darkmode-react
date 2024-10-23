import pkg from "../package.json";

export const configApp = {
  name: "darkmode-react-component",
  npm: "https://www.npmjs.com/package/darkmode-react-component",
  github: "https://github.com/livresaber/darkmode-react",
  appVersion: pkg.version,
  reactVersion: pkg.dependencies.react.replace('^', ''),
  stepsInstall: [
    {
      name: 'Install',
      language: 'bash',
      content: 'npm install darkmode-react-component',
    },
    {
      name: 'Usage',
      language: 'tsx',
      content: `import DarkModeReact from 'darkmode-react-component'

<DarkModeReact />`,
    },
  ],
}
