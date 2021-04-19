import React from "react"

// the content zone handles resolving which modules should be rendered on the page
export const ContentZone = ({
  name,
  dynamicPageItem,
  languageCode,
  isMultiLanguage,
  getModule,
  page,
}) => {
  const RenderModules = () => {
    if (!page) return null

    let modules = page.zones[name]

    const modulesToRender = modules.map(m => {
      const AgilityModule = getModule(m.module)

      let props = {
        page,
        dynamicPageItem,
        module: m.item,
        languageCode,
        isMultiLanguage,
      }

      if (AgilityModule) {
        return <AgilityModule key={m.item.contentID} {...props} />
      } else {
        throw new Error(
          `React Component for ${m.moduleName} was not found in the Agility Modules list.`
        )
      }
    })
    return modulesToRender
  }
  return <RenderModules />
}

export default ContentZone
