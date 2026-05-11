# React Interview Challenges

A comprehensive collection of **12 interactive React coding challenges** designed to help developers practice and master common React interview questions. This project includes real-world scenarios and hands-on problem-solving exercises.

## 🎯 Project Overview

This is an interactive React learning platform that showcases various React patterns, hooks, and problem-solving techniques. Each challenge includes a detailed description, working implementation, and demonstrates best practices in React development.

**Live Demo & Source:** [GitHub Repository](https://github.com/shivbilgundi11/react-interview-tasks)

## 🚀 Tech Stack

- **React** 18.3.1 - UI Library
- **TypeScript** 5.5.3 - Type Safety
- **Vite** 5.4.1 - Fast Build Tool
- **React Router DOM** 6.26.2 - Client-side Routing
- **Tailwind CSS** 3.4.13 - Utility-First CSS Framework
- **Radix UI** - Accessible UI Component Library
- **shadcn/ui** - High-Quality UI Components
- **Lucide React** - Beautiful Icon Library

## 📋 Challenges Included

### 1. **Building a Dynamic Dropdown with URL Update Using React Router**

- Dynamic routing with URL parameter updates
- Real-time URL synchronization without page reload
- Enhances usability and bookmarkability

### 2. **File Tree Component**

- Hierarchical file system representation
- Expandable/collapsible folder structure
- Static tree UI without backend integration

### 3. **React Input Border Color Based on Hex Code**

- Dynamic border color changes based on hex input validation
- Smart validation (letters + numbers vs. only letters)
- Real-time visual feedback

### 4. **Debounced Search Input (API Fetching)**

- Optimized search functionality with 300ms debounce
- Reduces unnecessary API calls
- Performance optimization patterns

### 5. **Infinite Scroll**

- Auto-load more data on scroll
- Smooth pagination experience
- Handles large datasets efficiently

### 6. **Debounced Search - Movie Filter**

- Filter movie titles with 400ms debounce
- Works with a pre-populated movie list
- Real-time filtering optimization

### 7. **Replace Vowels with # Symbol**

- Real-time text transformation
- Handles both uppercase and lowercase vowels
- Input manipulation patterns

### 8. **Drag-and-Drop To-Do App**

- Interactive task management system
- Three status columns: "Next Up", "In Progress", "Completed"
- Drag and drop functionality for task organization

### 9. **Traffic Light Simulator**

- Automatic signal cycling (Green → Orange → Red)
- 2-second interval transitions
- State management with effects and timers

### 10. **OTP Input Form**

- Customizable OTP length (default: 6 fields)
- Secure password entry
- Dynamic form generation

### 11. **List Virtualization**

- Performance optimization for large lists
- Renders only visible items in viewport
- Smooth scrolling with dynamic item loading

### 12. **Star Rating Component**

- Interactive star rating UI
- User-friendly rating selection
- Visual feedback on hover and click

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/shivbilgundi11/react-interview-tasks.git
   cd react-interview-tasks
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173` (Vite default port)

## 📦 Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production (TypeScript + Vite)
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run preview`** - Preview production build locally

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── navbar.tsx       # Navigation bar
│   ├── home-breadcrumb.tsx
│   ├── virtaulized.tsx  # Virtualized list component
│   └── ui/              # shadcn/ui components
│       ├── accordion.tsx
│       ├── button.tsx
│       ├── dropdown-menu.tsx
│       └── toggle-theme.tsx
├── pages/               # Challenge implementations
│   ├── home.tsx         # Landing page
│   ├── TaskRouting.tsx  # Routing challenge
│   ├── file-tree.tsx
│   ├── hex-code-input.tsx
│   ├── debounced-search.tsx
│   ├── debounced-filter.tsx
│   ├── drag-and-drop.tsx
│   ├── traffic-signal.tsx
│   ├── otp-form.tsx
│   ├── star-rating.tsx
│   ├── vowels-input.tsx
│   ├── tasks-listing-page.tsx
│   └── infinite-scroll/
│       └── infinite-scroll.tsx
├── lib/
│   └── utils.ts         # Utility functions and task list
├── providers/
│   └── theme-provider.tsx
├── App.tsx              # Root component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🎨 Features

✅ **Interactive Challenges** - Hands-on coding problems with live solutions
✅ **Type-Safe** - Full TypeScript support for better DX
✅ **Responsive Design** - Mobile-friendly UI with Tailwind CSS
✅ **Dark Mode Support** - Toggle theme functionality
✅ **Accessible Components** - Built with Radix UI for accessibility
✅ **ESLint & Prettier** - Code quality and formatting
✅ **Fast Development** - Powered by Vite for instant HMR

## 🔗 React Concepts Covered

- Component Composition
- React Hooks (useState, useEffect, useCallback, etc.)
- Context API
- React Router Navigation
- Performance Optimization (Debouncing, Memoization, Virtualization)
- Form Handling
- State Management
- Event Handling
- Conditional Rendering
- List Rendering & Keys

## 💡 Use Cases

- **Interview Preparation** - Practice common React interview questions
- **Learning Resource** - Understand React patterns and best practices
- **Portfolio Project** - Showcase your React skills
- **Code Reference** - Copy patterns and implementations for your projects

## 🔧 Development

### Code Quality

- ESLint configured with React and TypeScript support
- Prettier for consistent code formatting
- Simple import sorting

### Build Optimization

- TypeScript compilation with strict mode
- Vite optimized production builds

## 📄 License

This project is open source and available for learning and educational purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs and issues
- Suggest new challenges
- Improve existing implementations
- Fix typos and documentation

## 👨‍💻 Author

**Shiv Bilgundi**

- GitHub: [@shivbilgundi11](https://github.com/shivbilgundi11)
- Project: [react-interview-tasks](https://github.com/shivbilgundi11/react-interview-tasks)

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [shadcn/ui](https://shadcn-ui.com/) - High-quality component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React Router](https://reactrouter.com/) - Client-side routing

---

**Happy Learning! 🚀** - Master React through hands-on challenges
