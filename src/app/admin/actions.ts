"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { adminEmails } from "@/content/admins";
import { companies, type Company, type CompanyIcon, type CompanyStatus } from "@/content/companies";
import { events, type Event } from "@/content/events";
import { getAdminAuth } from "@/lib/admin-auth";
import { appendAdminEmail, deleteAdminEmail } from "@/lib/admin-content";
import { appendCompany, deleteCompany, updateCompany } from "@/lib/company-content";
import { appendEvent, deleteEvent } from "@/lib/event-content";

const companyIcons = new Set<CompanyIcon>(["terminal", "brain"]);
const companyStatuses = new Set<CompanyStatus>(["beta", "live", "private"]);

async function assertAdmin() {
  const admin = await getAdminAuth();
  if (!admin.userId || !admin.isAdmin) {
    throw new Error("Unauthorized");
  }

  return admin;
}

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

function readCompany(formData: FormData) {
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

  return {
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
  } satisfies Company;
}

function revalidateCompanyPaths() {
  revalidatePath("/");
  revalidatePath("/portfolio");
  revalidatePath("/admin");
}

function revalidateEventPaths() {
  revalidatePath("/events");
  revalidatePath("/admin");
}

export async function addCompanyAction(formData: FormData) {
  await assertAdmin();

  const company = readCompany(formData);
  if (companies.some((currentCompany) => currentCompany.name.toLowerCase() === company.name.toLowerCase())) {
    throw new Error("A company with this name already exists");
  }

  await appendCompany(company);
  revalidateCompanyPaths();
  redirect("/admin?created=company");
}

export async function updateCompanyAction(formData: FormData) {
  await assertAdmin();

  const originalName = readString(formData, "originalName");
  const company = readCompany(formData);

  if (!originalName) {
    throw new Error("Missing company identifier");
  }

  if (
    companies.some(
      (currentCompany) =>
        currentCompany.name.toLowerCase() === company.name.toLowerCase() &&
        currentCompany.name.toLowerCase() !== originalName.toLowerCase()
    )
  ) {
    throw new Error("A company with this name already exists");
  }

  await updateCompany(originalName, company);
  revalidateCompanyPaths();
  redirect("/admin?updated=company");
}

export async function deleteCompanyAction(formData: FormData) {
  await assertAdmin();

  const name = readString(formData, "name");
  if (!name) {
    throw new Error("Missing company identifier");
  }

  await deleteCompany(name);
  revalidateCompanyPaths();
  redirect("/admin?deleted=company");
}

export async function addEventAction(formData: FormData) {
  await assertAdmin();

  const event: Event = {
    title: readString(formData, "title"),
    type: readString(formData, "type"),
    date: readString(formData, "date"),
    location: readString(formData, "location"),
    description: readString(formData, "description"),
  };

  if (!event.title || !event.type || !event.date || !event.location || !event.description) {
    throw new Error("Missing required event fields");
  }

  if (events.some((currentEvent) => currentEvent.title.toLowerCase() === event.title.toLowerCase())) {
    throw new Error("An event with this title already exists");
  }

  await appendEvent(event);
  revalidateEventPaths();
  redirect("/admin?created=event");
}

export async function deleteEventAction(formData: FormData) {
  await assertAdmin();

  const title = readString(formData, "title");
  if (!title) {
    throw new Error("Missing event identifier");
  }

  await deleteEvent(title);
  revalidateEventPaths();
  redirect("/admin?deleted=event");
}

function readEmail(formData: FormData) {
  const email = readString(formData, "email").toLowerCase();

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    throw new Error("Enter a valid email address");
  }

  return email;
}

export async function addAdminAction(formData: FormData) {
  await assertAdmin();

  const email = readEmail(formData);
  if (adminEmails.some((adminEmail) => adminEmail.toLowerCase() === email)) {
    throw new Error("That admin already exists");
  }

  await appendAdminEmail(email);
  revalidatePath("/admin");
  redirect("/admin?created=admin");
}

export async function deleteAdminAction(formData: FormData) {
  const admin = await assertAdmin();
  const email = readEmail(formData);
  const normalizedAdminEmails = adminEmails.map((adminEmail) => adminEmail.toLowerCase());

  if (admin.email === email) {
    throw new Error("You cannot remove your own admin access");
  }

  if (normalizedAdminEmails.length <= 1) {
    throw new Error("Cannot remove the last admin");
  }

  await deleteAdminEmail(email);
  revalidatePath("/admin");
  redirect("/admin?deleted=admin");
}
