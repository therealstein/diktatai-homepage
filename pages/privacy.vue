<template>
  <div
    class="min-h-screen bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-white/40 py-12"
  >
    <div class="container mx-auto px-4 max-w-4xl">
      <!-- Main Content Card -->
      <div
        class="bg-white/70 backdrop-blur-sm border border-indigo-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200"
      >
        <section class="space-y-6">
          <!-- Title with gradient -->
          <div class="text-center pb-6 border-b border-indigo-200/30">
            <h1 class="text-4xl font-bold bg-gradient-to-r text-black mb-2">
              {{ pageContent.title }}
            </h1>
            <div
              class="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto"
            ></div>
          </div>

          <!-- Content -->
          <div class="prose-custom" v-html="pageContent.content"></div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();

// Content for both languages
const content = {
  de: {
    title: "Datenschutzerkl\u00e4rung / Privacy Policy",
    content: "<div class=\"text-center pb-6 border-b border-indigo-200/30\"><h1 class=\"text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2\"> Datenschutzerkl\u00e4rung </h1><p class=\"text-lg text-gray-600 mb-4\"> Informationen zur Verarbeitung Ihrer personenbezogenen Daten </p><div class=\"h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto\"></div></div><section class=\"prose-custom max-w-none\"><h2>1. Verantwortlicher</h2><p> Verantwortlich f\u00fcr die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (Verordnung (EU) 2016/679, DSGVO) ist:<br><strong>ARTDROP O\u00dc</strong><br> Harju maakond, Kuusalu vald, Pudisoo k\u00fcla, M\u00e4nnim\u00e4e/1, 74626<br> E-Mail: info[at]diktat.ai </p><h2>2. Allgemeines zur Datenverarbeitung</h2><p> Wir verarbeiten personenbezogene Daten der Nutzer nur, soweit dies zur Bereitstellung einer funktionsf\u00e4higen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung erfolgt auf Grundlage der DSGVO, insbesondere Art. 6 Abs. 1 lit. a, b und f. </p><blockquote> \ud83d\udca1 Hinweis: Soweit nicht anders angegeben, erfolgt die Verarbeitung und Speicherung s\u00e4mtlicher Daten ausschlie\u00dflich auf eigenbetriebenen Servern in Deutschland. </blockquote><h2>3. Zugriffsdaten und Hosting</h2><p> Wir betreiben unsere Server selbst in Deutschland und erheben dabei Daten \u00fcber Zugriffe auf die Website, die als &quot;Server-Logfiles&quot; gespeichert werden. Folgende Daten werden protokolliert: </p><ul><li>Besuchte Website</li><li>Uhrzeit zum Zeitpunkt des Zugriffes</li><li>Menge der gesendeten Daten in Byte</li><li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li><li>Verwendeter Browser</li><li>Verwendetes Betriebssystem</li><li>Verwendete IP-Adresse (in anonymisierter Form)</li></ul><blockquote> \ud83d\udccd Das Hosting erfolgt ausschlie\u00dflich auf selbst betriebenen Servern in Deutschland. </blockquote><h2>4. Nutzung von KI-Diensten (Inference-Provider)</h2><p> Zur Verarbeitung bestimmter Inhalte setzen wir externe Infrastruktur-Services ein, insbesondere f\u00fcr KI-basierte Funktionen. Diese werden \u00fcber sogenannte Inference-Provider wie Nebius AI (Amsterdam, Niederlande) und Hetzner Online GmbH (Deutschland) bereitgestellt. </p><blockquote> Dabei findet keine eigenst\u00e4ndige KI-Trainingsverarbeitung statt. Die von Ihnen \u00fcbermittelten Eingaben werden lediglich zur einmaligen Antwortgenerierung verwendet und nicht dauerhaft gespeichert oder zu Trainingszwecken weiterverwendet. </blockquote><p> Alle Datenverarbeitungen erfolgen unter Einhaltung der geltenden Datenschutzgesetze und nur zur unmittelbaren Erf\u00fcllung der angeforderten Leistung. </p><h2>5. Einsatz von Cloudflare</h2><p> Zum Schutz unserer Website und zur Optimierung der Ladezeiten verwenden wir den Dienst Cloudflare (Cloudflare, Inc., USA). Cloudflare wirkt als Content Delivery Network und Sicherheitsdienstleister. </p><blockquote> \u2139\ufe0f Die Daten\u00fcbertragung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln. Weitere Informationen: <a href=\"https://www.cloudflare.com/privacypolicy/\" target=\"_blank\" rel=\"noopener noreferrer\">Cloudflare Privacy Policy</a></blockquote><h2>6. SSL-/TLS-Verschl\u00fcsselung</h2><p> Diese Seite nutzt eine SSL- bzw. TLS-Verschl\u00fcsselung, um vertrauliche Inhalte zu sch\u00fctzen. Eine verschl\u00fcsselte Verbindung erkennen Sie an &quot;https://&quot; und dem Schloss-Symbol in der Browserzeile. </p><h2>7. Registrierung mit Google</h2><p> Nutzer k\u00f6nnen sich mit einem bestehenden Google-Konto anmelden. Anbieter: Google Ireland Ltd., Dublin, Irland. Es gelten die <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Datenschutzbestimmungen von Google</a>. </p><h2>8. Trustpilot</h2><p> Wir binden Bewertungen von Trustpilot ein (Trustpilot A/S, Kopenhagen, D\u00e4nemark). Beim Aufruf der entsprechenden Seiten wird eine Verbindung zu Trustpilot-Servern hergestellt. <a href=\"https://de.legal.trustpilot.com/for-reviewers/end-user-privacy-terms\" target=\"_blank\" rel=\"noopener noreferrer\">Zur Datenschutzerkl\u00e4rung von Trustpilot</a></p><h2>9. Google Tag Manager</h2><p> Diese Website nutzt den Google Tag Manager zur Verwaltung von Tags. Der Tag Manager selbst verarbeitet keine personenbezogenen Daten. <a href=\"https://marketingplatform.google.com/about/analytics/tag-manager/use-policy/\" target=\"_blank\" rel=\"noopener noreferrer\">Weitere Informationen</a></p><h2>10. Google Ads</h2><p> Diese Website verwendet Google Ads zur Schaltung von Werbung und Conversion-Tracking. <a href=\"https://policies.google.com/technologies/ads\" target=\"_blank\" rel=\"noopener noreferrer\">Mehr erfahren</a></p><h2>11. Meta-Pixel, Conversion API &amp; Custom Audiences</h2><p> Zur Konversionsmessung und Zielgruppenbildung nutzen wir das Meta-Pixel, die Conversion API und Custom Audiences von Meta Platforms Ireland Ltd., Dublin. <a href=\"https://www.facebook.com/about/privacy/\" target=\"_blank\" rel=\"noopener noreferrer\">Meta-Datenschutz</a></p><h2>12. Affiliate-Partnerprogramm \u00fcber Tolt</h2><p> Wir bieten ein Affiliate-Partnerprogramm \u00fcber Tolt an. Wenn Sie an einer Zusammenarbeit interessiert sind, k\u00f6nnen Sie sich \u00fcber einen personalisierten Empfehlungslink registrieren. Zur Nachverfolgung setzen wir Tracking-Cookies ein. Bei erfolgreicher Empfehlung erhalten die Affiliates eine Provision \u2013 f\u00fcr die Nutzer:innen entstehen dadurch keine Mehrkosten. </p><h2>13. Kunden- und Vertragsdaten</h2><p> Wir verarbeiten personenbezogene Daten nur, soweit dies f\u00fcr die Begr\u00fcndung, Durchf\u00fchrung oder Beendigung eines Vertragsverh\u00e4ltnisses erforderlich ist. </p><h2>14. Kommunikation \u00fcber Freshdesk und Mailgun</h2><p> Supportanfragen \u00fcber unser Kontaktformular oder per E-Mail werden \u00fcber den Dienst <strong>Freshdesk</strong> (Freshworks GmbH, Deutschland) verarbeitet. Dabei wird Ihre Anfrage samt der angegebenen Kontaktdaten ausschlie\u00dflich zum Zweck der Bearbeitung Ihres Anliegens gespeichert. </p><p> F\u00fcr den Versand transaktionaler E-Mails (z. B. Bestellbest\u00e4tigungen, Systembenachrichtigungen) sowie f\u00fcr unser E-Mail-Marketing verwenden wir den Dienstleister <strong>Mailgun Technologies, Inc.</strong> mit Sitz in den USA. Die Daten\u00fcbertragung erfolgt auf Grundlage der EU-Standardvertragsklauseln. </p><ul><li><a href=\"https://www.freshworks.com/privacy/\" target=\"_blank\" rel=\"noopener noreferrer\">Datenschutzerkl\u00e4rung von Freshdesk</a></li><li><a href=\"https://www.mailgun.com/legal/privacy-policy/\" target=\"_blank\" rel=\"noopener noreferrer\">Datenschutzerkl\u00e4rung von Mailgun</a></li></ul><h2>15. Daten\u00fcbermittlung bei Vertragsschluss</h2><p> Eine \u00dcbermittlung personenbezogener Daten an Dritte erfolgt nur zur Vertragsabwicklung (z. B. an Zahlungsdienstleister), nicht zu Werbezwecken. </p><h2>16. Zahlungsdienstleister: Stripe</h2><p> Wenn Sie mit Stripe bezahlen, erfolgt die Zahlungsabwicklung \u00fcber Stripe Payments Europe, Ltd., Dublin, Irland. <a href=\"https://stripe.com/de/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Mehr erfahren</a></p><h2>17. Ihre Rechte</h2><p>Sie haben das Recht auf:</p><ul><li>Auskunft</li><li>Berichtigung</li><li>L\u00f6schung</li><li>Einschr\u00e4nkung der Verarbeitung</li><li>Daten\u00fcbertragbarkeit</li><li>Widerspruch gegen die Verarbeitung</li></ul><p> Zudem besteht ein Beschwerderecht bei einer Datenschutz-Aufsichtsbeh\u00f6rde innerhalb der EU \u2013 z. B.: </p><blockquote> \ud83c\udde9\ud83c\uddea <strong>Die Bundesbeauftragte f\u00fcr den Datenschutz und die Informationsfreiheit (BfDI)</strong><br> Graurheindorfer Stra\u00dfe 153, 53117 Bonn, Deutschland<br><a href=\"https://www.bfdi.bund.de\" target=\"_blank\" rel=\"noopener noreferrer\">www.bfdi.bund.de</a></blockquote><p> Sie k\u00f6nnen sich aber auch an jede andere Datenschutzbeh\u00f6rde innerhalb der Europ\u00e4ischen Union wenden, z. B. auch an: </p><blockquote> \ud83c\udfe2 <strong>Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon)</strong><br> Tatari 39, 10134 Tallinn, Estonia<br><a href=\"https://www.aki.ee\" target=\"_blank\" rel=\"noopener noreferrer\">www.aki.ee</a></blockquote><h2>18. Aktualit\u00e4t und \u00c4nderungen</h2><p> Diese Datenschutzerkl\u00e4rung ist aktuell g\u00fcltig (Stand: April 2025). Wir behalten uns vor, \u00c4nderungen vorzunehmen, wenn neue gesetzliche Vorgaben dies erforderlich machen oder sich unser Angebot \u00e4ndert. </p></section>"
  },
  en: {
    title: "Datenschutzerkl\u00e4rung / Privacy Policy",
    content: "<div class=\"text-center pb-6 border-b border-indigo-200/30\"><h1 class=\"text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2\"> Datenschutzerkl\u00e4rung </h1><p class=\"text-lg text-gray-600 mb-4\"> Informationen zur Verarbeitung Ihrer personenbezogenen Daten </p><div class=\"h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto\"></div></div><section class=\"prose-custom max-w-none\"><h2>1. Verantwortlicher</h2><p> Verantwortlich f\u00fcr die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (Verordnung (EU) 2016/679, DSGVO) ist:<br><strong>ARTDROP O\u00dc</strong><br> Harju maakond, Kuusalu vald, Pudisoo k\u00fcla, M\u00e4nnim\u00e4e/1, 74626<br> E-Mail: info[at]diktat.ai </p><h2>2. Allgemeines zur Datenverarbeitung</h2><p> Wir verarbeiten personenbezogene Daten der Nutzer nur, soweit dies zur Bereitstellung einer funktionsf\u00e4higen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung erfolgt auf Grundlage der DSGVO, insbesondere Art. 6 Abs. 1 lit. a, b und f. </p><blockquote> \ud83d\udca1 Hinweis: Soweit nicht anders angegeben, erfolgt die Verarbeitung und Speicherung s\u00e4mtlicher Daten ausschlie\u00dflich auf eigenbetriebenen Servern in Deutschland. </blockquote><h2>3. Zugriffsdaten und Hosting</h2><p> Wir betreiben unsere Server selbst in Deutschland und erheben dabei Daten \u00fcber Zugriffe auf die Website, die als &quot;Server-Logfiles&quot; gespeichert werden. Folgende Daten werden protokolliert: </p><ul><li>Besuchte Website</li><li>Uhrzeit zum Zeitpunkt des Zugriffes</li><li>Menge der gesendeten Daten in Byte</li><li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li><li>Verwendeter Browser</li><li>Verwendetes Betriebssystem</li><li>Verwendete IP-Adresse (in anonymisierter Form)</li></ul><blockquote> \ud83d\udccd Das Hosting erfolgt ausschlie\u00dflich auf selbst betriebenen Servern in Deutschland. </blockquote><h2>4. Nutzung von KI-Diensten (Inference-Provider)</h2><p> Zur Verarbeitung bestimmter Inhalte setzen wir externe Infrastruktur-Services ein, insbesondere f\u00fcr KI-basierte Funktionen. Diese werden \u00fcber sogenannte Inference-Provider wie Nebius AI (Amsterdam, Niederlande) und Hetzner Online GmbH (Deutschland) bereitgestellt. </p><blockquote> Dabei findet keine eigenst\u00e4ndige KI-Trainingsverarbeitung statt. Die von Ihnen \u00fcbermittelten Eingaben werden lediglich zur einmaligen Antwortgenerierung verwendet und nicht dauerhaft gespeichert oder zu Trainingszwecken weiterverwendet. </blockquote><p> Alle Datenverarbeitungen erfolgen unter Einhaltung der geltenden Datenschutzgesetze und nur zur unmittelbaren Erf\u00fcllung der angeforderten Leistung. </p><h2>5. Einsatz von Cloudflare</h2><p> Zum Schutz unserer Website und zur Optimierung der Ladezeiten verwenden wir den Dienst Cloudflare (Cloudflare, Inc., USA). Cloudflare wirkt als Content Delivery Network und Sicherheitsdienstleister. </p><blockquote> \u2139\ufe0f Die Daten\u00fcbertragung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln. Weitere Informationen: <a href=\"https://www.cloudflare.com/privacypolicy/\" target=\"_blank\" rel=\"noopener noreferrer\">Cloudflare Privacy Policy</a></blockquote><h2>6. SSL-/TLS-Verschl\u00fcsselung</h2><p> Diese Seite nutzt eine SSL- bzw. TLS-Verschl\u00fcsselung, um vertrauliche Inhalte zu sch\u00fctzen. Eine verschl\u00fcsselte Verbindung erkennen Sie an &quot;https://&quot; und dem Schloss-Symbol in der Browserzeile. </p><h2>7. Registrierung mit Google</h2><p> Nutzer k\u00f6nnen sich mit einem bestehenden Google-Konto anmelden. Anbieter: Google Ireland Ltd., Dublin, Irland. Es gelten die <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Datenschutzbestimmungen von Google</a>. </p><h2>8. Trustpilot</h2><p> Wir binden Bewertungen von Trustpilot ein (Trustpilot A/S, Kopenhagen, D\u00e4nemark). Beim Aufruf der entsprechenden Seiten wird eine Verbindung zu Trustpilot-Servern hergestellt. <a href=\"https://de.legal.trustpilot.com/for-reviewers/end-user-privacy-terms\" target=\"_blank\" rel=\"noopener noreferrer\">Zur Datenschutzerkl\u00e4rung von Trustpilot</a></p><h2>9. Google Tag Manager</h2><p> Diese Website nutzt den Google Tag Manager zur Verwaltung von Tags. Der Tag Manager selbst verarbeitet keine personenbezogenen Daten. <a href=\"https://marketingplatform.google.com/about/analytics/tag-manager/use-policy/\" target=\"_blank\" rel=\"noopener noreferrer\">Weitere Informationen</a></p><h2>10. Google Ads</h2><p> Diese Website verwendet Google Ads zur Schaltung von Werbung und Conversion-Tracking. <a href=\"https://policies.google.com/technologies/ads\" target=\"_blank\" rel=\"noopener noreferrer\">Mehr erfahren</a></p><h2>11. Meta-Pixel, Conversion API &amp; Custom Audiences</h2><p> Zur Konversionsmessung und Zielgruppenbildung nutzen wir das Meta-Pixel, die Conversion API und Custom Audiences von Meta Platforms Ireland Ltd., Dublin. <a href=\"https://www.facebook.com/about/privacy/\" target=\"_blank\" rel=\"noopener noreferrer\">Meta-Datenschutz</a></p><h2>12. Affiliate-Partnerprogramm \u00fcber Tolt</h2><p> Wir bieten ein Affiliate-Partnerprogramm \u00fcber Tolt an. Wenn Sie an einer Zusammenarbeit interessiert sind, k\u00f6nnen Sie sich \u00fcber einen personalisierten Empfehlungslink registrieren. Zur Nachverfolgung setzen wir Tracking-Cookies ein. Bei erfolgreicher Empfehlung erhalten die Affiliates eine Provision \u2013 f\u00fcr die Nutzer:innen entstehen dadurch keine Mehrkosten. </p><h2>13. Kunden- und Vertragsdaten</h2><p> Wir verarbeiten personenbezogene Daten nur, soweit dies f\u00fcr die Begr\u00fcndung, Durchf\u00fchrung oder Beendigung eines Vertragsverh\u00e4ltnisses erforderlich ist. </p><h2>14. Kommunikation \u00fcber Freshdesk und Mailgun</h2><p> Supportanfragen \u00fcber unser Kontaktformular oder per E-Mail werden \u00fcber den Dienst <strong>Freshdesk</strong> (Freshworks GmbH, Deutschland) verarbeitet. Dabei wird Ihre Anfrage samt der angegebenen Kontaktdaten ausschlie\u00dflich zum Zweck der Bearbeitung Ihres Anliegens gespeichert. </p><p> F\u00fcr den Versand transaktionaler E-Mails (z. B. Bestellbest\u00e4tigungen, Systembenachrichtigungen) sowie f\u00fcr unser E-Mail-Marketing verwenden wir den Dienstleister <strong>Mailgun Technologies, Inc.</strong> mit Sitz in den USA. Die Daten\u00fcbertragung erfolgt auf Grundlage der EU-Standardvertragsklauseln. </p><ul><li><a href=\"https://www.freshworks.com/privacy/\" target=\"_blank\" rel=\"noopener noreferrer\">Datenschutzerkl\u00e4rung von Freshdesk</a></li><li><a href=\"https://www.mailgun.com/legal/privacy-policy/\" target=\"_blank\" rel=\"noopener noreferrer\">Datenschutzerkl\u00e4rung von Mailgun</a></li></ul><h2>15. Daten\u00fcbermittlung bei Vertragsschluss</h2><p> Eine \u00dcbermittlung personenbezogener Daten an Dritte erfolgt nur zur Vertragsabwicklung (z. B. an Zahlungsdienstleister), nicht zu Werbezwecken. </p><h2>16. Zahlungsdienstleister: Stripe</h2><p> Wenn Sie mit Stripe bezahlen, erfolgt die Zahlungsabwicklung \u00fcber Stripe Payments Europe, Ltd., Dublin, Irland. <a href=\"https://stripe.com/de/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Mehr erfahren</a></p><h2>17. Ihre Rechte</h2><p>Sie haben das Recht auf:</p><ul><li>Auskunft</li><li>Berichtigung</li><li>L\u00f6schung</li><li>Einschr\u00e4nkung der Verarbeitung</li><li>Daten\u00fcbertragbarkeit</li><li>Widerspruch gegen die Verarbeitung</li></ul><p> Zudem besteht ein Beschwerderecht bei einer Datenschutz-Aufsichtsbeh\u00f6rde innerhalb der EU \u2013 z. B.: </p><blockquote> \ud83c\udde9\ud83c\uddea <strong>Die Bundesbeauftragte f\u00fcr den Datenschutz und die Informationsfreiheit (BfDI)</strong><br> Graurheindorfer Stra\u00dfe 153, 53117 Bonn, Deutschland<br><a href=\"https://www.bfdi.bund.de\" target=\"_blank\" rel=\"noopener noreferrer\">www.bfdi.bund.de</a></blockquote><p> Sie k\u00f6nnen sich aber auch an jede andere Datenschutzbeh\u00f6rde innerhalb der Europ\u00e4ischen Union wenden, z. B. auch an: </p><blockquote> \ud83c\udfe2 <strong>Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon)</strong><br> Tatari 39, 10134 Tallinn, Estonia<br><a href=\"https://www.aki.ee\" target=\"_blank\" rel=\"noopener noreferrer\">www.aki.ee</a></blockquote><h2>18. Aktualit\u00e4t und \u00c4nderungen</h2><p> Diese Datenschutzerkl\u00e4rung ist aktuell g\u00fcltig (Stand: April 2025). Wir behalten uns vor, \u00c4nderungen vorzunehmen, wenn neue gesetzliche Vorgaben dies erforderlich machen oder sich unser Angebot \u00e4ndert. </p></section>"
  }
};

