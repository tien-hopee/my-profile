import { notFound } from "next/navigation";
import { person } from "@/content/person";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/locales";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { PlatformsSection } from "@/components/sections/platforms-section";
import { EducationSection } from "@/components/sections/education-section";
import { ContactSection } from "@/components/sections/contact-section";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = getDictionary(locale);

  return (
    <>
      <HeroSection dictionary={dictionary} name={person.name} />
      <AboutSection dictionary={dictionary} />
      <SkillsSection dictionary={dictionary} />
      <ExperienceSection dictionary={dictionary} />
      <PlatformsSection dictionary={dictionary} />
      <EducationSection dictionary={dictionary} />
      <ContactSection dictionary={dictionary} />
    </>
  );
}
