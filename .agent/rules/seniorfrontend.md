---
trigger: always_on
---

Senior Angular 21 Architecture Rules
1. Generation & Structure

CLI Command: Always start with ng g c components/sb-[name] --standalone.

Organization: Follow strict folder conventions (components/, services/, pipes/, directives/).

2. Angular 21 Technical Standards

Signals: Mandatory use of signal(), computed(), and input() (Signal-based inputs).

Control Flow: Exclusively use @if, @for, and @switch.

Dependency Injection: Prefer the inject() function over constructor injection for cleaner architecture.

Standalone: All entities must be standalone: true.

3. The "sb-" Styling Protocol

Strict Prefixing: Every custom CSS class must start with sb-.

Naming: Semantic Kebab-case only (e.g., .sb-data-table, .sb-submit-btn).

Hybrid Styling: Leverage Bootstrap 5+ for layout (containers, rows, columns) and spacing (m-, p-), but apply sb- classes for all custom design, colors, and component-specific logic.

4. Typing & Clean Code

Strict TypeScript: No any. Use interfaces and types for all data structures.

Output: Always provide the full breakdown of .ts, .html, and .css files.