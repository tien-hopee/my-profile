import type { ContactLink } from "./types";

/*
  Contact details are NOT present in the source CV. They render as visible
  placeholders so the site never publishes invented contact information.

  → Replace each `value`, add an `href`, and delete `isPlaceholder: true`.
  Labels are translated per locale in Dictionary.profile.contactLabels.
*/
export const contactLinks: ContactLink[] = [
  { id: "email", value: "your.email@example.com", isPlaceholder: true },
  { id: "phone", value: "+84 000 000 000", isPlaceholder: true },
  { id: "github", value: "github.com/your-handle", isPlaceholder: true },
  { id: "linkedin", value: "linkedin.com/in/your-handle", isPlaceholder: true },
  { id: "location", value: "City, Vietnam", isPlaceholder: true },
];

/** Education and language levels are also absent from the source CV. */
export const hasEducationPlaceholder = true;
export const hasLanguagePlaceholder = true;
