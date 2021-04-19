import React from "react"
import ContentZone from "../../agility/components/ContentZone"
import { getModule } from "../../components/agility-pageModules"

const OneColumnTemplate = props => {
  return (
    <div id="main-template">
      <ContentZone name="MainContentZone" {...props} getModule={getModule} />
    </div>
  )
}
export default OneColumnTemplate
