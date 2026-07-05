import Link from "next/link";
import { notFound } from "next/navigation";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { adminEmails } from "@/content/admins";
import { companies, type Company, type CompanyIcon } from "@/content/companies";
import { events } from "@/content/events";
import {
  addAdminAction,
  addCompanyAction,
  addEventAction,
  deleteAdminAction,
  deleteCompanyAction,
  deleteEventAction,
  updateCompanyAction,
} from "./actions";
import { getAdminAuth } from "@/lib/admin-auth";
import { AdminTabs } from "./admin-tabs";

export const dynamic = "force-dynamic";

const grantApplications = [
  {
    name: "Aarav Mehta",
    project: "Open-source hardware debugger",
    status: "new",
    requested: "Rs 40,000",
  },
  {
    name: "Nisha Rao",
    project: "AI study planner for trade schools",
    status: "reviewing",
    requested: "Rs 25,000",
  },
  {
    name: "Dev Iyer",
    project: "Local-first invoice tool",
    status: "shortlisted",
    requested: "Rs 60,000",
  },
];

const dashboardStats = [
  { label: "portfolio companies", value: companies.length.toString() },
  { label: "featured in nav", value: companies.filter((company) => company.featured).length.toString() },
  { label: "events", value: events.length.toString() },
  { label: "grant applications", value: grantApplications.length.toString() },
  { label: "admins", value: adminEmails.length.toString() },
];

const companyIcons = ["terminal", "brain"] satisfies CompanyIcon[];

export default async function AdminPage() {
  const admin = await getAdminAuth();

  if (!admin.userId) {
    return <AdminGate />;
  }

  if (!admin.isAdmin) {
    notFound();
  }

  return (
    <main className="min-h-svh bg-background px-6 py-8 text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <AdminHeader title="admin dashboard" />
        <SampleDashboard email={admin.email} />
        <AdminTabs companies={<CompanyCms />} events={<EventCms />} grants={<GrantApplications />} admins={<AdminManagement currentAdminEmail={admin.email} />} />
      </div>
    </main>
  );
}

function AdminGate() {
  return (
    <main className="min-h-svh bg-background px-6 py-8 text-foreground">
      <section className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-xl flex-col justify-center gap-8">
        <Link href="/" className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground">
          back to site
        </Link>
        <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">admin</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">Sign in to continue</h1>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            This is the private admin entry point. Create your account here, then return to this page to view the dashboard.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <SignUpButton mode="modal" forceRedirectUrl="/admin">
              <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85">
                sign up
              </button>
            </SignUpButton>
            <SignInButton mode="modal" forceRedirectUrl="/admin">
              <button className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                sign in
              </button>
            </SignInButton>
          </div>
        </div>
      </section>
    </main>
  );
}

function AdminHeader({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-border pb-6">
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">admin</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        <Link href="/portfolio" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
          view portfolio
        </Link>
        <Link href="/events" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
          view events
        </Link>
        <UserButton />
      </div>
    </header>
  );
}

