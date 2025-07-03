import "dotenv/config";
import { Sequelize } from "sequelize";

const dbUrl =
  process.env.DATABASE_URL || process.env.PG_URL_DOCKER || process.env.PG_URL;

if (!dbUrl) {
  throw new Error(
    "No database connection URL found (DATABASE_URL, PG_URL_DOCKER or PG_URL)!",
  );
}

const sequelize = new Sequelize(dbUrl, {
  define: {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});

try {
  await sequelize.authenticate();
  console.log("Database connection has been established successfully.");
} catch (error) {
  console.log("Unable to connect to the database.", error);
}

export default sequelize;
