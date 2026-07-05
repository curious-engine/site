"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { companies, type Company, type CompanyIcon, type CompanyStatus } from "@/content/companies";
import { getAdminAuth } from "@/lib/admin-auth";
import { appendCompany } from "@/lib/company-content";

const companyIcons = new Set<CompanyIcon>(["terminal", "brain"]);
const companyStatuses = new Set<CompanyStatus>(["beta", "live", "private"]);

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function readOptionalString(formData: FormData, key: string) {
  const value = readString(formData, key);
  return value || undefined;
}

function readHighlights(value: string) {
  return value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

export async function addCompanyAction(formData: FormData) {
  const admin = await getAdminAuth();
  if (!admin.userId || !admin.isAdmin) {
    throw new Error("Unauthorized");
  }

  const name = readString(formData, "name");
  const tagline = readString(formData, "tagline");
  const category = readString(formData, "category");
  const description = readString(formData, "description");
  const href = readString(formData, "href");
  const icon = readString(formData, "icon") as CompanyIcon;
  const statusValue = readOptionalString(formData, "status") as CompanyStatus | undefined;
  const featured = formData.get("featured") === "on";
  const navDescription = readOptionalString(formData, "navDescription");
  const highlights = readHighlights(readString(formData, "highlights"));

  if (!name || !tagline || !category || !description || !href || !icon || highlights.length === 0) {
    throw new Error("Missing required company fields");
  }

  if (!companyIcons.has(icon)) {
    throw new Error("Invalid icon");
  }

  if (statusValue && !companyStatuses.has(statusValue)) {
    throw new Error("Invalid status");
  }

  if (companies.some((company) => company.name.toLowerCase() === name.toLowerCase())) {
    throw new Error("A company with this name already exists");
  }

  const company: Company = {
    name,
    tagline,
    category,
    description,
    href,
    status: statusValue,
    icon,
    featured,
    navDescription,
    highlights,
  };

  await appendCompany(company);
  revalidatePath("/");
  revalidatePath("/portfolio");
  revalidatePath("/admin");
  redirect("/admin?created=1");
}
