---
description: Workflow to improve code quality, readability, and cleanliness (React Specific)
---

1.  **Analyze the Code & Structure**
    *   **Understand the Goal**: Read the component/file to understand its responsibility. Is it doing too much?
    *   **Component Structure**:
        *   Does this component handle too many concerns (data fetching + UI + complex state)?
        *   Are there "God Components" (> 200 lines) that should be split?
    *   **Code Smells**:
        *   Deeply nested JSX (prop drilling or complex conditional rendering).
        *   `useEffect` chains that are hard to follow.
        *   Inline objects/functions as props (consider stability if causing re-renders).
        *   Duplicated logic across components.

2.  **Linting, Formatting & Imports**
    *   Ensure strict adherence to Prettier/ESLint rules.
    *   **Order Imports**: React -> Third-party -> Local Components -> Types/Utils -> Styles.
    *   Remove unused imports and variables.

3.  **Refactoring: Separation of Concerns**
    *   **Extract Sub-Components**:
        *   If the JSX is long, identifying chunks that can be their own components (e.g., `<Header />`, `<ListItem />`).
        *   Keep the main component focused on layout and state passing.
    *   **Extract Custom Hooks**:
        *   Move complex `useEffect`, `useState`, or data fetching logic into custom hooks (e.g., `useUserData()`, `useFormLogic()`).
        *   This keeps the UI component clean and focused on *rendering*.
    *   **Extract Utility Functions**:
        *   Move pure logic (formatting dates, calculating totals) out of the component scope entirely, preferably to a separate `utils` file.

4.  **React Best Practices**
    *   **Prop Types/Interfaces**: explicitly define `Props` interfaces. Avoid `any`.
    *   **Hooks Rules**: Ensure hooks are at the top level and dependency arrays are correct.
    *   **Memoization**: Use `useMemo` and `useCallback` *only when helpful* (preventing unnecessary downstream re-renders or stable references for effects), don't overuse.
    *   **Keys**: Ensure lists have stable, unique keys (not index).

5.  **Cleanliness & Readability**
    *   **Descriptive Naming**:
        *   Components: PascalCase (e.g., `UserProfile`).
        *   Functions/Hooks: camelCase (e.g., `handleSubmit`, `useAuth`).
        *   Booleans: `isLoading`, `hasError`, `canSubmit`.
    *   **Guard Clauses**: Return `null` or loader states early to reduce JSX indentation.
    *   **Conditionals**: Prefer ternary `? :` for simple values, or `&&` for rendering, but be careful of `0` rendering.

6.  **Documentation**
    *   JSDoc for complex logic or reusable components/hooks.
    *   Explain *why* a specific `useEffect` exists if it's not obvious.

7.  **Verify**
    *   Compile/Build.
    *   Check for console warnings (unique keys, dependency arrays).
    *   Manual test to ensure refactor didn't break functionality.