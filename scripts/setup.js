const { execSync } = require('child_process');
require('dotenv').config();

// Log the loaded environment variables
console.log("DATABASE_URL:", process.env.DATABASE_URL);

execSync('npx prisma migrate dev', { stdio: 'inherit', env: process.env });
execSync('npx prisma db seed', { stdio: 'inherit', env: process.env });
