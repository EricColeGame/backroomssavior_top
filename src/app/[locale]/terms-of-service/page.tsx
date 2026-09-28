import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal-page";

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service">
      <p>This site is an independent fan-made guide hub for the Backrooms universe. Content is provided for informational and entertainment purposes only.</p>
      <p>Levels, entities, codes, drops, and update details may change without notice. Always verify important information in-game or through official channels.</p>
      <p>By using this site, you agree not to misuse it, attempt unauthorized access, or present this fan wiki as an official Backrooms property or as affiliated with its original creators, game developers, or rights holders.</p>
      <p>Questions about these terms can be sent to <a className="font-semibold text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
