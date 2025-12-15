# Required Packages for E-commerce Project

## Missing Packages (Must Install)

The following packages are used in the codebase but are **NOT** currently in `package.json`:

### Dependencies (Production)
- **@reduxjs/toolkit** - Redux Toolkit for state management (used in `src/store/`)
- **jwt-decode** - ⚠️ **MISSING** - JWT token decoding (used in `src/helpers/Utils.ts`)
- **react-redux** - React bindings for Redux (used in `src/hooks/useAppDispatch.ts` and `src/hooks/useAppSelector.ts`)

### Optional Type Definitions
- **@types/leaflet** - TypeScript definitions for Leaflet (recommended for better TypeScript support)

---

## Complete Package List

### Production Dependencies (dependencies)
1. **@react-google-maps/api** ^2.20.7 - Google Maps integration
2. **@reduxjs/toolkit** - ⚠️ **MISSING** - Redux state management
3. **@tailwindcss/vite** ^4.1.14 - Tailwind CSS Vite plugin
4. **formik** ^2.4.6 - Form management
5. **jwt-decode** ^4.0.0 - ⚠️ **MISSING** - JWT token decoding
6. **leaflet** ^1.9.4 - Interactive maps
6. **react** ^19.1.1 - React library
7. **react-dom** ^19.1.1 - React DOM rendering
8. **react-icons** ^5.5.0 - Icon library
9. **react-leaflet** ^5.0.0 - React components for Leaflet
10. **react-redux** - ⚠️ **MISSING** - Redux React bindings
11. **react-router** ^7.9.3 - Routing library
12. **react-toastify** ^11.0.5 - Toast notifications
13. **react-tooltip** ^5.30.0 - Tooltip component
14. **recharts** ^3.5.0 - Chart library
15. **tailwindcss** ^4.1.14 - CSS framework
16. **yup** ^1.7.1 - Schema validation

### Development Dependencies (devDependencies)
1. **@eslint/js** ^9.33.0 - ESLint JavaScript configuration
2. **@types/react** ^19.1.10 - TypeScript types for React
3. **@types/react-dom** ^19.1.7 - TypeScript types for React DOM
4. **@vitejs/plugin-react** ^5.0.0 - Vite React plugin
5. **eslint** ^9.33.0 - Linting tool
6. **eslint-plugin-react-hooks** ^5.2.0 - React Hooks linting rules
7. **eslint-plugin-react-refresh** ^0.4.20 - React Refresh linting
8. **globals** ^16.3.0 - Global variables for ESLint
9. **typescript** ~5.8.3 - TypeScript compiler
10. **typescript-eslint** ^8.39.1 - TypeScript ESLint integration
11. **vite** ^7.1.2 - Build tool

---

## Installation Command

To install the missing packages, run:

```bash
npm install @reduxjs/toolkit react-redux jwt-decode
```

Or if you prefer to install all packages fresh:

```bash
npm install
npm install @reduxjs/toolkit react-redux
```

For optional TypeScript definitions:

```bash
npm install --save-dev @types/leaflet
```

---

## Package Usage Summary

- **Redux Toolkit** - Used for state management (auth, category, product slices)
- **React Redux** - Used for connecting React components to Redux store
- **React Router** - Used for navigation and routing
- **Formik + Yup** - Used for form handling and validation
- **JWT Decode** - Used for decoding and validating JWT tokens
- **React Toastify** - Used for user notifications
- **Leaflet + React Leaflet** - Used for map functionality
- **Recharts** - Used for data visualization/charts
- **React Icons** - Used for icons throughout the app
- **Tailwind CSS** - Used for styling
- **Google Maps API** - Used for map integration