// Get content based on current locale
const pageContent = computed(() => {
  return content[locale.value] || content.de;
});

// SEO Meta Tags
useHead({
  title: computed(() =>
    locale.value === 'de'
      ? 'Datenschutzerklärung - Diktat AI'
      : 'Datenschutzerklärung - Diktat AI'
  ),
  meta: [
    {
      name: 'description',
      content: computed(() =>
        locale.value === 'de'
          ? 'Rechtliche Informationen für den Diktat AI Transkriptionsdienst.'
          : 'Legal information for Diktat AI transcription service.'
      ),
    },
    { name: 'robots', content: 'noindex, nofollow' },
  ],
});
</script>

<style scoped>
.prose-custom {
  @apply text-gray-700 leading-relaxed;
}

.prose-custom :deep(h1) {
  @apply text-3xl font-bold text-gray-800 mb-6 mt-8 first:mt-0;
}

.prose-custom :deep(h2) {
  @apply text-2xl font-semibold text-gray-800 mb-4 mt-8 first:mt-0;
  @apply border-b border-indigo-200/30 pb-2;
}

.prose-custom :deep(h3) {
  @apply text-xl font-semibold text-gray-800 mb-3 mt-6 first:mt-0;
}

.prose-custom :deep(h4) {
  @apply text-lg font-medium text-gray-800 mb-2 mt-4 first:mt-0;
}

