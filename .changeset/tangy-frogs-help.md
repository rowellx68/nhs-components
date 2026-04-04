---
"nhsuk-frontend-react": patch
---

fix: add missing defaults for i18n

Node default i18n object was not set for FileUpload, PasswordInput, and Textarea causing the default translations to be removed.
