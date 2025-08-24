// sentry.client.config.ts
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://<your_sentry_dsn>@o0.ingest.sentry.io/0", 
  tracesSampleRate: 1.0, 
});
