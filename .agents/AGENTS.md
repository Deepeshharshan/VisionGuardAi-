# VisionGuard AI Development Rules

## 1. Professional Git Workflow
- **Logical Milestones**: Always break large tasks into small, self-contained development milestones.
- **Micro-Commits**: Whenever implementing a feature, split it into multiple logical commits (aim for 5-10 quality commits per session).
- **No Empty Commits**: Every commit MUST represent a real, testable improvement to the project. Never use empty commits or fake contribution tricks.

## 2. Conventional Commits
All commit messages must strictly follow the Conventional Commits specification:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries

## 3. Pre-Implementation Planning
For **every** feature request:
1. First, create a clear development plan (using the `implementation_plan.md` artifact).
2. Divide the plan into logical Git commits *before* writing any code.
3. Wait for user approval if the plan involves major architectural changes.

## 4. Documentation
- **README Updates**: Always update the `README.md` when major features or architectural changes are completed. Include screenshots or structural explanations where appropriate.

## 5. Development Standards
- **Architecture & Code Quality**: Follow Clean Architecture and SOLID principles. Write in strict TypeScript with no duplicate code.
- **Components**: Build reusable, performant, and scalable components.
- **UX/UI**: Ensure fully responsive design, WCAG AA accessibility, loading states, and empty states.
- **Reliability**: Implement proper error handling. No placeholder code or commented-out code is permitted.
- **Review Protocol**: Before pushing, run a code quality review, UI/UX review, and performance review. Suggest improvements if any.
- **Mindset**: Prioritize maintainability, scalability, readability, and long-term quality over speed. Plan first, build second, review third, commit fourth.
