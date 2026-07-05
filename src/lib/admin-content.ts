import { promises as fs } from "fs";
import path from "path";
import { adminEmails } from "@/content/admins";

const adminsPath = path.join(process.cwd(), "src", "content", "admins.ts");

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function renderAdminsModule(nextAdminEmails: string[]) {
  const entries = nextAdminEmails.map((email) => `  ${JSON.stringify(email)},`).join("\n");
  return `export const adminEmails = [\n${entries}\n];\n`;
}

async function writeAdmins(nextAdminEmails: string[]) {
  await fs.writeFile(adminsPath, renderAdminsModule(nextAdminEmails), "utf8");
}

export async function appendAdminEmail(email: string) {
  const normalizedEmail = normalizeEmail(email);
  const nextAdminEmails = Array.from(new Set([...adminEmails.map(normalizeEmail), normalizedEmail])).sort();
  await writeAdmins(nextAdminEmails);
}

export async function deleteAdminEmail(email: string) {
  const normalizedEmail = normalizeEmail(email);
  const nextAdminEmails = adminEmails.map(normalizeEmail).filter((adminEmail) => adminEmail !== normalizedEmail);

  if (nextAdminEmails.length === adminEmails.length) {
    throw new Error("Admin not found");
  }

  if (nextAdminEmails.length === 0) {
    throw new Error("Cannot remove the last admin");
  }

  await writeAdmins(nextAdminEmails);
}