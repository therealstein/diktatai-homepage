<template>
  <div class="bg-base-100 text-base-content">
    <!-- Hero Section -->
    <div
      class="hero min-h-[50vh] relative"
      style="
        background: linear-gradient(135deg, #ef56a4 0%, #4a90e2 100%);
        background-size: cover;
        background-position: center;
      "
    >
      <div class="hero-content text-center">
        <div
          class="backdrop-blur-sm bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20 max-w-3xl"
        >
          <h1
            class="font-display text-4xl font-bold text-white mb-4"
            style="text-shadow: 0 0 5px rgba(0, 0, 0, 0.7)"
          >
            {{ t("hero.title") }}
          </h1>
          <p
            class="text-xl text-white mb-8"
            style="text-shadow: 0 0 5px rgba(0, 0, 0, 0.7)"
          >
            {{ t("hero.subtitle") }}
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="py-16 container mx-auto px-4 max-w-4xl">
      <div class="prose prose-lg max-w-none">
        <!-- Introduction -->
        <div class="mb-16">
          <p class="text-lg mb-8 text-center">
            {{ t("introduction") }}
          </p>
        </div>

        <!-- Contact Form Section -->
        <div class="mb-16">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t("form.title") }}
          </h2>
          <div class="card bg-base-200 p-8 rounded-2xl border border-base-300">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div v-if="successMessage" class="alert alert-success">
                <span>{{ successMessage }}</span>
              </div>
              <div v-if="errorMessage" class="alert alert-error">
                <span>{{ errorMessage }}</span>
              </div>

              <!-- Honeypot field - hidden from humans but visible to bots -->
              <div class="hidden">
                <label for="website">{{ t("form.website") }}</label>
                <input
                  v-model="form.website"
                  type="text"
                  id="website"
                  name="website"
                  autocomplete="off"
                  tabindex="-1"
                />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold"
                    >{{ t("form.name") }}*</span
                  >
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  :placeholder="t('form.namePlaceholder')"
                  class="input input-bordered w-full"
                  required
                />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold"
                    >{{ t("form.email") }}*</span
                  >
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  :placeholder="t('form.emailPlaceholder')"
                  class="input input-bordered w-full"
                  required
                />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold"
                    >{{ t("form.subject") }}*</span
                  >
                </label>
                <select
                  v-model="form.subject"
                  class="select select-bordered w-full"
                  required
                >
                  <option value="Allgemeine Frage">
                    {{ t("form.subjects.general") }}
                  </option>
                  <option value="Technischer Support">
                    {{ t("form.subjects.support") }}
                  </option>
                  <option value="Preisinformationen">
                    {{ t("form.subjects.pricing") }}
                  </option>
                  <option value="Feedback">
                    {{ t("form.subjects.feedback") }}
                  </option>
                  <option value="Business Suite">
                    {{ t("form.subjects.businessSuite") }}
                  </option>
                  <option value="Partnerschaftsanfrage">
                    {{ t("form.subjects.partnership") }}
                  </option>
                  <option value="Widerruf">
                    {{ t("form.subjects.widerruf") }}
                  </option>
                  <option value="Sonstiges">
                    {{ t("form.subjects.other") }}
                  </option>
                </select>
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold"
                    >{{ t("form.message") }}*</span
                  >
                </label>
                <textarea
                  v-model="form.message"
                  class="textarea textarea-bordered min-h-[200px] w-full"
                  :placeholder="t('form.messagePlaceholder')"
                  required
                ></textarea>
              </div>

              <div class="form-control">
                <div class="flex gap-2 items-start">
                  <input
                    v-model="form.privacyAccepted"
                    type="checkbox"
                    class="checkbox checkbox-primary shrink-0 mt-0.5"
                    required
                  />
                  <label
                    for="privacy"
                    class="label-text text-sm cursor-pointer"
                    style="word-break: break-word; overflow-wrap: break-word"
                  >
                    {{ t("form.privacyPrefix") }}
                    <NuxtLinkLocale
                      to="privacy"
                      class="text-pink-500 hover:text-pink-600 underline"
                      >{{ t("form.privacyLink") }}</NuxtLinkLocale
                    >
                    {{ t("form.privacySuffix") }}
                  </label>
                </div>
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text">{{ t("form.company") }}</span>
                </label>
                <input
                  v-model="form.company"
                  type="text"
                  :placeholder="t('form.companyPlaceholder')"
                  class="input input-bordered w-full"
                />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text">{{ t("form.phone") }}</span>
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  :placeholder="t('form.phonePlaceholder')"
                  class="input input-bordered w-full"
                />
              </div>

              <button
                type="submit"
                class="btn btn-primary w-full"
                :disabled="isLoading"
              >
                <span v-if="isLoading" class="loading loading-spinner"></span>
                {{ isLoading ? t("form.sending") : t("form.submit") }}
              </button>
            </form>
          </div>
        </div>

        <!-- Alternative Contact Methods -->
        <div class="mb-16">
          <h2 class="font-display text-3xl font-bold mb-8 text-center">
            {{ t("alternatives.title") }}
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <h3 class="font-display text-xl font-bold mb-4">
                {{ t("alternatives.email.title") }}
              </h3>
              <p class="mb-4">{{ t("alternatives.email.description") }}</p>
              <a
                href="mailto:support@diktat.ai"
                class="text-pink-500 hover:text-pink-600 font-bold"
                >support@diktat.ai</a
              >
            </div>

            <div
              class="card bg-base-200 p-6 rounded-2xl border border-base-300"
            >
              <h3 class="font-display text-xl font-bold mb-4">
                {{ t("alternatives.videocall.title") }}
              </h3>
              <p class="mb-4">{{ t("alternatives.videocall.description") }}</p>
              <a
                href="https://meet.brevo.com/steffenstein"
                target="_blank"
                class="text-pink-500 hover:text-pink-600 font-bold"
                >{{ t("alternatives.videocall.link") }} →</a
              >
            </div>
          </div>
        </div>

        <!-- Response Time Info -->
        <div
          class="card bg-base-200 p-6 rounded-2xl border border-base-300 mb-16"
        >
          <h2 class="font-display text-2xl font-bold mb-4">
            {{ t("response.title") }}
          </h2>
          <p class="mb-4">{{ t("response.description") }}</p>
          <p>{{ t("response.privacy", { link: "/privacy" }) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n({
  useScope: "local",
});
const { registerUrl } = useAppUrl();

// SEO Meta Tags
useHead({
  title: t("seo.title"),
  meta: [
    {
      name: "description",
      content: t("seo.description"),
    },
  ],
});

const form = ref({
  name: "",
  email: "",
  subject: "Allgemeine Frage",
  message: "",
  company: "",
  phone: "",
  privacyAccepted: false,
  website: "", // Honeypot field
});

const isLoading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const handleSubmit = async () => {
  try {
    // Check for bot submission
    if (form.value?.website) {
      // If the honeypot field is filled, it's likely a bot
      console.log("Bot submission detected");
      successMessage.value = "Ihre Nachricht wurde erfolgreich gesendet!"; // Show success even for bots
      return;
    }

    isLoading.value = true;
    errorMessage.value = "";
    successMessage.value = "";

    // Track form submission in PostHog
    const { $trackEvent } = useNuxtApp();

    // Track basic analytics event
    $trackEvent("contact_form_submission", {
      subject: form.value?.subject,
      has_company: !!form.value?.company,
      has_phone: !!form.value?.phone,
      privacy_accepted: form.value?.privacyAccepted,
    });

    // Track full form data as backup (excluding sensitive info)
    $trackEvent("contact_form_submission_full", {
      subject: form.value?.subject,
      email: form.value?.email,
      company: form.value?.company,
      phone: form.value?.phone,
      privacy_accepted: form.value?.privacyAccepted,
      message: form.value?.message,
      message_length: form.value?.message?.length || 0,
      timestamp: new Date().toISOString(),
    });

    const response = await $fetch("/api/contact", {
      method: "POST",
      body: {
        name: form.value?.name,
        email: form.value?.email,
        subject: form.value?.subject,
        message: form.value?.message,
        company: form.value?.company,
        phone: form.value?.phone,
      },
    });

    if (response.success) {
      successMessage.value = "Ihre Nachricht wurde erfolgreich gesendet!";
      form.value = {
        name: "",
        email: "",
        subject: "Allgemeine Frage",
        message: "",
        company: "",
        phone: "",
        privacyAccepted: false,
        website: "", // Reset honeypot field
      };
    } else {
      errorMessage.value =
        response.message ||
        "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.";
    }
  } catch (error) {
    errorMessage.value =
      "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.";
    console.error("Error submitting contact form:", error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
/* Override accent and secondary colors with pink */
:deep(.text-accent) {
  color: #ef56a4 !important;
}

:deep(.text-secondary) {
  color: #ef56a4 !important;
}

:deep(.bg-accent) {
  background-color: #ef56a4 !important;
}

:deep(.bg-secondary) {
  background-color: #ef56a4 !important;
}

.card {
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

/* Ensure honeypot field is properly hidden */
.hidden {
  position: absolute;
  left: -9999px;
  top: -9999px;
  height: 1px;
  width: 1px;
  overflow: hidden;
}
</style>

<i18n lang="json">
{
  "de": {
    "seo": {
      "title": "Kontakt aufnehmen - Diktat AI",
      "description": "Kontaktieren Sie uns für Fragen, Support oder Feedback zu Diktat AI. Wir sind für Sie da und antworten innerhalb von 24-48 Stunden."
    },
    "hero": {
      "title": "Kontaktieren Sie uns",
      "subtitle": "Haben Sie Fragen, Anregungen oder benötigen Sie Unterstützung? Wir sind für Sie da!"
    },
    "introduction": "Wir freuen uns darauf, von Ihnen zu hören. Egal, ob Sie mehr über Diktat AI erfahren möchten, Hilfe bei der Nutzung benötigen oder uns einfach Ihr Feedback mitteilen wollen – zögern Sie nicht, uns zu kontaktieren.",
    "form": {
      "title": "Kontaktformular",
      "name": "Name",
      "namePlaceholder": "Ihr Name",
      "email": "E-Mail-Adresse",
      "emailPlaceholder": "Ihre E-Mail-Adresse",
      "subject": "Betreff",
      "subjects": {
        "general": "Allgemeine Frage",
        "support": "Technischer Support",
        "pricing": "Preisinformationen",
        "businessSuite": "Business Suite",
        "feedback": "Feedback",
        "partnership": "Partnerschaftsanfrage",
        "widerruf": "Widerruf",
        "other": "Sonstiges"
      },
      "message": "Nachricht",
      "messagePlaceholder": "Ihre Nachricht an uns...",
      "company": "Firma/Organisation",
      "companyPlaceholder": "Ihre Firma/Organisation",
      "phone": "Telefonnummer (für Rückfragen)",
      "phonePlaceholder": "Ihre Telefonnummer",
      "privacyPrefix": "Ich habe die",
      "privacyLink": "Datenschutzerklärung",
      "privacyUrl": "/privacy",
      "privacySuffix": "gelesen und stimme der Verarbeitung meiner Daten zur Beantwortung meiner Anfrage zu.",
      "website": "Website",
      "submit": "Nachricht senden",
      "sending": "Wird gesendet..."
    },
    "alternatives": {
      "title": "Alternative Kontaktmöglichkeiten",
      "email": {
        "title": "Direkt per E-Mail",
        "description": "Sie können uns auch direkt eine E-Mail senden. Ideal für spezifische Anfragen oder wenn Sie Anhänge mitsenden möchten."
      },
      "videocall": {
        "title": "Live-Demo & Beratung per Videoanruf",
        "description": "Sie bevorzugen den persönlichen Austausch? Vereinbaren Sie einen Video-Termin für eine Live-Demo von Diktat AI, eine individuelle Beratung oder um Ihre Anforderungen im Detail zu diskutieren.",
        "link": "Jetzt Termin vereinbaren"
      },
      "faq": {
        "title": "Häufig gestellte Fragen",
        "description": "Vielleicht finden Sie bereits eine Antwort auf Ihre Frage in unseren FAQs.",
        "link": "Zu den FAQs"
      }
    },
    "response": {
      "title": "Was passiert nach Ihrer Kontaktaufnahme?",
      "description": "Wir bemühen uns, jede Anfrage zeitnah und sorgfältig zu bearbeiten. Sie können in der Regel innerhalb von 24-48 Stunden an Werktagen mit einer ersten Rückmeldung von uns rechnen.",
      "privacy": "Datenschutz ist uns wichtig: Ihre Daten werden selbstverständlich vertraulich behandelt und ausschließlich zur Bearbeitung Ihrer Anfrage gemäß unserer {link} und den DSGVO-Richtlinien verwendet."
    }
  },
  "en": {
    "seo": {
      "title": "Contact - Diktat AI",
      "description": "Contact us for questions, support, or feedback about Diktat AI. We're here to help and respond within 24-48 hours."
    },
    "hero": {
      "title": "Contact Us",
      "subtitle": "Have questions, suggestions, or need support? We're here for you!"
    },
    "introduction": "We look forward to hearing from you. Whether you want to learn more about Diktat AI, need help using it, or simply want to share your feedback - don't hesitate to contact us.",
    "form": {
      "title": "Contact Form",
      "name": "Name",
      "namePlaceholder": "Your name",
      "email": "Email address",
      "emailPlaceholder": "Your email address",
      "subject": "Subject",
      "subjects": {
        "general": "General Question",
        "support": "Technical Support",
        "pricing": "Pricing Information",
        "feedback": "Feedback",
        "businessSuite": "Business Suite",
        "partnership": "Partnership Inquiry",
        "widerruf": "Contract Cancellation",
        "other": "Other"
      },
      "message": "Message",
      "messagePlaceholder": "Your message to us...",
      "company": "Company/Organization",
      "companyPlaceholder": "Your company/organization",
      "phone": "Phone number (for inquiries)",
      "phonePlaceholder": "Your phone number",
      "privacyPrefix": "I have read the",
      "privacyLink": "Privacy Policy",
      "privacyUrl": "/privacy",
      "privacySuffix": "and agree to the processing of my data to answer my inquiry.",
      "website": "Website",
      "submit": "Send Message",
      "sending": "Sending..."
    },
    "alternatives": {
      "title": "Alternative Contact Methods",
      "email": {
        "title": "Direct Email",
        "description": "You can also send us an email directly. Perfect for specific inquiries or when you need to include attachments."
      },
      "videocall": {
        "title": "Live Demo & Consultation via Video Call",
        "description": "Do you prefer personal interaction? Schedule a video appointment for a live demo of Diktat AI, individual consultation, or to discuss your requirements in detail.",
        "link": "Schedule Appointment Now"
      },
      "faq": {
        "title": "Frequently Asked Questions",
        "description": "You might find an answer to your question in our FAQs.",
        "link": "Go to FAQs"
      }
    },
    "response": {
      "title": "What happens after you contact us?",
      "description": "We strive to process every inquiry promptly and carefully. You can usually expect an initial response from us within 24-48 hours on business days.",
      "privacy": "Privacy is important to us: Your data will be treated confidentially and used exclusively to process your inquiry in accordance with our {link} and GDPR guidelines."
    }
  },
  "nl": {
    "seo": {
      "title": "Contact opnemen - DiktatAI",
      "description": "Neem contact met ons op voor vragen, support of feedback over DiktatAI. Wij staan voor u klaar en reageren binnen 24-48 uur."
    },
    "hero": {
      "title": "Neem contact met ons op",
      "subtitle": "Heeft u vragen, suggesties of heeft u ondersteuning nodig? Wij staan voor u klaar!"
    },
    "introduction": "We kijken ernaar uit om van u te horen. Of u nu meer wilt weten over DiktatAI, hulp nodig heeft bij het gebruik of gewoon uw feedback wilt delen – aarzel niet om contact met ons op te nemen.",
    "form": {
      "title": "Contactformulier",
      "name": "Naam",
      "namePlaceholder": "Uw naam",
      "email": "E-mailadres",
      "emailPlaceholder": "Uw e-mailadres",
      "subject": "Onderwerp",
      "subjects": {
        "general": "Algemene vraag",
        "support": "Technische support",
        "pricing": "Prijsinformatie",
        "businessSuite": "Business Suite",
        "feedback": "Feedback",
        "partnership": "Partnerschapsaanvraag",
        "widerruf": "Herroeping",
        "other": "Overig"
      },
      "message": "Bericht",
      "messagePlaceholder": "Uw bericht aan ons...",
      "company": "Bedrijf/Organisatie",
      "companyPlaceholder": "Uw bedrijf/organisatie",
      "phone": "Telefoonnummer (voor vragen)",
      "phonePlaceholder": "Uw telefoonnummer",
      "privacyPrefix": "Ik heb de",
      "privacyLink": "privacyverklaring",
      "privacyUrl": "/privacy",
      "privacySuffix": "gelezen en ga akkoord met de verwerking van mijn gegevens voor de beantwoording van mijn aanvraag.",
      "website": "Website",
      "submit": "Bericht verzenden",
      "sending": "Wordt verzonden..."
    },
    "alternatives": {
      "title": "Alternatieve contactmogelijkheden",
      "email": {
        "title": "Direct per e-mail",
        "description": "U kunt ons ook direct een e-mail sturen. Ideaal voor specifieke vragen of als u bijlagen wilt meesturen."
      },
      "videocall": {
        "title": "Live demo & advies per videogesprek",
        "description": "Geeft u de voorkeur aan persoonlijk contact? Maak een video-afspraak voor een live demo van DiktatAI, een persoonlijk advies of om uw wensen in detail te bespreken.",
        "link": "Nu afspraak maken"
      },
      "faq": {
        "title": "Veelgestelde vragen",
        "description": "Misschien vindt u al een antwoord op uw vraag in onze FAQ's.",
        "link": "Naar de FAQ's"
      }
    },
    "response": {
      "title": "Wat gebeurt er na uw contactaanvraag?",
      "description": "We streven ernaar elke aanvraag tijdig en zorgvuldig te behandelen. U kunt doorgaans binnen 24-48 uur op werkdagen een eerste reactie van ons verwachten.",
      "privacy": "Privacy is belangrijk voor ons: Uw gegevens worden uiteraard vertrouwelijk behandeld en uitsluitend gebruikt voor de behandeling van uw aanvraag conform onze {link} en de AVG-richtlijnen."
    }
  }
}
</i18n>
