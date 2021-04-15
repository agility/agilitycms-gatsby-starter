import React from "react"
import ContentZone from "../../agility/components/ContentZone"

const OneColumnTemplate = props => {
  return (
    <div id="main-template">
      <ContentZone name="MainContentZone" {...props} />
    </div>
  )
}
export default OneColumnTemplate
