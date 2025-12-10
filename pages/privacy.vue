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
    title: "Datenschutzerklärung",
    content: "<div class=\"text-center pb-6 border-b border-indigo-200/30\"><h1 class=\"text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2\"> Datenschutzerklärung </h1><p class=\"text-lg text-gray-600 mb-4\"> Informationen zur Verarbeitung Ihrer personenbezogenen Daten </p><div class=\"h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto\"></div></div><section class=\"prose-custom max-w-none\"><h2>1. Verantwortlicher</h2><p> Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (Verordnung (EU) 2016/679, DSGVO) ist:<br><strong>ARTDROP OÜ</strong><br> Harju maakond, Kuusalu vald, Pudisoo küla, Männimäe/1, 74626<br> E-Mail: info[at]diktat.ai </p><h2>2. Allgemeines zur Datenverarbeitung</h2><p> Wir verarbeiten personenbezogene Daten der Nutzer nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung erfolgt auf Grundlage der DSGVO, insbesondere Art. 6 Abs. 1 lit. a, b und f. </p><blockquote> 💡 Hinweis: Soweit nicht anders angegeben, erfolgt die Verarbeitung und Speicherung sämtlicher Daten ausschließlich auf eigenbetriebenen Servern in Deutschland. </blockquote><h2>3. Zugriffsdaten und Hosting</h2><p> Wir betreiben unsere Server selbst in Deutschland und erheben dabei Daten über Zugriffe auf die Website, die als &quot;Server-Logfiles&quot; gespeichert werden. Folgende Daten werden protokolliert: </p><ul><li>Besuchte Website</li><li>Uhrzeit zum Zeitpunkt des Zugriffes</li><li>Menge der gesendeten Daten in Byte</li><li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li><li>Verwendeter Browser</li><li>Verwendetes Betriebssystem</li><li>Verwendete IP-Adresse (in anonymisierter Form)</li></ul><blockquote> 📍 Das Hosting erfolgt ausschließlich auf selbst betriebenen Servern in Deutschland. </blockquote><h2>4. Nutzung von KI-Diensten (Inference-Provider)</h2><p> Zur Verarbeitung bestimmter Inhalte setzen wir externe Infrastruktur-Services ein, insbesondere für KI-basierte Funktionen. Diese werden über sogenannte Inference-Provider wie Nebius AI (Amsterdam, Niederlande) und Hetzner Online GmbH (Deutschland) bereitgestellt. </p><blockquote> Dabei findet keine eigenständige KI-Trainingsverarbeitung statt. Die von Ihnen übermittelten Eingaben werden lediglich zur einmaligen Antwortgenerierung verwendet und nicht dauerhaft gespeichert oder zu Trainingszwecken weiterverwendet. </blockquote><p> Alle Datenverarbeitungen erfolgen unter Einhaltung der geltenden Datenschutzgesetze und nur zur unmittelbaren Erfüllung der angeforderten Leistung. </p><h2>5. Einsatz von Cloudflare</h2><p> Zum Schutz unserer Website und zur Optimierung der Ladezeiten verwenden wir den Dienst Cloudflare (Cloudflare, Inc., USA). Cloudflare wirkt als Content Delivery Network und Sicherheitsdienstleister. </p><blockquote> ℹ️ Die Datenübertragung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln. Weitere Informationen: <a href=\"https://www.cloudflare.com/privacypolicy/\" target=\"_blank\" rel=\"noopener noreferrer\">Cloudflare Privacy Policy</a></blockquote><h2>6. SSL-/TLS-Verschlüsselung</h2><p> Diese Seite nutzt eine SSL- bzw. TLS-Verschlüsselung, um vertrauliche Inhalte zu schützen. Eine verschlüsselte Verbindung erkennen Sie an &quot;https://&quot; und dem Schloss-Symbol in der Browserzeile. </p><h2>7. Registrierung mit Google</h2><p> Nutzer können sich mit einem bestehenden Google-Konto anmelden. Anbieter: Google Ireland Ltd., Dublin, Irland. Es gelten die <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Datenschutzbestimmungen von Google</a>. </p><h2>8. Trustpilot</h2><p> Wir binden Bewertungen von Trustpilot ein (Trustpilot A/S, Kopenhagen, Dänemark). Beim Aufruf der entsprechenden Seiten wird eine Verbindung zu Trustpilot-Servern hergestellt. <a href=\"https://de.legal.trustpilot.com/for-reviewers/end-user-privacy-terms\" target=\"_blank\" rel=\"noopener noreferrer\">Zur Datenschutzerklärung von Trustpilot</a></p><h2>9. Google Tag Manager</h2><p> Diese Website nutzt den Google Tag Manager zur Verwaltung von Tags. Der Tag Manager selbst verarbeitet keine personenbezogenen Daten. <a href=\"https://marketingplatform.google.com/about/analytics/tag-manager/use-policy/\" target=\"_blank\" rel=\"noopener noreferrer\">Weitere Informationen</a></p><h2>10. Google Ads</h2><p> Diese Website verwendet Google Ads zur Schaltung von Werbung und Conversion-Tracking. <a href=\"https://policies.google.com/technologies/ads\" target=\"_blank\" rel=\"noopener noreferrer\">Mehr erfahren</a></p><h2>11. Meta-Pixel, Conversion API &amp; Custom Audiences</h2><p> Zur Konversionsmessung und Zielgruppenbildung nutzen wir das Meta-Pixel, die Conversion API und Custom Audiences von Meta Platforms Ireland Ltd., Dublin. <a href=\"https://www.facebook.com/about/privacy/\" target=\"_blank\" rel=\"noopener noreferrer\">Meta-Datenschutz</a></p><h2>12. Affiliate-Partnerprogramm über Tolt</h2><p> Wir bieten ein Affiliate-Partnerprogramm über Tolt an. Wenn Sie an einer Zusammenarbeit interessiert sind, können Sie sich über einen personalisierten Empfehlungslink registrieren. Zur Nachverfolgung setzen wir Tracking-Cookies ein. Bei erfolgreicher Empfehlung erhalten die Affiliates eine Provision – für die Nutzer:innen entstehen dadurch keine Mehrkosten. </p><h2>13. Kunden- und Vertragsdaten</h2><p> Wir verarbeiten personenbezogene Daten nur, soweit dies für die Begründung, Durchführung oder Beendigung eines Vertragsverhältnisses erforderlich ist. </p><h2>14. Kommunikation über Freshdesk und Mailgun</h2><p> Supportanfragen über unser Kontaktformular oder per E-Mail werden über den Dienst <strong>Freshdesk</strong> (Freshworks GmbH, Deutschland) verarbeitet. Dabei wird Ihre Anfrage samt der angegebenen Kontaktdaten ausschließlich zum Zweck der Bearbeitung Ihres Anliegens gespeichert. </p><p> Für den Versand transaktionaler E-Mails (z. B. Bestellbestätigungen, Systembenachrichtigungen) sowie für unser E-Mail-Marketing verwenden wir den Dienstleister <strong>Mailgun Technologies, Inc.</strong> mit Sitz in den USA. Die Datenübertragung erfolgt auf Grundlage der EU-Standardvertragsklauseln. </p><ul><li><a href=\"https://www.freshworks.com/privacy/\" target=\"_blank\" rel=\"noopener noreferrer\">Datenschutzerklärung von Freshdesk</a></li><li><a href=\"https://www.mailgun.com/legal/privacy-policy/\" target=\"_blank\" rel=\"noopener noreferrer\">Datenschutzerklärung von Mailgun</a></li></ul><h2>15. Datenübermittlung bei Vertragsschluss</h2><p> Eine Übermittlung personenbezogener Daten an Dritte erfolgt nur zur Vertragsabwicklung (z. B. an Zahlungsdienstleister), nicht zu Werbezwecken. </p><h2>16. Zahlungsdienstleister: Stripe</h2><p> Wenn Sie mit Stripe bezahlen, erfolgt die Zahlungsabwicklung über Stripe Payments Europe, Ltd., Dublin, Irland. <a href=\"https://stripe.com/de/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Mehr erfahren</a></p><h2>17. Ihre Rechte</h2><p>Sie haben das Recht auf:</p><ul><li>Auskunft</li><li>Berichtigung</li><li>Löschung</li><li>Einschränkung der Verarbeitung</li><li>Datenübertragbarkeit</li><li>Widerspruch gegen die Verarbeitung</li></ul><p> Zudem besteht ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde innerhalb der EU – z. B.: </p><blockquote> 🇩🇪 <strong>Die Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</strong><br> Graurheindorfer Straße 153, 53117 Bonn, Deutschland<br><a href=\"https://www.bfdi.bund.de\" target=\"_blank\" rel=\"noopener noreferrer\">www.bfdi.bund.de</a></blockquote><p> Sie können sich aber auch an jede andere Datenschutzbehörde innerhalb der Europäischen Union wenden, z. B. auch an: </p><blockquote> 🏢 <strong>Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon)</strong><br> Tatari 39, 10134 Tallinn, Estonia<br><a href=\"https://www.aki.ee\" target=\"_blank\" rel=\"noopener noreferrer\">www.aki.ee</a></blockquote><h2>18. Aktualität und Änderungen</h2><p> Diese Datenschutzerklärung ist aktuell gültig (Stand: April 2025). Wir behalten uns vor, Änderungen vorzunehmen, wenn neue gesetzliche Vorgaben dies erforderlich machen oder sich unser Angebot ändert. </p></section>"
  },
  en: {
    title: "Privacy Policy",
    content: "<div class=\"text-center pb-6 border-b border-indigo-200/30\"><h1 class=\"text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2\"> Privacy Policy </h1><p class=\"text-lg text-gray-600 mb-4\"> Information on the processing of your personal data </p><div class=\"h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto\"></div></div><section class=\"prose-custom max-w-none\"><h2>1. Controller</h2><p> The controller responsible for data processing on this website within the meaning of the General Data Protection Regulation (Regulation (EU) 2016/679, GDPR) is:<br><strong>ARTDROP OÜ</strong><br> Harju maakond, Kuusalu vald, Pudisoo küla, Männimäe/1, 74626<br> Email: info[at]diktat.ai </p><h2>2. General Information on Data Processing</h2><p> We only process users' personal data to the extent necessary to provide a functional website as well as our content and services. Processing is carried out on the basis of the GDPR, in particular Art. 6 (1) lit. a, b and f. </p><blockquote> 💡 Note: Unless otherwise stated, all data processing and storage takes place exclusively on our own servers in Germany. </blockquote><h2>3. Access Data and Hosting</h2><p> We operate our servers ourselves in Germany and collect data about accesses to the website, which are stored as &quot;server log files&quot;. The following data is logged: </p><ul><li>Visited website</li><li>Time at the time of access</li><li>Amount of data sent in bytes</li><li>Source/reference from which you came to the page</li><li>Browser used</li><li>Operating system used</li><li>IP address used (in anonymized form)</li></ul><blockquote> 📍 Hosting takes place exclusively on our own servers in Germany. </blockquote><h2>4. Use of AI Services (Inference Providers)</h2><p> For processing certain content, we use external infrastructure services, especially for AI-based functions. These are provided via so-called inference providers such as Nebius AI (Amsterdam, Netherlands) and Hetzner Online GmbH (Germany). </p><blockquote> No independent AI training processing takes place. The inputs you submit are only used for one-time response generation and are not permanently stored or used for training purposes. </blockquote><p> All data processing is carried out in compliance with applicable data protection laws and only for the direct fulfillment of the requested service. </p><h2>5. Use of Cloudflare</h2><p> To protect our website and optimize loading times, we use the Cloudflare service (Cloudflare, Inc., USA). Cloudflare acts as a content delivery network and security service provider. </p><blockquote> ℹ️ Data transfer to the USA is based on EU standard contractual clauses. More information: <a href=\"https://www.cloudflare.com/privacypolicy/\" target=\"_blank\" rel=\"noopener noreferrer\">Cloudflare Privacy Policy</a></blockquote><h2>6. SSL/TLS Encryption</h2><p> This site uses SSL or TLS encryption to protect confidential content. You can recognize an encrypted connection by &quot;https://&quot; and the lock symbol in the browser bar. </p><h2>7. Registration with Google</h2><p> Users can log in with an existing Google account. Provider: Google Ireland Ltd., Dublin, Ireland. <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Google's privacy policy</a> applies. </p><h2>8. Trustpilot</h2><p> We integrate reviews from Trustpilot (Trustpilot A/S, Copenhagen, Denmark). When calling up the corresponding pages, a connection to Trustpilot servers is established. <a href=\"https://legal.trustpilot.com/for-reviewers/end-user-privacy-terms\" target=\"_blank\" rel=\"noopener noreferrer\">Trustpilot Privacy Policy</a></p><h2>9. Google Tag Manager</h2><p> This website uses Google Tag Manager to manage tags. The Tag Manager itself does not process any personal data. <a href=\"https://marketingplatform.google.com/about/analytics/tag-manager/use-policy/\" target=\"_blank\" rel=\"noopener noreferrer\">More information</a></p><h2>10. Google Ads</h2><p> This website uses Google Ads for advertising and conversion tracking. <a href=\"https://policies.google.com/technologies/ads\" target=\"_blank\" rel=\"noopener noreferrer\">Learn more</a></p><h2>11. Meta Pixel, Conversion API &amp; Custom Audiences</h2><p> For conversion measurement and audience building, we use the Meta Pixel, Conversion API and Custom Audiences from Meta Platforms Ireland Ltd., Dublin. <a href=\"https://www.facebook.com/about/privacy/\" target=\"_blank\" rel=\"noopener noreferrer\">Meta Privacy</a></p><h2>12. Affiliate Partner Program via Tolt</h2><p> We offer an affiliate partner program via Tolt. If you are interested in cooperation, you can register via a personalized referral link. We use tracking cookies for tracking purposes. If a referral is successful, affiliates receive a commission – this does not result in any additional costs for users. </p><h2>13. Customer and Contract Data</h2><p> We only process personal data to the extent necessary for the establishment, implementation or termination of a contractual relationship. </p><h2>14. Communication via Freshdesk and Mailgun</h2><p> Support requests via our contact form or email are processed via the service <strong>Freshdesk</strong> (Freshworks GmbH, Germany). Your request and the contact details provided are stored exclusively for the purpose of processing your request. </p><p> For sending transactional emails (e.g., order confirmations, system notifications) and for our email marketing, we use the service provider <strong>Mailgun Technologies, Inc.</strong> based in the USA. Data transfer is based on EU standard contractual clauses. </p><ul><li><a href=\"https://www.freshworks.com/privacy/\" target=\"_blank\" rel=\"noopener noreferrer\">Freshdesk Privacy Policy</a></li><li><a href=\"https://www.mailgun.com/legal/privacy-policy/\" target=\"_blank\" rel=\"noopener noreferrer\">Mailgun Privacy Policy</a></li></ul><h2>15. Data Transfer in Contract Conclusion</h2><p> Personal data is only transferred to third parties for contract processing (e.g., to payment service providers), not for advertising purposes. </p><h2>16. Payment Service Provider: Stripe</h2><p> If you pay with Stripe, payment processing is carried out via Stripe Payments Europe, Ltd., Dublin, Ireland. <a href=\"https://stripe.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Learn more</a></p><h2>17. Your Rights</h2><p>You have the right to:</p><ul><li>Access</li><li>Rectification</li><li>Erasure</li><li>Restriction of processing</li><li>Data portability</li><li>Object to processing</li></ul><p> In addition, there is a right to lodge a complaint with a data protection supervisory authority within the EU – e.g.: </p><blockquote> 🇩🇪 <strong>The Federal Commissioner for Data Protection and Freedom of Information (BfDI)</strong><br> Graurheindorfer Straße 153, 53117 Bonn, Germany<br><a href=\"https://www.bfdi.bund.de\" target=\"_blank\" rel=\"noopener noreferrer\">www.bfdi.bund.de</a></blockquote><p> However, you can also contact any other data protection authority within the European Union, e.g.: </p><blockquote> 🏢 <strong>Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon)</strong><br> Tatari 39, 10134 Tallinn, Estonia<br><a href=\"https://www.aki.ee\" target=\"_blank\" rel=\"noopener noreferrer\">www.aki.ee</a></blockquote><h2>18. Currency and Changes</h2><p> This privacy policy is currently valid (as of April 2025). We reserve the right to make changes if new legal requirements make this necessary or if our offer changes. </p></section>"
  },
  es: {
    title: "Política de Privacidad",
    content: "<div class=\"text-center pb-6 border-b border-indigo-200/30\"><h1 class=\"text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2\"> Política de Privacidad </h1><p class=\"text-lg text-gray-600 mb-4\"> Información sobre el tratamiento de sus datos personales </p><div class=\"h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto\"></div></div><section class=\"prose-custom max-w-none\"><h2>1. Responsable</h2><p> El responsable del tratamiento de datos en este sitio web en el sentido del Reglamento General de Protección de Datos (Reglamento (UE) 2016/679, RGPD) es:<br><strong>ARTDROP OÜ</strong><br> Harju maakond, Kuusalu vald, Pudisoo küla, Männimäe/1, 74626<br> Correo electrónico: info[at]diktat.ai </p><h2>2. Información general sobre el tratamiento de datos</h2><p> Solo procesamos los datos personales de los usuarios en la medida necesaria para proporcionar un sitio web funcional, así como nuestros contenidos y servicios. El tratamiento se realiza sobre la base del RGPD, en particular el Art. 6 (1) lit. a, b y f. </p><blockquote> 💡 Nota: Salvo que se indique lo contrario, todo el procesamiento y almacenamiento de datos se realiza exclusivamente en nuestros propios servidores en Alemania. </blockquote><h2>3. Datos de acceso y alojamiento</h2><p> Operamos nuestros propios servidores en Alemania y recopilamos datos sobre los accesos al sitio web, que se almacenan como \"archivos de registro del servidor\". Se registran los siguientes datos: </p><ul><li>Sitio web visitado</li><li>Hora en el momento del acceso</li><li>Cantidad de datos enviados en bytes</li><li>Fuente/referencia desde donde llegó a la página</li><li>Navegador utilizado</li><li>Sistema operativo utilizado</li><li>Dirección IP utilizada (en forma anonimizada)</li></ul><blockquote> 📍 El alojamiento se realiza exclusivamente en nuestros propios servidores en Alemania. </blockquote><h2>4. Uso de servicios de IA (proveedores de inferencia)</h2><p> Para procesar ciertos contenidos, utilizamos servicios de infraestructura externos, especialmente para funciones basadas en IA. Estos son proporcionados a través de los llamados proveedores de inferencia como Nebius AI (Ámsterdam, Países Bajos) y Hetzner Online GmbH (Alemania). </p><blockquote> No se realiza ningún procesamiento de entrenamiento de IA independiente. Las entradas que envía solo se utilizan para la generación de respuestas únicas y no se almacenan permanentemente ni se utilizan para fines de entrenamiento. </blockquote><p> Todo el procesamiento de datos se realiza de conformidad con las leyes de protección de datos aplicables y solo para el cumplimiento directo del servicio solicitado. </p><h2>5. Uso de Cloudflare</h2><p> Para proteger nuestro sitio web y optimizar los tiempos de carga, utilizamos el servicio Cloudflare (Cloudflare, Inc., EE.UU.). Cloudflare actúa como red de entrega de contenido y proveedor de servicios de seguridad. </p><blockquote> ℹ️ La transferencia de datos a EE.UU. se basa en las cláusulas contractuales estándar de la UE. Más información: <a href=\"https://www.cloudflare.com/privacypolicy/\" target=\"_blank\" rel=\"noopener noreferrer\">Política de privacidad de Cloudflare</a></blockquote><h2>6. Cifrado SSL/TLS</h2><p> Este sitio utiliza cifrado SSL o TLS para proteger el contenido confidencial. Puede reconocer una conexión cifrada por \"https://\" y el símbolo del candado en la barra del navegador. </p><h2>7. Registro con Google</h2><p> Los usuarios pueden iniciar sesión con una cuenta de Google existente. Proveedor: Google Ireland Ltd., Dublín, Irlanda. Se aplica la <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">política de privacidad de Google</a>. </p><h2>8. Trustpilot</h2><p> Integramos reseñas de Trustpilot (Trustpilot A/S, Copenhague, Dinamarca). Al acceder a las páginas correspondientes, se establece una conexión con los servidores de Trustpilot. <a href=\"https://legal.trustpilot.com/for-reviewers/end-user-privacy-terms\" target=\"_blank\" rel=\"noopener noreferrer\">Política de privacidad de Trustpilot</a></p><h2>9. Google Tag Manager</h2><p> Este sitio web utiliza Google Tag Manager para gestionar etiquetas. El Tag Manager en sí no procesa ningún dato personal. <a href=\"https://marketingplatform.google.com/about/analytics/tag-manager/use-policy/\" target=\"_blank\" rel=\"noopener noreferrer\">Más información</a></p><h2>10. Google Ads</h2><p> Este sitio web utiliza Google Ads para publicidad y seguimiento de conversiones. <a href=\"https://policies.google.com/technologies/ads\" target=\"_blank\" rel=\"noopener noreferrer\">Más información</a></p><h2>11. Meta Pixel, Conversion API y Custom Audiences</h2><p> Para la medición de conversiones y la creación de audiencias, utilizamos el Meta Pixel, la Conversion API y Custom Audiences de Meta Platforms Ireland Ltd., Dublín. <a href=\"https://www.facebook.com/about/privacy/\" target=\"_blank\" rel=\"noopener noreferrer\">Privacidad de Meta</a></p><h2>12. Programa de afiliados a través de Tolt</h2><p> Ofrecemos un programa de afiliados a través de Tolt. Si está interesado en cooperar, puede registrarse a través de un enlace de referencia personalizado. Utilizamos cookies de seguimiento para fines de rastreo. Si una referencia tiene éxito, los afiliados reciben una comisión – esto no resulta en costos adicionales para los usuarios. </p><h2>13. Datos de clientes y contratos</h2><p> Solo procesamos datos personales en la medida necesaria para el establecimiento, ejecución o terminación de una relación contractual. </p><h2>14. Comunicación a través de Freshdesk y Mailgun</h2><p> Las solicitudes de soporte a través de nuestro formulario de contacto o correo electrónico se procesan a través del servicio <strong>Freshdesk</strong> (Freshworks GmbH, Alemania). Su solicitud y los datos de contacto proporcionados se almacenan exclusivamente con el fin de procesar su solicitud. </p><p> Para el envío de correos electrónicos transaccionales (por ejemplo, confirmaciones de pedidos, notificaciones del sistema) y para nuestro marketing por correo electrónico, utilizamos el proveedor de servicios <strong>Mailgun Technologies, Inc.</strong> con sede en EE.UU. La transferencia de datos se basa en las cláusulas contractuales estándar de la UE. </p><ul><li><a href=\"https://www.freshworks.com/privacy/\" target=\"_blank\" rel=\"noopener noreferrer\">Política de privacidad de Freshdesk</a></li><li><a href=\"https://www.mailgun.com/legal/privacy-policy/\" target=\"_blank\" rel=\"noopener noreferrer\">Política de privacidad de Mailgun</a></li></ul><h2>15. Transferencia de datos en la celebración de contratos</h2><p> Los datos personales solo se transfieren a terceros para el procesamiento de contratos (por ejemplo, a proveedores de servicios de pago), no con fines publicitarios. </p><h2>16. Proveedor de servicios de pago: Stripe</h2><p> Si paga con Stripe, el procesamiento del pago se realiza a través de Stripe Payments Europe, Ltd., Dublín, Irlanda. <a href=\"https://stripe.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Más información</a></p><h2>17. Sus derechos</h2><p>Tiene derecho a:</p><ul><li>Acceso</li><li>Rectificación</li><li>Supresión</li><li>Limitación del tratamiento</li><li>Portabilidad de datos</li><li>Oposición al tratamiento</li></ul><p> Además, existe el derecho de presentar una queja ante una autoridad de supervisión de protección de datos dentro de la UE, por ejemplo: </p><blockquote> 🇩🇪 <strong>El Comisionado Federal para la Protección de Datos y la Libertad de Información (BfDI)</strong><br> Graurheindorfer Straße 153, 53117 Bonn, Alemania<br><a href=\"https://www.bfdi.bund.de\" target=\"_blank\" rel=\"noopener noreferrer\">www.bfdi.bund.de</a></blockquote><p> Sin embargo, también puede contactar con cualquier otra autoridad de protección de datos dentro de la Unión Europea, por ejemplo: </p><blockquote> 🏢 <strong>Inspección de Protección de Datos de Estonia (Andmekaitse Inspektsioon)</strong><br> Tatari 39, 10134 Tallin, Estonia<br><a href=\"https://www.aki.ee\" target=\"_blank\" rel=\"noopener noreferrer\">www.aki.ee</a></blockquote><h2>18. Vigencia y cambios</h2><p> Esta política de privacidad es válida actualmente (a fecha de abril de 2025). Nos reservamos el derecho de realizar cambios si nuevos requisitos legales lo hacen necesario o si nuestra oferta cambia. </p></section>"
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
      : 'Privacy Policy - Diktat AI'
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
