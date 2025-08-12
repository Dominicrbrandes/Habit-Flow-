// utils/index.js

/**
 * Generates a clean, safe URL path from a page name.
 * Example: "Add Habit" → "/add-habit"
 */
export function createPageUrl(name = "") {
  if (typeof name !== "string") return "/";
  const cleaned = name
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/gi, "")
    .toLowerCase();
  return `/${cleaned || ""}`;
}
