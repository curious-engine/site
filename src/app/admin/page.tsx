import Link from "next/link";
import { notFound } from "next/navigation";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { companies } from "@/content/companies";
import { addCompanyAction } from "./actions";
import { getAdminAuth } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

const dashboardStats = [
  { label: "portfolio companies", value: companies.length.toString() },
  { label: "featured in nav", value: companies.filter((company) => company.featured).length.toString() },
  { label: "pending grants", value: "3" },
  { label: "open applications", value: "12" },
];

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
        <CompanyCms />
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
        <UserButton />
      </div>
    </header>
  );
}

function SampleDashboard({ email }: { email: string | null }) {
  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              You have full CMS access.
            </p>
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
      </div>
      <aside className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-xl font-semibold">Next actions</h2>
        <div className="mt-4 flex flex-col divide-y divide-border text-sm">
          <div className="py-3">
            <div className="font-medium">Review applications</div>
            <p className="mt-1 text-muted-foreground">Sample queue for incoming builder submissions.</p>
          </div>
          <div className="py-3">
            <div className="font-medium">Update portfolio</div>
            <p className="mt-1 text-muted-foreground">Add or edit companies once admin access is enabled.</p>
          </div>
          <div className="py-3">
            <div className="font-medium">Plan events</div>
            <p className="mt-1 text-muted-foreground">Placeholder for workshops and demo nights.</p>
          </div>
        </div>
      </aside>
    </section>
  );
}

function CompanyCms() {
  return (
    <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
      <form action={addCompanyAction} className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6">
        <div>
          <h2 className="text-xl font-semibold">Add company</h2>
          <p className="mt-1 text-sm text-muted-foreground">This writes a new entry to src/content/companies.ts.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm">
            Name
            <input name="name" required className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40" />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            URL
            <input name="href" required type="url" placeholder="https://example.com" className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40" />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Tagline
            <input name="tagline" required className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40" />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Category
            <input name="category" required placeholder="Developer Tools" className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40" />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Icon
            <select name="icon" required defaultValue="terminal" className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40">
              <option value="terminal">Terminal</option>
              <option value="brain">Brain</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Status
            <select name="status" defaultValue="beta" className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40">
              <option value="">None</option>
              <option value="beta">Beta</option>
              <option value="live">Live</option>
              <option value="private">Private</option>
            </select>
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm">
          Description
          <textarea name="description" required rows={5} className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40" />
        </label>

        <label className="flex flex-col gap-2 text-sm">
          Navbar description
          <input name="navDescription" className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40" />
        </label>

        <label className="flex flex-col gap-2 text-sm">
          Highlights
          <textarea name="highlights" required rows={5} placeholder={"One highlight per line"} className="rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-foreground/40" />
        </label>

        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <input name="featured" type="checkbox" className="size-4" />
          Show in navbar product dropdown
        </label>

        <button type="submit" className="w-fit rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85">
          Add company
        </button>
      </form>

      <aside className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
        <div>
          <h2 className="text-xl font-semibold">Companies</h2>
          <p className="mt-1 text-sm text-muted-foreground">{companies.length} entries</p>
        </div>
        <div className="flex flex-col divide-y divide-border">
          {companies.map((company) => (
            <div key={company.name} className="py-3">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium">{company.name}</span>
                {company.featured && <span className="text-[10px] uppercase tracking-widest text-muted-foreground">featured</span>}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{company.category}</p>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}