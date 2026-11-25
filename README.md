# GURAK Cafe & Gallery

A bilingual (Persian/English), responsive static website concept for Gurak Cafe & Gallery in Kangan, Iran.

## Run locally
Open `index.html` in a browser. For a local server, use VS Code Live Server or run:
```bash
python -m http.server 8000
```
Then visit http://localhost:8000.

## Publish with GitHub Pages
1. Create a GitHub repository and upload all files/folders in this project.
2. Open **Settings → Pages**.
3. Under Build and deployment, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`, then Save.

## Before launch — replace placeholders
- Confirm the café's exact street address and Google Maps pin.
- Replace the placeholder phone number and Instagram URL.
- Add the approved menu, prices, sizes, allergens, and availability.
- Replace CSS-made product illustrations with real café / handmade product photography if available.
- Confirm opening hours and ordering workflow.

## QR menu
The menu section is at `#menu`. After publishing, create a QR code pointing to:
`https://YOUR-DOMAIN/#menu`
For a dedicated QR-only menu page, duplicate the menu section into a separate `menu.html` page.

## Notes
This is a front-end prototype. The menu currently uses sample items and intentionally blank prices. No online payment, inventory, or order-management backend is connected.
Herbal suggestions are informational only and do not claim to treat illness or reverse smoking-related lung damage.