function SampleDashboard({ email }: { email: string | null }) {
  return (
    <section className="rounded-xl border border-border bg-card p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="mt-1 text-sm text-muted-foreground">You have full CMS access.</p>
        </div>
        {email && <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{email}</span>}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-border bg-background p-4">
            <div className="text-2xl font-semibold tracking-tight">{stat.value}</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CompanyCms() {
  return (
    <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
      <div className="flex flex-col gap-4">
        <SectionHeading eyebrow="companies" title="Edit company list" description="Update portfolio entries, feature them in the navbar, or remove stale companies." />
        {companies.map((company) => (
          <CompanyEditor key={company.name} company={company} />
        ))}
      </div>

      <form action={addCompanyAction} className="flex h-fit flex-col gap-5 rounded-xl border border-border bg-card p-6">
        <div>
          <h3 className="text-lg font-semibold">Add company</h3>
          <p className="mt-1 text-sm text-muted-foreground">New entries appear on the portfolio page.</p>
        </div>
        <CompanyFields />
        <button type="submit" className="w-fit rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85">
          Add company
        </button>
      </form>
    </section>
  );
}

function CompanyEditor({ company }: { company: Company }) {
  return (
    <details className="group rounded-xl border border-border bg-card p-6">
      <summary className="flex cursor-pointer list-none flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold">{company.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{company.category}</p>
        </div>
        <span className="text-sm text-muted-foreground transition-colors group-open:text-foreground">Edit</span>
      </summary>

      <div className="mt-6 border-t border-border pt-6">
        <div className="mb-5 flex justify-end">
          <form action={deleteCompanyAction}>
            <input type="hidden" name="name" value={company.name} />
            <button type="submit" className="rounded-full border border-destructive/30 px-4 py-2 text-sm text-destructive transition-colors hover:bg-destructive/10">
              Delete
            </button>
          </form>
        </div>
        <form action={updateCompanyAction} className="flex flex-col gap-5">
          <input type="hidden" name="originalName" value={company.name} />
          <CompanyFields company={company} />
          <button type="submit" className="w-fit rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:bg-muted">
            Save company
          </button>
        </form>
      </div>
    </details>
  );
}

function CompanyFields({ company }: { company?: Company }) {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          Name
          <input name="name" required defaultValue={company?.name} className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          URL
          <input name="href" required type="url" placeholder="https://example.com" defaultValue={company?.href} className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Tagline
          <input name="tagline" required defaultValue={company?.tagline} className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Category
          <input name="category" required placeholder="Developer Tools" defaultValue={company?.category} className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Icon
          <select name="icon" required defaultValue={company?.icon ?? "terminal"} className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40">
            {companyIcons.map((icon) => (
              <option key={icon} value={icon}>{icon}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Status
          <select name="status" defaultValue={company?.status ?? ""} className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40">
            <option value="">None</option>
            <option value="beta">Beta</option>
            <option value="live">Live</option>
            <option value="private">Private</option>
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm">
        Description
        <textarea name="description" required rows={5} defaultValue={company?.description} className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40" />
      </label>

      <label className="flex flex-col gap-2 text-sm">
        Navbar description
        <input name="navDescription" defaultValue={company?.navDescription} className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40" />
      </label>

      <label className="flex flex-col gap-2 text-sm">
        Highlights
        <textarea name="highlights" required rows={5} placeholder="One highlight per line" defaultValue={company?.highlights.join("\n")} className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40" />
      </label>

      <label className="flex items-center gap-2 text-sm text-muted-foreground">
        <input name="featured" type="checkbox" defaultChecked={company?.featured} className="size-4" />
        Show in navbar product dropdown
      </label>
    </>
  );
}

function EventCms() {
  return (
    <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
      <div className="flex flex-col gap-4">
        <SectionHeading eyebrow="events" title="Create or delete events" description="Events listed here are shown on the public events page." />
        <div className="flex flex-col divide-y divide-border rounded-xl border border-border bg-card p-6">
          {events.map((event) => (
            <details key={event.title} className="group py-4 first:pt-0 last:pb-0">
              <summary className="flex cursor-pointer list-none flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold">{event.title}</h3>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">{event.type}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{event.date} - {event.location}</p>
                </div>
                <span className="text-sm text-muted-foreground transition-colors group-open:text-foreground">View</span>
              </summary>
              <div className="mt-4 flex flex-col gap-4 border-t border-border pt-4 sm:flex-row sm:items-start sm:justify-between">
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground">{event.description}</p>
                <form action={deleteEventAction}>
                  <input type="hidden" name="title" value={event.title} />
                  <button type="submit" className="rounded-full border border-destructive/30 px-4 py-2 text-sm text-destructive transition-colors hover:bg-destructive/10">
                    Delete
                  </button>
                </form>
              </div>
            </details>
          ))}
        </div>
      </div>

      <form action={addEventAction} className="flex h-fit flex-col gap-5 rounded-xl border border-border bg-card p-6">
        <div>
          <h3 className="text-lg font-semibold">Add event</h3>
          <p className="mt-1 text-sm text-muted-foreground">Create a new public event listing.</p>
        </div>
        <label className="flex flex-col gap-2 text-sm">
          Title
          <input name="title" required className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Type
          <input name="type" required placeholder="Meetup" className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Date
          <input name="date" required placeholder="Coming soon" className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Location
          <input name="location" required placeholder="Bangalore, India" className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Description
          <textarea name="description" required rows={5} className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40" />
        </label>
        <button type="submit" className="w-fit rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85">
          Add event
        </button>
      </form>
    </section>
  );
}

function AdminManagement({ currentAdminEmail }: { currentAdminEmail: string | null }) {
  return (
    <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
      <div className="flex flex-col gap-4">
        <SectionHeading eyebrow="access" title="Admin users" description="Only these emails can open the admin dashboard after signing in." />
        <div className="flex flex-col divide-y divide-border rounded-xl border border-border bg-card p-6">
          {adminEmails.map((email) => {
            const isCurrentAdmin = currentAdminEmail === email.toLowerCase();
            return (
              <div key={email} className="flex flex-col gap-3 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="font-medium">{email}</div>
                  {isCurrentAdmin && <p className="mt-1 text-xs text-muted-foreground">Current session</p>}
                </div>
                <form action={deleteAdminAction}>
                  <input type="hidden" name="email" value={email} />
                  <button
                    type="submit"
                    disabled={isCurrentAdmin || adminEmails.length <= 1}
                    className="rounded-full border border-destructive/30 px-4 py-2 text-sm text-destructive transition-colors hover:bg-destructive/10 disabled:pointer-events-none disabled:opacity-40"
                  >
                    Remove
                  </button>
                </form>
              </div>
            );
          })}
        </div>
      </div>

      <form action={addAdminAction} className="flex h-fit flex-col gap-5 rounded-xl border border-border bg-card p-6">
        <div>
          <h3 className="text-lg font-semibold">Add admin</h3>
          <p className="mt-1 text-sm text-muted-foreground">They must sign in with this exact email address.</p>
        </div>
        <label className="flex flex-col gap-2 text-sm">
          Email
          <input name="email" required type="email" placeholder="person@example.com" className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40" />
        </label>
        <button type="submit" className="w-fit rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85">
          Add admin
        </button>
      </form>
    </section>
  );
}

function GrantApplications() {
  return (
    <section className="rounded-xl border border-border bg-card p-6">
      <SectionHeading eyebrow="grants" title="Grant applications" description="Placeholder list until the public application form is connected." />
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-border text-xs uppercase tracking-widest text-muted-foreground">
            <tr>
              <th className="py-3 pr-4 font-medium">Applicant</th>
              <th className="py-3 pr-4 font-medium">Project</th>
              <th className="py-3 pr-4 font-medium">Requested</th>
              <th className="py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {grantApplications.map((application) => (
              <tr key={`${application.name}-${application.project}`}>
                <td className="py-4 pr-4 font-medium">{application.name}</td>
                <td className="py-4 pr-4 text-muted-foreground">{application.project}</td>
                <td className="py-4 pr-4 text-muted-foreground">{application.requested}</td>
                <td className="py-4">
                  <span className="rounded-full border border-border px-2 py-1 text-xs text-muted-foreground">{application.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-muted-foreground">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
