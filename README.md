# Nikhil Goduguchintha - Personal Portfolio ✨

Welcome to the source code repository for my personal portfolio website. This site showcases my skills, projects, and experience as a Frontend Engineer with backend familiarity.

---

**🚀 Live Demo:** [**PORTFOLIO_URL**](https://nikhilgoduguchintha.in)

---

## 📖 About This Project

This portfolio is a single-page application built to provide an engaging overview of my professional journey, technical skills, and key projects developed during my ~4 years of experience at companies like Lloyds Technology Centre, Cloud4C, and Tech Mahindra. It highlights my focus on frontend development while also noting my contributions and interest in backend aspects.

## ✨ Features

* **Responsive Design:** Adapts seamlessly to various screen sizes (desktop, tablet, mobile).
* **Modern UI:** Clean and intuitive user interface.
* **Smooth Animations:** Engaging user experience with animations powered by Framer Motion, including subtle parallax effects.
* **Project Showcase:** Detailed cards displaying key projects, roles, tech stacks, and links.
* **Skills Overview:** Categorized list of technical skills and tools.
* **Working Contact Form:** Allows visitors to send messages directly via EmailJS (no custom backend needed).
* **Component Folder Structure:** Organized codebase for better maintainability.
* **CSS Modules:** Locally scoped CSS for predictable styling.

## 🔧 Technologies Used

* **Frontend:**
    * [React](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
    * JavaScript (ES6+)
    * HTML5
* **Styling:**
    * [CSS Modules](https://github.com/css-modules/css-modules)
    * Standard CSS3
* **Animation:**
    * [Framer Motion](https://www.framer.com/motion/)
* **Contact Form:**
    * [EmailJS](https://www.emailjs.com/)
* **Development:**
    * [Vite](https://vitejs.dev/) (Build Tool & Dev Server)
    * Node.js
    * npm
    * Git & GitHub

## ⚙️ Setup and Local Development

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/my-portfolio.git](https://github.com/my-portfolio.git)
    cd my-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    * Create a `.env` file in the project root by copying the example file:
        ```bash
        cp .env.example .env
        ```
    * Open the `.env` file and add your actual EmailJS credentials (Service ID, Template ID, Public Key). See the "Environment Variables" section below.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application should now be running, typically at `http://localhost:5173`.

## 📄 Environment Variables

This project requires the following environment variables to be set in a `.env` file for the contact form to function:

```dotenv
# Get these from your EmailJS account dashboard
VITE_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID_HERE
VITE_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID_HERE
VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY_HERE