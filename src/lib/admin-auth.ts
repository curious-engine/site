import { auth, currentUser } from "@clerk/nextjs/server";
import { adminEmails as configuredAdminEmails } from "@/content/admins";

function splitEnvList(value: string | undefined) {
  return new Set(
    (value ?? "")
      .split(",")
      .map((item) => item.trim().toLowerCase())
      .filter(Boolean)
  );
}

function getClaimString(claims: unknown, keys: string[]) {
  if (!claims || typeof claims !== "object") return null;
  const record = claims as Record<string, unknown>;

  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" && value.trim()) return value.trim();
  }

  return null;
}

export async function getAdminAuth() {
  const session = await auth();
  const adminUserIds = splitEnvList(process.env.CLERK_ADMIN_USER_IDS);
  const adminEmails = new Set([...splitEnvList(process.env.CLERK_ADMIN_EMAILS), ...configuredAdminEmails.map((adminEmail) => adminEmail.toLowerCase())]);
  const userId = session.userId?.toLowerCase() ?? null;

  const claimEmail = getClaimString(session.sessionClaims, ["email", "primary_email_address", "email_address"]);
  const user = userId ? await currentUser() : null;
  const primaryEmail = user?.primaryEmailAddress?.emailAddress ?? user?.emailAddresses[0]?.emailAddress ?? null;
  const email = (claimEmail ?? primaryEmail)?.toLowerCase() ?? null;

  const isAdmin = Boolean((userId && adminUserIds.has(userId)) || (email && adminEmails.has(email)));

  return {
    ...session,
    isAdmin,
    email,
  };
}
