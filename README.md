# Campers of Your Dreams 🚐

A modern React web application for browsing and booking camper rentals. This project provides users with an intuitive interface to explore available campers, view detailed specifications, read reviews, and make bookings.

## 🚀 Features

- **Browse Campers**: Explore a comprehensive catalog of available campers
- **Detailed Views**: View detailed information about each camper including specifications, features, and amenities
- **Filtering System**: Filter campers by location, equipment, and vehicle type
- **Reviews System**: Read customer reviews and ratings
- **Favorites**: Save your favorite campers for easy access
- **Booking Form**: Submit booking requests for selected campers

## 🛠 Tech Stack

- **Frontend**: React 19, React Router
- **State Management**: Redux Toolkit, Redux Persist
- **Styling**: CSS Modules
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **Notifications**: React Hot Toast
- **Icons**: React Icons
- **Code Quality**: ESLint

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/pilotocheg/goit-soft-skills-test-task.git
cd goit-soft-skills-test-task
```

1. Install dependencies:

```bash
npm install
```

## 🎯 Available Scripts

### Development

```bash
npm run dev
```

Starts the development server on `http://localhost:5173`

### Production Build

```bash
npm run build
```

Creates an optimized production build in the `dist` folder

### Preview Production Build

```bash
npm run preview
```

Preview the production build locally

### Code Linting

```bash
npm run lint
```

Run ESLint to check for code quality issues and enforce coding standards

## 🏗 Project Structure

```text
src/
├── api/              # API functions and data
├── components/       # Reusable React components
│   ├── common/       # Common UI components
│   └── camper/       # Camper-specific components
├── constants/        # Application constants
├── hooks/            # Custom React hooks
├── images/           # Static images and SVG icons
├── pages/            # Page components
├── redux/            # Redux store and slices
└── utils/            # Utility functions
```

## 🌐 Pages

- **Home** (`/`) - Landing page with hero section
- **Catalog** (`/catalog`) - Browse all available campers with filtering
- **Camper Details** (`/catalog/:camperId`) - Detailed view of a specific camper
- **404** - Not found page for invalid routes

## 🎨 Key Features

### Filtering & Search

- Filter by location
- Filter by equipment (AC, kitchen, shower, etc.)
- Filter by vehicle type (van, integrated, alcove)

### Camper Details

- Image gallery
- Comprehensive specifications
- Customer reviews and ratings
- Booking form

### Favorites System

- Save/unsave campers to favorites
- Persistent favorites using Redux Persist

## 🚀 Deployment

The project is configured for deployment on Vercel with the included `vercel.json` configuration.

## 📄 License

This project is part of a GoIT test task and is intended for educational purposes.
