# Dynamic Dashboard with Widgets

A **React + Redux Toolkit + ShadCN UI** based application that allows users to create a dynamic dashboard with categories and widgets. Users can **add/remove widgets**, organize them by category, and search widgets easily.

---

## 🚀 Features

- ✨ Create dynamic dashboard sections (**categories**)
- 🎯 Add new widgets with name and description
- 🗑️ Remove widgets from any category
- 🔄 Manage state using **Redux Toolkit**
- 🎨 UI built with **ShadCN UI** + Tailwind CSS
- 📱 Fully responsive design
- 📋 Uses **Sheet + Tabs** for widget creation
- 🔍 Search widgets functionality

---

## 🖥️ Live Demo

[**View Deployed App**](https://categorydashboard.netlify.app/)

---

## 📂 Project Structure

```
src/
├── components/             # UI Components (ShadCN based)
├── store/              # Redux slices and store (categorySlice)
└── App.jsx               # Root component
```

---

## ⚡ Tech Stack

- **React** (Vite) - Frontend framework
- **Redux Toolkit** - State management
- **ShadCN UI** - Modern UI components
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons

---

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/deveshcse/dashbord_assignment.git
cd dashbord_assignment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure ShadCN & Tailwind (Already configured)

If you need to reconfigure:

```bash
npx shadcn-ui@latest init
```

### 4. Start Development Server

```bash
npm run dev
```

The app will run at: **http://localhost:5173**

---

## 🛠️ Build for Production

```bash
npm run build
npm run preview
```

---

## ✅ Deployment

This project is ready to be deployed on **Vercel**, **Netlify**, or any static hosting platform.

### To deploy your own version:

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `dist` folder to your hosting platform

### Quick Deploy Options:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag & drop the `dist` folder or connect via Git
- **GitHub Pages**: Use the built files in the `dist` directory

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Run development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🔍 Features in Detail

### 📊 Dashboard Categories
- Create multiple dashboard categories
- Each category can contain multiple widgets
- Dynamic category management

### 🎛️ Widget Management
- **Add Widget**: Opens a ShadCN Sheet with Tabs for category selection
- **Remove Widget**: Remove any widget dynamically with confirmation
- **Widget Details**: Each widget has name and description

### 🎨 UI Components
- Modern, clean interface using ShadCN UI
- Responsive design that works on all devices
- Smooth animations and transitions
- Accessible components following best practices

### 🔄 State Management
- Centralized state using Redux Toolkit
- Efficient state updates with Redux slices
- Persistent widget and category data

---

## 💻 How to Use

1. **Clone and Install**:
   ```bash
   git clone https://github.com/deveshcse/dashbord_assignment.git
   cd dashbord_assignment
   npm install
   ```

2. **Start Development**:
   ```bash
   npm run dev
   ```

3. **Open Browser**: Navigate to `http://localhost:5173`

4. **Start Creating**: Add categories and widgets to build your dashboard!

---

## 👨‍💻 Author

**Your Name**
- LinkedIn: [My LinkedIn Profile](https://www.linkedin.com/in/deveshcse/)
- GitHub: [My GitHub Profile](https://github.com/deveshcse/)
- Email: d.mishra56603.com

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [ShadCN UI](https://ui.shadcn.com/) - Beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Build tool

---

## 📞 Support

If you have any questions or need help with setup, please:
- Open an issue on GitHub
- Contact me via email
- Check the documentation links above

---

⭐ **If you found this project helpful, please give it a star!** ⭐