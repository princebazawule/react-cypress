module.exports = (on, config) => {
  if (config.testingType === "e2e") {
    require("@cypress/code-coverage/task")(on, config)
  }

  if (config.testingType === "component") {
    require("@cypress/react/plugins/react-scripts")(on, config)
  }
  return config
}
