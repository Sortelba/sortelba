# SORTELS MATRIX

This is the codebase for the SORTELS MATRIX website, a futuristic hub for the skateboarding community.

## Project Structure

The project is structured to be clean, scalable, and easy to maintain.

- **/public**: Contains all static assets like images. Place your images in `/public/images`.
- **(src)** (implied structure, contains all `.tsx` files):
  - **/components**: Reusable React components used across multiple pages (e.g., Header, Footer).
  - **/data**: Centralized data files. This is where you edit content like news, alliance partners, or events.
  - **/pages**: Top-level components that represent a full page of the application.
  - `App.tsx`: The main application component, handling routing.
  - `index.tsx`: The entry point that renders the React app.
- `index.html`: The main HTML file.
- `index.css`: Global styles and custom CSS.
- `tailwind.config.js`: Configuration file for the Tailwind CSS framework.
- `package.json`: Project metadata and dependencies.
- `netlify.toml`: **Important:** This file contains the deployment settings for Netlify, preventing build errors.

## How to Add or Change Content

- **Alliance Partners, Mags, Vereine, etc.**: Open `data/alliance.ts` and edit the `allianceData` array.
- **System Announcements (News)**: Open `data/announcements.ts` and edit the `announcementData` array.
- **Events**: Open `data/events.ts` and edit the `events` object.
- **Images**: Upload your images to the `public/images` folder. Then, in the data files, reference them with a path like `/images/your-image.jpg`.

## Deployment with Netlify

This project is perfectly set up for deployment on Netlify. Here's how to do it:

1.  **Push to GitHub:**
    - Create a new repository on your GitHub account.
    - Upload all the files from this project (including the new `netlify.toml`) to your new repository.

2.  **Connect to Netlify:**
    - Sign up for a free account at [Netlify.com](https://www.netlify.com/), preferably by connecting your GitHub account.
    - Click "Add new site" -> "Import an existing project".
    - Select your GitHub repository.

3.  **Build Settings:**
    - Netlify will automatically read the `netlify.toml` file. You should not need to enter any build settings manually. The settings are:
    - **Build command:** `(set in netlify.toml)`
    - **Publish directory:** `(set in netlify.toml)`
    - Click **"Deploy site"**.

4.  **Connect Your Domain:**
    - Once the site is deployed, go to the "Domain settings" for your new site in Netlify.
    - Click "Add a domain" and follow the instructions to connect your `sortelba.de` domain. This usually involves changing the nameservers at the place where you bought your domain.

That's it! Every time you push a change to your GitHub repository, Netlify will automatically redeploy your website with the latest updates.