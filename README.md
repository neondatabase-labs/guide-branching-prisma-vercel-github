# Database Branching with Neon, Prisma, Vercel and GitHub Actions

This example project demonstrates how to set up a database branching workflow using Neon, Vercel, Prisma, and GitHub Actions. It creates an isolated branch of the database for each pull request, runs the database migrations against this branch and deploys the application to a Vercel preview environment. 

Refer to the [TODO docs link](https://neon.tech/docs/) for a detailed explanation of the workflow.

## Prerequisites

Since this project involves deploying your github repository to Vercel and running GitHub Actions, you will need to fork this repository and set up the necessary secrets in your forked repository. 

You will need the following:
- A [Neon](https://neon.tech) account and a project
- A [Vercel](https://vercel.com) account
- A [GitHub](https://github.com) account

For the pull request workflow to work, you also need to add the following secrets to your GitHub repository:

- `NEON_PROJECT_ID` - The Neon project ID.
- `NEON_DATABASE_USERNAME` - The username from the Neon database connection string.
- `NEON_API_KEY` - The API key obtained from the Neon account.
- `DATABASE_URL` - The pooled connection string to the Neon database.
- `DIRECT_URL` - The direct connection string to the Neon database.
- `VERCEL_TOKEN` - The API key created from your Vercel dashboard.
- `GH_TOKEN` - The personal access token created from your GitHub account.

Refer to the companion guide for a detailed explanation of how to fetch these secrets from your Neon, Vercel, and GitHub accounts. If you're unfamiliar with how to add secrets to a GitHub repository, you can read more about it in [GitHub's documentation](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions?tool=webui).

## Set up the project locally

1. Clone the forked repository to your local machine.
```bash
git clone https://github.com/[YOUR_GITHUB_USERNAME]/guide-branching-prisma-vercel-github/
```

2. Navigate to the project directory and install the dependencies.
```bash
cd guide-branching-prisma-vercel-github/
npm install
```

3. Create a `.env` file in the root of the project and copy over the following variables from the Github secrets list. 
```bash
DATABASE_URL=
DIRECT_URL=
```

4. Run the initial database migration and seed the database.
```bash
npm run setup
```

5. Start the Next.js server to test the application locally. 
```bash
npm run dev
```

6. Visit `http://localhost:3000` in your browser to see the sample data in the `Elements` table. 

## Pull request workflow

1. Create a new branch from the `main` branch.
```bash
git checkout -b feature/new-branch
```

2. Make changes to the prisma schema and/or the application code. If you've changed the prisma schema, run the following command to generate the migration files.
```bash
npx prisma migrate dev --create-only
```

3. Commit the changes and push the branch to your forked repository.
```bash
git add . && git commit -m "feat: add new feature" && git push origin feature/new-branch
```

4. Create a pull request from the new branch to the `main` branch.

5. Once the pull request is created, the GitHub Actions workflow will run the following steps:
- Create a new branch in your Neon project.
- Run the database migrations against the new branch.
- Deploy the application to a Vercel preview environment.

6. Visit the Vercel preview URL to see the changes in the application.