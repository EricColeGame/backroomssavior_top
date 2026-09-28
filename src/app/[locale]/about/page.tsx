import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal-page";

export default function AboutPage() {
  return (
    <LegalPage title="About">
      <p>{siteConfig.name} is an independent fan-built guide hub covering the Backrooms universe: level walkthroughs, entity and monster information, survival strategies, lore explanations, and exploration tips.</p>
      <p>Our goal is to keep level guides, entity databases, survival advice, and beginner walkthroughs in one place for new and veteran explorers alike.</p>
      <p>We are not affiliated with the original creators of the Backrooms, any Backrooms game developer, or their publishers. Questions or corrections can be sent to <a className="font-semibold text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
