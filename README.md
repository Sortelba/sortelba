# SORTELS MATRIX

This is the codebase for the SORTELS MATRIX website, a futuristic hub for the skateboarding community. This project is built with React and Vite.

## Project Structure

- **/public**: Contains all static assets like images, which are copied directly to the output directory.
- **(root)**: Contains all source files (`.tsx`), components, pages, and data files.
  - **/components**: Reusable React components.
  - **/data**: Centralized data files for content like news, partners, or events.
  - **/pages**: Top-level components representing a full page.
- `index.html`: The main HTML template.
- `index.css`: Global styles, including Tailwind CSS imports.
- `vite.config.ts`: Configuration for the Vite build tool.
- `tailwind.config.js`: Configuration for the Tailwind CSS framework.
- `package.json`: Project metadata and dependencies.
- `netlify.toml`: Deployment settings for Netlify.

## How to Add or Change Content

- **Alliance Partners, Mags, Vereine, etc.**: Open `data/alliance.ts` and edit the `allianceData` array.
- **System Announcements (News)**: Open `data/announcements.ts` and edit the `announcementData` array.
- **Events**: Open `data/events.ts` and edit the `events` object.
- **Images**: Place your images in the `/public/images` folder. Then, in the data files, reference them with a path like `/images/your-image.jpg`.

## Local Development

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    This will start a local server, typically at `http://localhost:5173`. The site will automatically reload when you make changes to the code.

## Deployment with Netlify

This project is perfectly set up for deployment on Netlify.

1.  **Push to GitHub:**
    - Create a new repository on your GitHub account.
    - Upload all project files to the new repository.

2.  **Connect to Netlify:**
    - Sign up for a free account at [Netlify.com](https://www.netlify.com/), preferably by connecting your GitHub account.
    - Click "Add new site" -> "Import an existing project".
    - Select your GitHub repository.

3.  **Build Settings:**
    - Netlify will automatically detect that you have a `netlify.toml` file and use its settings. You shouldn't need to change anything, but for confirmation, the settings should be:
      - **Build command:** `npm run build`
      - **Publish directory:** `dist`
    - Click **"Deploy site"**.

4.  **Connect Your Domain:**
    - Once the site is deployed, go to "Domain settings" for your new site in Netlify.
    - Click "Add a domain" and follow the instructions to connect your domain.

That's it! Every time you push a change to your GitHub repository, Netlify will automatically build and deploy your website with the latest updates.
