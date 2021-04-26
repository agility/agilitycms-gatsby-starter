import React, { Component } from "react"
import logo from "../../assets/agility-preview-logo.svg"
import { FaInfoCircle, FaGithub } from "react-icons/fa"

class PreviewBar extends Component {
  clearPreviewMode() {
    window.location.href = "?AgilityPreview=0"
  }

  render() {
    let mode
    if (this.props.isPreview === true) {
      mode = (
        <p className="text-xs md:text-base">
          Previewing <span className="font-bold">Latest</span> Changes
        </p>
      )
    } else {
      mode = (
        <p>
          Viewing <span className="font-bold">Published</span> Content
        </p>
      )
    }

    return (
      <div className="bg-agility relative px-8 text-gray-200">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          <div className="flex items-center">
            <span className="p-2 rounded-lg mr-4">
              <a
                href="https://www.agilitycms.com"
                target="_blank"
                rel="noreferrer"
                title="Agility CMS"
              >
                <img
                  src="https://static.agilitycms.com/brand/agility-triangle-yellow.svg"
                  alt="Agility CMS"
                  className="w-5 h-5 block md:hidden"
                />
                <img
                  src={logo}
                  alt="Agility CMS"
                  className="h-5 w-20 hidden md:block"
                />
              </a>
            </span>
            <div className="mr-4">
              <a
                href="https://help.agilitycms.com/hc/en-us"
                target="_blank"
                rel="noreferrer"
                title="Help Center"
              >
                <div className="flex items-center">
                  <FaInfoCircle className="text-2xl mr-2" />
                  <p className="hidden md:block text-sm">Help Center</p>
                </div>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/agilitycms/agilitycms-gatsby-starter"
                target="_blank"
                rel="noreferrer"
                title="View on GitHub"
                className="text-2xl"
              >
                <div className="flex items-center">
                  <FaGithub className="mr-2" />
                  <p className="hidden md:block text-sm">View on GitHub</p>
                </div>
              </a>
            </div>
          </div>
          <div className="py-4">{mode}</div>
        </div>
      </div>
    )
  }
}

export default PreviewBar
