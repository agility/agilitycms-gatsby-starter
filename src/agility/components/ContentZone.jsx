import React from "react"

// this component handles resolving which module should be rendered on your page
const ContentZone = ({ name, page, dynamicPageItem }) => {
  const Modules = () => {
    let modules = []

    if (!page || page === undefined) {
      console.log("Page was not defined ", name)
    }

    const modulesForThisContentZone = page.zones[name]

    if (modulesForThisContentZone === undefined) {
      console.error(
        `Cannot render modules for zone "${name}". This does not appear to be a valid content zone for this page template.`
      )
      return
    }

    modulesForThisContentZone.forEach(moduleItem => {
      if (moduleItem.item) {
        const moduleDefName = moduleItem.item.properties.definitionName

        let ModuleComponentToRender = null

        // check for .jsx file extension
        try {
          ModuleComponentToRender = require(`../../components/agility-pageModules/${moduleDefName}.jsx`)
            .default
        } catch (err) {
          console.log(`Could not load Module: ${moduleDefName} via jsx.`)
        }
        // if no .jsx file extension, check for .js
        if (!ModuleComponentToRender) {
          try {
            ModuleComponentToRender = require(`../../components/agility-pageModules/${moduleDefName}.js`)
              .default
          } catch (err) {
            console.log(`Could not load Module: ${moduleDefName} via js.`)
          }
        }

        const moduleProps = {
          key: moduleItem.item.contentID,
          dynamicPageItem: dynamicPageItem,
          item: moduleItem.item,
          page: page,
        }

        if (ModuleComponentToRender) {
          modules.push(<ModuleComponentToRender {...moduleProps} />)
        } else {
          console.error(
            `No react component found for the module "${moduleDefName}". Cannot render module.`
          )
        }
      }
    })

    return modules
  }

  return <Modules />
}
export default ContentZone
