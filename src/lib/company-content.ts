import { promises as fs } from "fs";
import path from "path";
import { companies, type Company } from "@/content/companies";

const companiesPath = path.join(process.cwd(), "src", "content", "companies.ts");

function quote(value: string) {
  return JSON.stringify(value);
}

function renderOptionalBoolean(name: string, value: boolean | undefined) {
  return value === undefined ? "" : `    ${name}: ${value},\n`;
}

function renderOptionalString(name: string, value: string | undefined) {
  return value ? `    ${name}: ${quote(value)},\n` : "";
}

export function renderCompaniesModule(nextCompanies: Company[]) {
  const entries = nextCompanies
    .map((company) => {
      const highlights = company.highlights.map((highlight) => `      ${quote(highlight)},`).join("\n");

      return `  {\n    name: ${quote(company.name)},\n    tagline: ${quote(company.tagline)},\n    category: ${quote(company.category)},\n    description:\n      ${quote(company.description)},\n    href: ${quote(company.href)},\n${renderOptionalString("status", company.status)}    icon: ${quote(company.icon)},\n${renderOptionalBoolean("featured", company.featured)}${renderOptionalString("navDescription", company.navDescription)}    highlights: [\n${highlights}\n    ],\n  }`;
    })
    .join(",\n");

  return `export type CompanyIcon = "terminal" | "brain";\nexport type CompanyStatus = "beta" | "live" | "private";\n\nexport type Company = {\n  name: string;\n  tagline: string;\n  category: string;\n  description: string;\n  href: string;\n  status?: CompanyStatus;\n  icon: CompanyIcon;\n  featured?: boolean;\n  navDescription?: string;\n  highlights: string[];\n};\n\nexport const companies: Company[] = [\n${entries},\n];\n`;
}

export async function appendCompany(company: Company) {
  const nextCompanies = [...companies, company];
  await fs.writeFile(companiesPath, renderCompaniesModule(nextCompanies), "utf8");
}
