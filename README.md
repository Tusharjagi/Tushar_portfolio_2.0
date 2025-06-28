# Tushar Jagi - Portfolio Website 2.0

A modern, responsive portfolio website showcasing Tushar Jagi's work as a Full Stack Developer and Software Engineer. Built with Next.js, TypeScript, and Tailwind CSS, featuring smooth animations and a beautiful user interface.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light mode toggle
- **Responsive Layout**: Fully responsive across all devices and screen sizes
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Interactive Elements**: Hover effects, scroll animations, and interactive components
- **Contact Form**: Functional contact form with email integration
- **Performance Optimized**: Fast loading times and optimized for SEO
- **Accessibility**: Built with accessibility best practices in mind

## 🛠️ Technologies Used

### Frontend

- **Next.js 15** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Intersection Observer** - Scroll-based animations
- **Lucide React** - Beautiful icons

### Backend & Tools

- **Node.js/Express** - Server-side runtime
- **Nodemailer** - Email functionality
- **Git/GitHub** - Version control
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page component
│   └── favicon.ico        # Site favicon
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Experience.tsx     # Work experience
│   ├── Projects.tsx       # Portfolio projects
│   ├── Skills.tsx         # Skills and technologies
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Site footer
│   └── ScrollToTop.tsx    # Scroll to top button
├── public/                # Static assets
├── styles/                # Global styles
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Tusharjagi/Tushar_portfolio_2.0.git
   cd Tushar_portfolio_2.0
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors and Styling

The project uses Tailwind CSS with custom color schemes. You can modify the colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        // ... more color variants
        900: '#0c4a6e',
      }
    }
  }
}
```

### Content Updates

- Update personal information in the respective component files
- Modify project details in `components/Projects.tsx`
- Update skills and experience in their respective components
- Replace resume file in the `public/documents/` directory

## 📱 Sections

### Hero Section

- Animated introduction with typing effects
- Social media links (GitHub, LinkedIn)
- Call-to-action buttons
- Interactive cursor effects

### About Section

- Professional background and experience
- Key achievements and statistics
- Personal interests and values

### Experience Section

- Work history with detailed descriptions
- Technologies used at each role
- Key accomplishments and responsibilities

### Projects Section

- Featured projects with descriptions
- Live demo and GitHub links
- Technologies used for each project

### Skills Section

- Categorized skills with proficiency levels
- Interactive skill bars
- Additional tools and technologies

### Contact Section

- Functional contact form
- Email integration
- Social media links

## 🌟 Key Features

### Dark/Light Mode

- Toggle between dark and light themes
- Persistent theme preference using localStorage
- Smooth transitions between themes

### Animations

- Scroll-triggered animations using Framer Motion
- Hover effects and micro-interactions
- Smooth page transitions

### Performance

- Optimized images and assets
- Lazy loading for better performance
- SEO-friendly meta tags and structure

## 📧 Contact

- **Email**: tusharjagi@gmail.com
- **LinkedIn**: [https://www.linkedin.com/in/tushar-jagi-519025215/](https://www.linkedin.com/in/tushar-jagi-519025215/)
- **GitHub**: [https://github.com/Tusharjagi](https://github.com/Tusharjagi)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgments

- Icons by [Lucide React](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

**Built with ❤️ by Tushar Jagi**
