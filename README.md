# Tushar Jagi - Portfolio Website 2.0

A modern, responsive portfolio website showcasing Tushar Jagi's work as a Full Stack Developer and Software Engineer. Built with Next.js, TypeScript, and Tailwind CSS, featuring smooth animations, interactive components, and a beautiful user interface.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light mode toggle
- **Responsive Layout**: Fully responsive across all devices and screen sizes
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Interactive Elements**: Hover effects, scroll animations, and interactive components
- **Contact Form**: Functional contact form with email integration and custom popup notifications
- **Performance Optimized**: Fast loading times and optimized for SEO
- **Accessibility**: Built with accessibility best practices in mind
- **Modular Components**: Reusable components for better code organization
- **Custom Popup System**: Beautiful, animated popup notifications with close functionality

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
│   ├── api/               # API routes
│   │   └── sendEmail/     # Email sending endpoint
│   └── favicon.ico        # Site favicon
├── components/            # React components
│   ├── Header.tsx         # Navigation header with theme toggle
│   ├── Hero.tsx           # Hero section with animated elements
│   ├── About.tsx          # About section with achievements
│   ├── Experience.tsx     # Work experience timeline
│   ├── Projects.tsx       # Portfolio projects with filtering
│   ├── Skills.tsx         # Skills and technologies display
│   ├── Contact.tsx        # Contact form with popup notifications
│   ├── Footer.tsx         # Site footer
│   ├── ScrollToTop.tsx    # Scroll to top button
│   └── Popup.tsx          # Reusable popup notification component
├── public/                # Static assets
│   ├── documents/         # Resume and other documents
│   └── images/            # Project images and assets
├── styles/                # Global styles
│   └── globals.css        # Global CSS with custom animations
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

3. **Set up environment variables** (if using email functionality)

   Create a `.env.local` file in the root directory:

   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
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
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
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
- Interactive cursor effects and floating particles

### About Section

- Professional background and experience
- Key achievements and statistics
- Personal interests and values
- Animated feature cards

### Experience Section

- Work history with detailed descriptions
- Technologies used at each role
- Key accomplishments and responsibilities
- Timeline-based layout

### Projects Section

- Featured projects with descriptions
- Live demo and GitHub links
- Technologies used for each project
- Filterable project categories

### Skills Section

- Categorized skills with proficiency levels
- Interactive skill bars
- Additional tools and technologies
- Tabbed interface for different skill categories

### Contact Section

- Functional contact form with validation
- Email integration via API
- Custom popup notifications for success/error states
- Social media links and contact information

## 🌟 Key Features

### Dark/Light Mode

- Toggle between dark and light themes
- Persistent theme preference using localStorage
- Smooth transitions between themes
- Automatic theme detection

### Animations

- Scroll-triggered animations using Framer Motion
- Hover effects and micro-interactions
- Smooth page transitions
- Floating particles and morphing backgrounds

### Performance

- Optimized images and assets
- Lazy loading for better performance
- SEO-friendly meta tags and structure
- Efficient component rendering

### Popup System

- **Reusable Popup Component**: Modular popup notifications
- **Success/Error States**: Color-coded feedback
- **Smooth Animations**: Scale and fade effects
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Close Functionality**: Multiple ways to close (X button, backdrop click, action button)

### Contact Form Integration

The contact form now uses the popup system instead of browser alerts:

- **Success Popup**: Shows when email is sent successfully
- **Error Popup**: Shows when there's an error sending the email
- **Form Reset**: Automatically clears form after successful submission
- **Loading States**: Shows loading spinner during submission

## 📧 Contact

- **Email**: tusharjagi@gmail.com
- **LinkedIn**: [https://www.linkedin.com/in/tushar-jagi-519025215/](https://www.linkedin.com/in/tushar-jagi-519025215/)
- **GitHub**: [https://github.com/Tusharjagi](https://github.com/Tusharjagi)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Icons by [Lucide React](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Built with [Next.js](https://nextjs.org/)

---

**Built with ❤️ by Tushar Jagi**
