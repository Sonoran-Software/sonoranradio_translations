# Sonoran Radio Translation Files

This repository contains community sourced i18n translation files for [Sonoran Radio](https://sonoranradio.com).

Communities who wish to add or improve translations for Sonoran Radio in their native language can submit a manual PR.
Translations are updated with additional app releases.

## Tolgee sync

The `staging` branch syncs with Tolgee through GitHub Actions:

1. Push `en-us.json` source changes to `staging`.
2. The Tolgee Sync workflow pushes only `en-us.json` to Tolgee.
3. The workflow pulls translated JSON files from Tolgee and commits any updates back to `staging`.
4. The `radio-panel-frontend` promote-staging workflow fast-forwards this repo's `main` branch from `staging`.

Add new target languages in Tolgee. The next workflow run will pull them into this repo as `{languageTag}.json`.

To seed Tolgee from the existing translated JSON files, manually run the Tolgee Sync workflow with `import_existing_translations` set to `true`. Normal scheduled and push-triggered runs only push `en-us.json`.

Required GitHub secrets:

- `TOLGEE_API_KEY`
- `TOLGEE_PROJECT_ID`

Optional GitHub variable or secret:

- `TOLGEE_API_URL` for self-hosted Tolgee instances.
