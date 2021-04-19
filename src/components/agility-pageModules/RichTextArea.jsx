import React from "react"
import { renderHTML } from "../../agility/utils"

const RichTextArea = ({ module }) => {
  // get module fields
  const { customFields } = module

  return (
    <div className="relative px-8">
      <div className="max-w-2xl mx-auto my-12 md:mt-18 lg:mt-20">
        <div
          className="prose max-w-full mx-auto"
          dangerouslySetInnerHTML={renderHTML(customFields.textblob)}
        />
      </div>
    </div>
  )
}

export default RichTextArea
