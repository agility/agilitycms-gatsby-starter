import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { AgilityImage } from "@agility/gatsby-image-agilitycms"

const PostListing = () => {
  // graphql query for posts data
  const data = useStaticQuery(graphql`
    query {
      posts: allAgilityPost(
        filter: { properties: { referenceName: { eq: "posts" } } }
        sort: { fields: customFields___date, order: DESC }
      ) {
        nodes {
          customFields {
            title
            date(formatString: "MMMM DD, YYYY")
            image {
              url
              label
            }
            content
            category {
              contentid
            }
          }
          sitemapNode {
            path
          }
          linkedContent_agilityCategory {
            customFields {
              title
            }
          }
        }
      }
    }
  `)

  // get posts
  const posts = data.posts.nodes

  // if there are no posts, display message on frontend
  if (posts.length <= 0) {
    return (
      <div className="mt-44 px-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl text-center font-bold">No posts available.</h1>
        <div className="my-10">
          <Link
            to="/"
            className="px-4 py-3 my-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary transition duration-300"
          >
            Return Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative px-8 mb-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Link to={post.sitemapNode.path} key={index}>
              <div className="flex-col group mb-8 md:mb-0">
                <div className="relative h-64">
                  <AgilityImage
                    image={post.customFields.image}
                    className="object-cover object-center rounded-t-lg"
                    style={{ height: "100%" }}
                    layout="fullWidth"
                  />
                </div>
                <div className="bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg">
                  <div className="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose">
                    {post.linkedContent_agilityCategory.customFields.title}
                  </div>
                  <div className="border-b-2 border-primary-500 w-8"></div>
                  <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                    {post.customFields.date}
                  </div>
                  <h2 className="text-secondary-500 mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300">
                    {post.customFields.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostListing
