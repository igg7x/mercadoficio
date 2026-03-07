# MercadoOficio App - AI Coding Guidelines

## Architecture Overview

This is a Next.js 15 job marketplace app using the App Router. It follows a hybrid data fetching pattern: server components handle initial data loading, while client components use TanStack React Query for interactive updates. Authentication is managed via Auth0, with API calls to an external backend.

## Key Patterns

### File Structure

- **Routes**: Grouped under `src/app/(routes)/` with nested layouts
- **Components**: Placed in `components/` subfolders within route directories (e.g., `home/jobs/components/`)
- **API Logic**: Centralized in `src/lib/api/[module]/[module].ts` (e.g., `jobs/jobs.ts`)
- **Hooks**: Custom React Query hooks in `src/hooks/` (e.g., `use-jobs.ts`)
- **Types**: Shared types in `src/lib/api/types.ts`

### Authentication

- Use `auth0.withPageAuthRequired()` for protected server components
- Access tokens via `auth0.getAccessToken()` in API requests
- Middleware handles auth routing for all paths except static assets

### Data Fetching

- **Server Components**: Fetch initial data using API functions directly (e.g., `getJobsByUserCustomer()`)
- **Client Components**: Use React Query hooks for pagination, mutations, and real-time updates
- API requests via `apiRequest()` in `src/lib/api/request.ts`, which auto-includes Auth0 tokens

### Component Patterns

- Server components for data loading, client components for interactivity
- UI components from shadcn/ui (Radix + Tailwind)
- Props drilling for server-fetched data to client components
- Example: `post-jobs/page.tsx` fetches data server-side and passes to `JobsPortalShell` client component

### API Integration

- External backend at `process.env.BACKEND_API_URL`
- Request functions in `src/lib/api/[module]/` export CRUD operations
- Error handling: Throw errors from API functions, catch in components/hooks
- Pagination: Use `Page<T>` type with `last`, `totalElements` fields

### Conventions

- Enums in `src/lib/utils.ts` (HTTP methods, user roles, notification types)
- Class merging with `cn()` utility for Tailwind classes
- Spanish naming for business logic (e.g., "userOffering", "userCustomer")
- Job marketplace roles: USER_CUSTOMER (posts jobs), USER_OFFERING (applies to jobs)

## Examples

- **Adding a new job list**: Create API function in `jobs/jobs.ts`, hook in `use-jobs.ts`, use in client component
- **Protected route**: Wrap server component with `auth0.withPageAuthRequired()`
- **Data flow**: Server fetches categories/jobs, passes as props to client component that uses hooks for mutations</content>
  <parameter name="filePath">c:\Users\Ignacio González\dev\mercadoficioapp\.github\copilot-instructions.md
