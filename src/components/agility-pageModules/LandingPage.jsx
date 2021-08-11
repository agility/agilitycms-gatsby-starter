import React from "react"
import { Link } from "gatsby"
import { renderHTML } from "../../agility/utils"
import { FaInstagram, FaEnvelope } from "react-icons/fa"
import { motion } from "framer-motion"

const LandingPage = ({ module }) => {
  const { customFields } = module

  console.log(customFields)

  const easing = [0.6, -0.5, 0.01, 0.99]

  const fadeInUp = {
    initial: {
      // y: 60,
      opacity: 0,
    },
    animate: {
      // y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1.5,
        ease: easing,
      },
    },
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div>
          <Link to="/">
            <img
              src={customFields.logo.url}
              alt={customFields.logo.label}
              className="mx-auto z-10"
              style={{ maxWidth: "550px" }}
            />
          </Link>
        </div>
        <motion.ul
          className="flex -mt-16 z-50"
          initial="initial"
          animate="animate"
          stagger={stagger}
        >
          <motion.li className="mr-8" variants={fadeInUp}>
            <a
              href={customFields.instagram.href}
              title={customFields.instagram.text}
              target={customFields.instagram.target}
            >
              <FaInstagram className="text-secondary text-3xl" />
            </a>
          </motion.li>
          <motion.li variants={fadeInUp}>
            <a
              href={customFields.email.href}
              title={customFields.email.text}
              target={customFields.email.target}
            >
              <FaEnvelope className="text-secondary text-3xl" />
            </a>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  )
}

export default LandingPage
