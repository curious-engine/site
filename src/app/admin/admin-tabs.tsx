"use client";

import * as React from "react";

type AdminTabsProps = {
  companies: React.ReactNode;
  events: React.ReactNode;
  grants: React.ReactNode;
  admins: React.ReactNode;
};

const tabs = [
  { id: "companies", label: "Companies" },
  { id: "events", label: "Events" },
  { id: "grants", label: "Grant apps" },
  { id: "admins", label: "Admins" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function AdminTabs({ companies, events, grants, admins }: AdminTabsProps) {
  const [activeTab, setActiveTab] = React.useState<TabId>("companies");

  return (
    <section className="flex flex-col gap-6">
      <div className="flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-border bg-card p-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={
                "rounded-full px-4 py-2 text-sm font-medium transition-colors " +
                (isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground")
              }
              aria-pressed={isActive}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div hidden={activeTab !== "companies"}>{companies}</div>
      <div hidden={activeTab !== "events"}>{events}</div>
      <div hidden={activeTab !== "grants"}>{grants}</div>
      <div hidden={activeTab !== "admins"}>{admins}</div>
    </section>
  );
}