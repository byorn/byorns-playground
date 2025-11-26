# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 (App Router) portfolio/playground application built with React 19, TypeScript, Prisma ORM, NextAuth.js, and Tailwind CSS + DaisyUI. The site showcases various software development technologies and serves as a research and development playground.

## Development Commands

### Running the Application
```bash
npm run dev              # Start development server on http://localhost:3000
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
```

### Database Commands (Prisma)
All Prisma commands require `.env.local` file with `DATABASE_URL` pointing to PostgreSQL database.

```bash
npm run migrate:dev      # Create and apply migrations in development
npm run db:push          # Push schema changes without creating migrations
npm run migrate:reset    # Reset database and re-run all migrations
npm run db:seed          # Seed the database
npm run prisma:generate  # Generate Prisma Client
npm run prisma:studio    # Open Prisma Studio GUI
```

### Production Build
```bash
npm run production:build # Generate Prisma Client, run migrations, and build
```

### Updating Dependencies
The README mentions using `ncu -u` to update all packages.

## Architecture

### Framework & Routing
- **Next.js 16 App Router**: Uses the `src/app` directory structure with nested route folders
- **Middleware**: Lives at `src/middleware.ts` (outside app directory as required). Currently applies NextAuth middleware to `/extra` and `/dashboard` routes only
- **TypeScript**: Path alias `@/*` maps to `./src/*`

### Authentication
- **NextAuth.js v4**: Configuration in `src/app/api/auth/[...nextauth]/options.ts`
- **Providers**: GitHub OAuth and Credentials (hardcoded demo credentials)
- **Session Management**: `AuthProvider` context wrapper in `src/app/context/AuthProvider.tsx` wraps the entire app in `src/app/layout.tsx`
- **Environment Variables Required**:
  - `GITHUB_ID`
  - `GITHUB_SECRET`
  - `NEXTAUTH_SECRET`

### Database
- **Prisma ORM**: Schema at `prisma/schema.prisma`
- **PostgreSQL**: Connection via `DATABASE_URL` environment variable
- **Current Models**: Single `Post` model with basic CRUD fields
- **Development**: All Prisma commands use `dotenv -e .env.local` to load environment variables

### Styling
- **Tailwind CSS v4**: Configuration in `tailwind.config.js`
- **DaisyUI v5**: Component library for Tailwind
- **PostCSS**: Uses `@tailwindcss/postcss` plugin
- **Global Styles**: `src/app/globals.css`

### Components & Layout
- **Root Layout**: `src/app/layout.tsx` contains global navigation bar, header, footer, and AuthProvider wrapper
- **Reusable Components**: Located in `src/app/components/` (e.g., Navbar, Comments, UserCard, TextArea, FileTree)
- **Page Components**: Route pages under `src/app/[route]/page.tsx` (e.g., front-end, back-end, dsa, dev-ops, server, client, comments, extra, foldertree)

### API Routes
- **Location**: `src/app/api/` using App Router conventions
- **NextAuth Route Handler**: `src/app/api/auth/[...nextauth]/route.ts`
- **Other APIs**: `src/app/api/user/route.ts`, `src/app/api/test/route.ts`

### External Integrations
- **AWS S3**: Image hosting configured in `next.config.js` for `byorns-playground.s3.ap-southeast-2.amazonaws.com`
- **GitHub Avatars**: Allowed in Next.js image optimization
- **AWS Amplify**: Configuration files present in `/amplify` directory (usage unclear from codebase)

### TypeScript Configuration
- **Strict Mode**: Disabled (`strict: false`)
- **Notable Settings**:
  - `noImplicitAny: false`
  - `strictNullChecks: false`
  - `strictPropertyInitialization: false`
  - Path aliases supported via `@/*`

## Environment Setup

Create `.env.local` file in project root with:
```
DATABASE_URL="postgresql://..."
GITHUB_ID="..."
GITHUB_SECRET="..."
NEXTAUTH_SECRET="..."
```

## Important Notes

- **Middleware Location**: Next.js middleware MUST be at `src/middleware.ts` (outside the `app` directory)
- **Image Optimization**: Remote image patterns configured for GitHub avatars and AWS S3 bucket
- **Authentication Paths**: Protected routes defined in middleware config matcher
- **Database First Setup**: Run `npm run prisma:generate` and `npm run migrate:dev` before first run
