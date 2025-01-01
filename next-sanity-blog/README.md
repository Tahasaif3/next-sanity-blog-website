# 📝 MyBlog Website

A dynamic and responsive blog website built with **Next.js**, **Tailwind CSS**, and **Sanity.io** as the CMS. This platform allows you to create, manage, and publish engaging blog content effortlessly.

## 🚀 Features

- 🖼️ **Dynamic Content**: Manage blog posts seamlessly via Sanity.io CMS.
- 🌐 **Responsive Design**: Fully responsive layout for an optimal user experience on all devices.
- ⚡ **Fast Loading**: Optimized with Next.js for fast performance.
- 🎨 **Styled with Tailwind CSS**: Modern, customizable, and utility-first CSS framework.
- 🔍 **SEO-Friendly**: Built-in SEO optimizations for improved search engine visibility.
- 📱 **Mobile Menu**: Responsive and interactive mobile navigation.

---

## 📂 Folder Structure

```plaintext
.
├── public/               # Public assets like images, fonts, etc.
├── src/                  # Source code for the project
│   ├── components/       # Reusable UI components
│   │   ├── AlertBanner.tsx
│   │   └── layout.tsx 
│   ├── app/            # Next.js page components
│   │   ├── page.tss      # Homepage
│   │   ├── about.tsx      # About page
│   │   ├── contact.tsx    # Contact page
│   │   └── [slug].tsx     # Dynamic blog post pages
│   ├── styles/           # Global and component-specific styles
│   │   ├── globals.css
│   │   └── tailwind.css
│   └── utils/            # Utility functions and helpers
├── sanity/               # Sanity.io CMS setup files
│   ├── schemas/          # Schema definitions for content models
│   └── sanity.json       # Sanity project configuration
├── package.json          # Project dependencies and scripts
├── README.md             # Project documentation
└── tailwind.config.js    # Tailwind CSS configuration
🛠️ Installation and Setup
Clone the Repository:

bash
Copy code
git clone https://github.com/Tahasaif3/next-sanity-blog-website.git
cd next-sanity-blog-website
Install Dependencies:

bash
Copy code
npm install
Run the Development Server:

bash
Copy code
npm run dev
Access the Sanity Studio: Navigate to the sanity folder, and start the studio:

bash
Copy code
cd sanity
sanity start
⚙️ Technologies Used
Next.js - React Framework for Production.
Tailwind CSS - Utility-first CSS framework.
Sanity.io - Content management system.
Vercel - Deployment and hosting.
🌟 Screenshots
Desktop View

Mobile View

🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch for your feature/bug fix.
Commit your changes and push them.
Create a pull request with a detailed description of your changes.
🛡️ License
This project is licensed under the MIT License.

📬 Contact
For inquiries or feedback, feel free to contact:

📧 Email: tahasaif454@gmail.com
🌐 Portfolio: [My Portfolio](https://my-dynamic-portfolio-two.vercel.app)

📌 To-Do List
 Add user authentication.
 Enhance blog post SEO with metadata.
 Integrate social media sharing.
