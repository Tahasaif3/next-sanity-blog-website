'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import AlertBanner from '../(blog)/alert-banner'
import { ArrowRight, Users, BookOpen, MessageCircle } from 'lucide-react'


const stats = [
    { label: 'Active Readers', value: '50K+', icon: Users },
    { label: 'Articles Published', value: '1000+', icon: BookOpen },
    { label: 'Community Members', value: '25K+', icon: MessageCircle },
  ]
  

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Editor in Chief',
    image: '/team4.jpg?height=400&width=400',
  },
  {
    name: 'Michael Chen',
    role: 'Technical Lead',
    image: '/team1.webp?height=400&width=400',
  },
  {
    name: 'Emma Williams',
    role: 'Content Strategist',
    image: '/team3.jpeg?height=400&width=400',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <AlertBanner/>
      <div className="container mx-auto mt-2 px-6 py-16 lg:px-8">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center space-y-6"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              About <span className="text-gradient">TechVista</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 lg:text-xl">
              Empowering tech enthusiasts with cutting-edge insights, trends, and updates from the ever-evolving world of technology and innovation.
            </p>
          </motion.div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-16"
        >
         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-xl"
                >
                  <div className="absolute right-0 top-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-blue-500/10" />
                  <div className="relative">
                    <Icon className="h-8 w-8 text-blue-500" />
                    <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">{stat.label}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-16"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div variants={itemVariants} className="space-y-6 lg:pr-8">
              <div className="inline-block rounded-lg bg-blue-600/10 px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Bridging Technology and Knowledge
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                At TechVista, we are committed to demystifying complex technologies and making them accessible to everyone. 
                Our mission is to provide reliable, engaging, and in-depth coverage of emerging technologies, programming trends, 
                and artificial intelligence.
              </p>
              <button className="group inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </button>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src="/CIO_tech_knowledge.jpg?height=600&width=600"
                alt="Our Mission"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              The passionate individuals behind TechVista`s success
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-md">
                  <div className="aspect-square relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative mt-16 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 py-16 px-6 sm:py-24 sm:px-12"
        >
          <div className="relative mx-auto max-w-2xl text-center">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Join Our Growing Community
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-6 text-lg text-blue-100">
              Be part of our journey in making technology more accessible and exciting.
              Connect with like-minded individuals and stay ahead in the tech world.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-10 flex justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

