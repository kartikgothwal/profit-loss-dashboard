

# Profit-Loss Dashboard

## 📌 Project Overview
The **Profit-Loss Dashboard** is a React-based web application built with Vite. It provides an interactive dashboard for tracking profit and loss data using modern frontend technologies.


## Features

- 📊 **Real-time Profit & Loss Tracking**  
- ⚡ **Fast & Optimized with Vite**  
- 🌐 **API Integration using Axios**  
- 🔥 **React Query for State Management**  
- 🎨 **Styled with Tailwind CSS**  
- 🔔 **Notifications using React-Hot-Toast**

## Tech Stack

- **Client**: React 19, Vite, Tailwind CSS, Typescript  
- **State Management**: React-Tanstack-Query  
- **API Calls**: Axios  
- **Notifications**: React-Hot-Toast  
- **Linting & Formatting**: ESLint  
- **Server**: Python FastAPI



## Project Setup

### 1️⃣ Clone the repository  

```bash
git clone https://github.com/kartikgothwal/profit-loss-dashboard.git

cd profit-loss-dashboard    
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start the development server
```bash
npm run dev
```

### 4️⃣ Build for production
```bash
npm run build
```

### 5️⃣ Preview the production build
```bash
npm run preview
```
    
## Environment Variables

Create a .env file in the root directory and add any required API keys or environment variables.

```bash
VITE_BACKEND_URI=http://localhost:8000
```

## ✅ Linting
Run ESLint to check for issues:

```bash
npm run lint
```

## 🤝 Contributing

    1. Fork the repository
    2. Create a new branch (git checkout -b feature-branch)
    3. Commit your changes (git commit -m "Add new feature")
    4. Push to the branch (git push origin feature-branch)
    5. Create a Pull Request

All contributions are welcome! 🎉


## 🛠️ Scripts

The project includes several scripts to streamline development, testing, and deployment.

| Script           | Description                                      |
|------------------|--------------------------------------------------|
| `npm run dev`   | Starts the development server                     |
| `npm run build` | Builds the app for production                     |
| `npm run preview` | Previews the built production app               |
| `npm run lint`  | Runs ESLint to check for code issues              |

### Running Scripts

To execute a script, use:

```bash
npm run <script-name>
```
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
>>>>>>> 00178d6 (adding the table)
