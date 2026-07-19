# Contributing to VisionGuard AI

Welcome to the VisionGuard AI enterprise repository. As a core maintainer, you are expected to follow strict enterprise software engineering standards.

## The Rule of Continuous Improvement
VisionGuard AI is developed via a continuous stream of micro-commits. Do not bundle massive architectural changes into single commits.
- **One improvement = one commit.**
- Push immediately after every commit.
- Every commit must leave the repository in a stable, buildable state.

## Conventional Commits
All commit messages must strictly follow the Conventional Commits specification:
- `feat`: A new feature or major section implementation
- `fix`: A bug fix or layout resolution
- `docs`: Documentation updates (README, CONTRIBUTING, comments)
- `style`: Changes that do not affect logic (formatting, spacing, a11y roles)
- `refactor`: Code changes that neither fix a bug nor add a feature
- `perf`: Performance optimizations (image lazy loading, bundle size)
- `test`: Adding missing tests
- `chore`: Build process or tooling changes

*Example:* `feat(diagnostics): overhaul mechanical deep dive with realistic thermal heat maps`

## Code Standards
- **Strict TypeScript:** No `any` types. Ensure all interfaces are explicitly defined.
- **Tailwind v4:** Use the new `@import "tailwindcss";` syntax. Avoid deprecated `@tailwind base;` directives.
- **Realism over Decor:** UI mockups must answer a specific business question. Do not use abstract floating elements unless they represent real telemetry data.
- **Accessibility:** All interactive elements must have `aria-label` and focus states (`focus-visible:ring-2`).

## Development Workflow
1. Identify **one** meaningful improvement.
2. Implement it locally.
3. Run `npm run build` to verify there are no TS/Vite errors.
4. Commit using Conventional Commits.
5. Push to `main`.
6. Repeat.
