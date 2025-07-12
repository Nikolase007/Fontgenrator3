# Font Generator - Replit Development Guide

## Overview

This is a full-stack font generator application built with React, Express, and TypeScript. The application allows users to transform text into 200+ unique Unicode font styles, perfect for social media, gaming, and creative projects.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Router**: Wouter (lightweight client-side routing)
- **State Management**: TanStack Query (React Query) for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: Radix UI components with custom styling (shadcn/ui)
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: PostgreSQL sessions using connect-pg-simple
- **Development**: Hot reload with Vite middleware integration

### Project Structure
```
├── client/          # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Route components
│   │   ├── lib/         # Utility functions and font logic
│   │   └── hooks/       # Custom React hooks
├── server/          # Express backend
│   ├── routes.ts    # API route definitions
│   ├── storage.ts   # Data access layer
│   └── vite.ts      # Vite development integration
├── shared/          # Shared TypeScript types and schemas
└── migrations/      # Database migrations
```

## Key Components

### Font Transformation System
- **Font Mappings**: Unicode character mappings for 200+ font styles
- **Categories**: Organized into Fancy, Versatile, Cool, Lined, Gaming, and Decorated fonts
- **Real-time Preview**: Instant text transformation as users type
- **Copy Functionality**: One-click clipboard integration

### UI Components
- **FontPreviewCard**: Displays transformed text with copy functionality
- **Header/Footer**: Navigation and branding
- **Toast System**: User feedback for actions
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Pages and Routes
- **Home**: Main font generator with all categories
- **Random Font**: Generates random font styles
- **Compare Fonts**: Side-by-side font comparison
- **About**: Application information and features
- **Contact**: User feedback and support

## Data Flow

1. **User Input**: Text entered in textarea components
2. **Font Transformation**: Real-time processing using Unicode mappings
3. **Preview Generation**: Instant display of transformed text
4. **Copy Action**: Clipboard API integration with user feedback
5. **State Management**: TanStack Query handles caching and updates

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **UI Framework**: Radix UI primitives, Tailwind CSS
- **State Management**: TanStack Query
- **Utilities**: Class variance authority, clsx, date-fns
- **Build Tools**: Vite, TypeScript, PostCSS

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript
- **Database**: Drizzle ORM with PostgreSQL support
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot reload integration with Vite

### Database Schema
- **Users Table**: Basic user management (id, username, password)
- **Session Storage**: PostgreSQL-based session management
- **Extensible**: Ready for additional features like favorites, history

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite dev server with Express middleware
- **Database**: PostgreSQL with Drizzle migrations
- **Environment Variables**: DATABASE_URL for database connection
- **Asset Handling**: Vite handles static assets and bundling

### Production Build
- **Frontend**: Vite builds optimized React bundle
- **Backend**: ESBuild creates Node.js bundle
- **Database**: Production PostgreSQL with connection pooling
- **Static Files**: Express serves built frontend assets

### Key Features for Production
- **Database Migrations**: Automated schema updates
- **Environment Configuration**: Separate dev/prod configurations
- **Error Handling**: Comprehensive error boundaries and logging
- **Performance**: Optimized bundles and caching strategies

### Storage Implementation
- **Memory Storage**: Development fallback for rapid prototyping
- **PostgreSQL**: Production-ready database with proper indexing
- **Extensible Interface**: Easy to add new data operations
- **Type Safety**: Full TypeScript coverage with Drizzle schemas

The application is designed to be easily deployable on Replit with minimal configuration, automatically handling database provisioning and environment setup.