// Ignite plugin for TabView
// ----------------------------------------------------------------------------

const ReactNativeTabView = 'react-native-tab-view'
const EXAMPLE_FILE = 'TabViewExample.js'

const add = async function (context) {
  const { ignite } = context

  // install a npm module and link it
  await ignite.addModule(ReactNativeTabView)

  // copy the component example file (if examples are turned on)
  await ignite.addPluginComponentExample(EXAMPLE_FILE, { title: 'TabView Example' })

  // Example of copying templates/TabView to App/TabView
  // if (!filesystem.exists(`${APP_PATH}/App/TabView`)) {
  //   filesystem.copy(`${PLUGIN_PATH}/templates/TabView`, `${APP_PATH}/App/TabView`)
  // }

  // Example of patching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   insert: `import '../TabView/TabView'\n`,
  //   before: `export default {`
  // })
}

/**
 * Remove yourself from the project.
 */
const remove = async function (context) {
  const { ignite } = context

  // remove the npm module and unlink it
  await ignite.removeModule(ReactNativeTabView)

  // remove the component example
  await ignite.removePluginComponentExample(EXAMPLE_FILE)

  // Example of removing App/TabView folder
  // const removeTabView = await context.prompt.confirm(
  //   'Do you want to remove App/TabView?'
  // )
  // if (removeTabView) { filesystem.remove(`${APP_PATH}/App/TabView`) }

  // Example of unpatching a file
  // patching.replaceInFile(`${APP_PATH}/App/Config/AppConfig.js`, `import '../TabView/TabView'\n`, '')
}

// Required in all Ignite plugins
module.exports = { add, remove }