.prose-custom :deep(p) {
  @apply text-gray-700 mb-4 leading-relaxed;
}

.prose-custom :deep(ul) {
  @apply list-disc list-inside space-y-2 mb-4 text-gray-700;
}

.prose-custom :deep(ol) {
  @apply list-decimal list-inside space-y-2 mb-4 text-gray-700;
}

.prose-custom :deep(li) {
  @apply text-gray-700 leading-relaxed;
}

.prose-custom :deep(strong) {
  @apply font-semibold text-gray-800;
}

.prose-custom :deep(em) {
  @apply italic text-gray-700;
}

.prose-custom :deep(a) {
  @apply text-indigo-600 hover:text-purple-600 underline transition-colors duration-200;
}

.prose-custom :deep(blockquote) {
  @apply border-l-4 border-indigo-300 pl-4 italic text-gray-600 my-4;
}

.prose-custom :deep(code) {
  @apply bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800;
}

.prose-custom :deep(pre) {
  @apply bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm;
}

.prose-custom :deep(table) {
  @apply w-full border-collapse border border-gray-300 my-4;
}

.prose-custom :deep(th) {
  @apply bg-indigo-50 border border-gray-300 px-4 py-2 font-semibold text-gray-800;
}

.prose-custom :deep(td) {
  @apply border border-gray-300 px-4 py-2 text-gray-700;
}

.prose-custom :deep(hr) {
  @apply border-t border-indigo-200/50 my-8;
}
</style>
