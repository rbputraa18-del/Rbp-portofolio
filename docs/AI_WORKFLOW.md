# PORTFOLIO — AI WORKFLOW

## Team Structure
```text
YOU
Final Decision Maker
       │
       ▼
CHATGPT
Architect / Leader
       │
       ├───────────────┐
       ▼               ▼
CLAUDE             DEEPSEEK
Primary Executor   Reviewer / Second Engineer
       │               │
       └───────┬───────┘
               ▼
        Portfolio Website
```

## Rekha — Owner
Final authority for:
- product decisions
- visual approval
- scope
- content
- final acceptance

AI suggestions never override owner decisions.

## ChatGPT — Architect / Leader
Responsible for:
- project direction
- scope
- requirements interpretation
- milestone breakdown
- architecture review
- implementation strategy
- consistency
- preventing unnecessary complexity
- preparing executor prompts

## Claude — Primary Executor
Responsible for:
- repository discovery
- frontend implementation
- components
- responsive implementation
- interaction/animation
- routing
- refactoring
- testing
- implementation reports

Before major architecture changes, stop and report.

## DeepSeek — Reviewer / Second Engineer
Responsible for:
- code review
- bug investigation
- debugging
- architecture second opinion
- responsive review
- accessibility review
- performance review
- targeted fixes when explicitly requested

Do not independently redefine the product.

## Execution Cycle
```text
1. Define milestone
        ↓
2. ChatGPT prepares task
        ↓
3. Claude inspects / implements
        ↓
4. Claude reports
        ↓
5. DeepSeek reviews when useful
        ↓
6. ChatGPT evaluates
        ↓
7. Rekha approves / requests changes
        ↓
8. Next milestone
```

## Claude Report
```text
STATUS
CHANGES
FILES
TESTS
ISSUES
NEXT STEP
```

## DeepSeek Review
```text
REVIEW

Critical:
-

High:
-

Medium:
-

Low:
-

Recommended Actions:
-

Potential Risks:
-
```

## Stop Conditions
Stop and ask when:
- a major architecture change is needed
- a material requirement is ambiguous
- a project fact is missing
- a sensitive asset may be exposed
- a significant dependency is required
- implementation conflicts with approved design
- scope expands beyond the milestone

## Patch-First Principle
Prefer small, reversible changes, existing conventions, reuse, and minimal dependencies.

Avoid unnecessary rewrites, architecture replacement, unrelated features, and unapproved visual direction changes.

## Source of Truth
The supporting documentation is intentionally limited to these six files:
1. PROJECT_BRIEF.md
2. DESIGN_SYSTEM.md
3. ARCHITECTURE.md
4. CONTENT.md
5. ROADMAP.md
6. AI_WORKFLOW.md

Do not create additional supporting documentation unless the owner explicitly requests it or a genuinely necessary technical artifact cannot reasonably live in these six files.

## Communication
AI agents should report directly:
- what happened
- what changed
- what remains
- risks
- next action

The goal is controlled execution, not document volume.
