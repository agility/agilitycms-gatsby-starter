import React from "react"
import { AgilityImage } from "@agility/gatsby-image-agilitycms"
import { renderHTML } from "../../agility/utils"

const PostDetails = ({ dynamicPageItem }) => {
  // get post fields
  const { customFields } = dynamicPageItem

  // category
  const category = customFields.category.customFields.title || "Uncategorized"

  // date
  const dateStr = new Date(customFields.date).toLocaleDateString()

  return (
    <div className="relative px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="h-64 md:h-96 relative">
          <AgilityImage
            image={customFields.image}
            className="object-cover object-center rounded-lg"
            style={{ height: "100%" }}
            layout="fullWidth"
          />
        </div>
        <div className="max-w-2xl mx-auto mt-4">
          <div className="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose">
            {category}
          </div>
          <div className="border-b-2 border-primary-500 w-8"></div>
          <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
            {dateStr}
          </div>
          <h1 className="font-display text-4xl font-bold my-6 text-secondary-500">
            {customFields.title}
          </h1>
          <div
            className="prose max-w-full mb-20"
            dangerouslySetInnerHTML={renderHTML(customFields.content)}
          />
        </div>
      </div>
    </div>
  )
}

export default PostDetails
