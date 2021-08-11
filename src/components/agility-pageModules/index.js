import RichTextArea from "./RichTextArea"
import LandingPage from "./LandingPage"

// All of the Agility Page Module Components that are in use in this site need to be imported into this index file.
// Place Page Modules in allModules array below, passing in a name and the component.

const allModules = [
  { name: "RichTextArea", module: RichTextArea },
  { name: "LandingPage", module: LandingPage },
]

export const getModule = moduleName => {
  if (!moduleName) return null
  const obj = allModules.find(
    m => m.name.toLowerCase() === moduleName.toLowerCase()
  )
  if (!obj) return null
  return obj.module
}
