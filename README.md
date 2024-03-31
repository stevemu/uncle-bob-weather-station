## Setup Instructions

### Prerequisites

- Node.js installed on your machine
- pnpm installed

### Installation

1. **Install packages:**

   ```bash
   pnpm install
   ```

2. **Set up local test database:**

   ```bash
   pnpm migrate
   ```

# Prisma Dev Commands

- **migrate after updating schema**
  ```
  pnpm migrate
  ```
- **Merge migrations**
  - delete all migrations files
  - `npx prisma migrate dev --name merged_migration`
