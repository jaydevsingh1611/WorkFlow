import * as Sentry from "@sentry/node";
Sentry.init({
  dsn: "https://afa907d7e624630dd3c50505f6bfb3fe@o4510766658682880.ingest.us.sentry.io/4510766670151680",
  integrations: [Sentry.mongooseIntegration()],
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});