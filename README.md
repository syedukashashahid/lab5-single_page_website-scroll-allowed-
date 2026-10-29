# Syed Ukasha Shahid — Portfolio

A single-page portfolio built with HTML5, CSS3 and vanilla JavaScript only. No frameworks, no build step.

## Folder structure

```text
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── Syed_Ukasha_Shahid_CV.pdf   
    └── profile.jpg                
```

## Links
- Vercel link: 
- GitHub Repo: 

## Prompt
# Complete Project Prompt: Professional Portfolio Website — Syed Ukasha Shahid

## 1. Project Overview

Build a highly professional, modern, elegant, and responsive personal portfolio website for **Syed Ukasha Shahid**, a BS Computer Science student at Qarshi University, Lahore, Pakistan.

I will provide two files:

1. My CV in PDF format.
2. My actual personal profile photograph.

Carefully read my CV and use its information to create the portfolio. Use my uploaded profile photograph as the main portrait in the website.

I do not have a personal logo or project screenshots. Do not ask me to provide these assets. Create a tasteful text-based monogram for my branding and professional project illustrations using HTML and CSS.

The final website should present me as a motivated aspiring software developer seeking internship and entry-level opportunities.

The website must look premium, polished, professional, and suitable for sharing with recruiters, employers, and potential collaborators.

## 2. Strict Technology Requirements

Use ONLY:

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

**Strictly prohibited:**

- React and JSX
- TypeScript
- Bootstrap
- Tailwind CSS
- jQuery
- Frontend frameworks or UI libraries
- Backend servers or databases
- Unnecessary dependencies

Create three separate source files:

- `index.html`
- `style.css`
- `script.js`

Use semantic HTML, modern CSS layouts, and clean JavaScript. The website must work as a static website without a build process.

## 3. Single-Page Website Structure

Create one continuous landing page. Do not create multiple HTML pages.

Vertical scrolling must be enabled, allowing visitors to explore all sections naturally.

Include these sections in order:

1. Home
2. About Me
3. Technical Skills
4. Projects
5. Education
6. Strengths and Languages
7. Contact

Create a sticky navigation bar with working links to these sections. Clicking a link must scroll to the relevant section on the same page.

Use smooth scrolling, appropriate section spacing, and a back-to-top button where appropriate.

## 4. Professional Color Palette and Visual Identity

Create a distinctive, premium visual identity using the following exact color palette.

### Official color palette

- **Warm Ivory:** `#F5F3E8`
- **Vibrant Orange:** `#FF9F0A`
- **Rich Black:** `#191919`
- **Pure White:** `#FFFFFF`
- **Sand Beige:** `#E8E4D8`
- **Muted Gray:** `#77766F`

Do not use the previous navy, electric blue, or cyan color scheme. The new ivory, orange, black, and beige palette must be used consistently throughout the entire website.

### Design direction

Create a sophisticated, editorial-inspired portfolio that combines warm neutral backgrounds, bold orange accents, elegant typography, and rich black details.

The website should feel creative, confident, modern, and professional—not flashy or overly decorative.

Apply the palette as follows:

- **Main background:** Warm Ivory.
- **Headings and primary text:** Rich Black.
- **Primary buttons and interactive highlights:** Vibrant Orange.
- **Cards and selected content surfaces:** Pure White.
- **Borders, dividers, and secondary surfaces:** Sand Beige.
- **Supporting text and descriptions:** Muted Gray.
- **Dark sections and footer:** Rich Black with Pure White text and Vibrant Orange accents.
- **Portrait frame:** Sand Beige borders with restrained Vibrant Orange decorative accents.
- **Project illustrations:** Rich Black, Pure White, Warm Ivory, Sand Beige, and Vibrant Orange.

Use orange strategically for buttons, active navigation links, small icons, and important highlights. Do not fill every section with orange.

Maintain generous whitespace, clean alignment, balanced layouts, restrained shadows, and excellent readability.

Avoid excessive gradients, glowing neon effects, unnecessary decorative elements, and childish design elements.

### CSS custom properties

Define the palette in `style.css` and reuse the variables throughout the website.

```css
:root {
  --color-warm-ivory: #F5F3E8;
  --color-vibrant-orange: #FF9F0A;
  --color-rich-black: #191919;
  --color-pure-white: #FFFFFF;
  --color-sand-beige: #E8E4D8;
  --color-muted-gray: #77766F;
}
```

Use these variables instead of repeatedly hardcoding colors.

Check text and button contrast carefully. In particular, use Rich Black text on Vibrant Orange buttons where appropriate. Do not assume white text on orange has sufficient contrast.

## 5. Navigation Bar and Branding

Create a polished, responsive navigation bar.

Requirements:

- Display a minimal **US monogram** on the left, created using text and CSS.
- Display my name beside the monogram when space permits.
- Place navigation links on the right on desktop.
- Add a prominent “Let's Connect” button.
- Keep the navigation bar sticky while scrolling.
- Apply a subtle background and shadow when the page is scrolled.
- Include a functional mobile menu with a hamburger button.
- Close the mobile menu after a navigation link is selected.
- Ensure keyboard accessibility and visible focus states.

Use Rich Black, Warm Ivory, and Vibrant Orange to style the navigation bar.

The monogram is a website branding element, not an uploaded or official logo.

## 6. Hero Section

Create a visually striking, professional hero section with a two-column layout on desktop.

### Left side: Introduction

Display the following content:

**Eyebrow text:** COMPUTER SCIENCE STUDENT

**Name:** Syed Ukasha Shahid

**Professional headline:** Aspiring Software Developer Building Practical Digital Solutions

**Introduction:**

“I'm a BS Computer Science student at Qarshi University with a foundation in programming, object-oriented programming, data structures, and database systems. I enjoy developing practical software and web applications and am eager to contribute to real-world projects while continuing to grow as a developer.”

Add two prominent buttons:

- **Explore My Work** — scrolls to the Projects section.
- **Download CV** — downloads my actual CV PDF.

You may include a small availability label such as “Open to Internship Opportunities” to communicate my career goal without suggesting that I have a confirmed job or internship.

Style the hero using a Warm Ivory background, Rich Black typography, and Vibrant Orange accents.

### Right side: Profile Photograph

Use my uploaded personal photograph.

Requirements:

- Display my actual photograph prominently.
- Use a refined rounded-rectangle portrait frame.
- Maintain natural proportions and image quality.
- Use `object-fit: cover` with appropriate positioning.
- Apply subtle Sand Beige borders, restrained shadows, and small Vibrant Orange accents.
- Ensure the image scales properly on all screen sizes.
- Use descriptive alternative text.
- Do not replace my face, generate another person, or use stock photography.

Use the uploaded image as an asset in the project. If the filename differs from `profile.jpg`, use its actual filename or explain how to rename it.

## 7. About Me Section

Create a clean, engaging About Me section using my actual CV information.

Use this professional introduction:

“I am a BS Computer Science student at Qarshi University, interested in software development and building practical digital solutions. My academic background includes programming, object-oriented programming, data structures and algorithms, and database systems. Through academic projects in Java desktop development and web technologies, I am developing my problem-solving skills and practical understanding of software engineering.”

Display compact information cards:

- **Degree:** BS Computer Science
- **University:** Qarshi University
- **Current Semester:** 5th Semester
- **Expected Graduation:** 2028
- **Location:** Lahore, Pakistan

Use Pure White cards on a Warm Ivory background, Sand Beige borders, and Rich Black headings.

Keep the layout spacious, attractive, and easy to scan.

Do not add unsupported achievements, certifications, work experience, or academic awards.

## 8. Technical Skills Section

Present my skills in organized categories using clean cards or skill tags.

### Programming Languages

- C
- C++
- Java
- Python
- SQL

### Web Development

- HTML5
- CSS3

### Core Computer Science Concepts

- Object-Oriented Programming (OOP)
- Data Structures and Algorithms
- Database Management Systems (DBMS)
- Operating Systems

### Tools and Technologies

- Java Swing
- NetBeans
- MySQL
- Microsoft Office

Use Pure White or Warm Ivory cards, subtle Sand Beige borders, Rich Black typography, and small Vibrant Orange details.

Use subtle hover effects, consistent spacing, and simple visual indicators.

Do not invent skill percentages, proficiency ratings, years of experience, or expertise levels.

Do not list React, JavaScript, or other technologies as existing skills from my CV. They may only appear in the website implementation where appropriate.

## 9. Projects Section

Create two attractive, professionally designed project cards. Each card must contain a title, description, technology tags, and a custom illustrative visual.

Since I do not have project screenshots, create the visuals using HTML and CSS. They must be clearly understood as conceptual illustrations, not actual screenshots of my projects.

### Project 1: Bus Management System

**Technologies:** Java Swing, OOP, NetBeans

**Description:**

“Developed a Java-based desktop application to manage bus operations, including route scheduling, ticket booking, digital passes, bus allocation, and staff and feedback management.”

**Visual design:**

Create a conceptual desktop dashboard inside the project card. It may contain:

- A small navigation sidebar.
- A route-management panel.
- Simple bus or ticket cards.
- A table-like arrangement of route information.
- A professional palette using Rich Black, Pure White, Sand Beige, and Vibrant Orange.

Use HTML and CSS to build the illustration. Keep it attractive but lightweight.

### Project 2: Shineo — Maid Finder Website

**Technologies:** HTML5, CSS3

**Description:**

“Developed a web platform designed to connect users with nearby domestic service providers through a clean, easy-to-use interface.”

**Visual design:**

Create a conceptual service-booking interface inside the card. It may contain:

- A simple service-search area.
- Conceptual domestic service categories.
- Minimal service-provider cards.
- A clean, accessible layout.
- Warm Ivory surfaces, Rich Black typography, Sand Beige borders, and Vibrant Orange highlights.

Use HTML and CSS instead of requiring actual project screenshots.

### Project card requirements

- Use consistent card dimensions and spacing.
- Make the layout responsive.
- Add subtle hover animations.
- Use technology tags.
- Keep descriptions concise and professional.
- Do not invent GitHub repositories, deployed websites, clients, user counts, or project statistics.
- Do not imply that the conceptual illustrations are actual screenshots.
- Only add clickable project links if genuine repository or project URLs are supplied.

## 10. Education Section

Display my educational history using a clean vertical timeline or modern academic cards.

### BS Computer Science

- Institution: Qarshi University
- Status: Currently in the 5th Semester
- Expected completion: 2028

### Intermediate (ICS / Pre-Engineering)

- Institution: Punjab Group of Colleges
- Completion year: 2024

### Matriculation

- Institution: Nishat Boys High School
- Completion year: 2022

Use clear typography, subtle timeline indicators, and consistent spacing.

Use Sand Beige for timeline lines and Vibrant Orange for selected indicators.

Do not invent grades, academic distinctions, or awards.

## 11. Strengths and Languages

Create a visually balanced section highlighting my strengths:

- Problem Solving
- Analytical Thinking
- Quick Learner
- Communication
- Teamwork
- Time Management

Display my languages:

- English
- Urdu

Use simple cards, badges, or a clean grid. Style them consistently with the Warm Ivory, Pure White, Sand Beige, Rich Black, and Vibrant Orange palette.

Do not assign language proficiency levels unless provided.

## 12. Contact Section

Create a professional contact section with a clear invitation to connect.

Use the contact information from my CV:

- **Location:** Lahore, Pakistan
- **Email:** syedukashashahid@gmail.com
- **Phone:** +92 309 5236098

Include:

- A concise professional closing message.
- A clickable email address using `mailto:`.
- A clickable phone number using `tel:`.
- A LinkedIn button only if I provide an actual profile URL.
- A GitHub button only if I provide an actual profile URL.

Use a sophisticated layout that works on desktop and mobile.

Consider a Rich Black background with Pure White text and Vibrant Orange accents to create a strong visual finish.

Do not invent social media profiles or other contact details.

A contact form is optional. If included, explain that sending messages requires a backend or an external form service. Do not make a form appear functional if it cannot actually deliver messages.

## 13. Download CV Functionality

Add a prominent “Download CV” button in the hero section.

Use my original CV PDF without modifying its contents.

Store it at:

`assets/Syed_Ukasha_Shahid_CV.pdf`

Use a proper relative download link pointing to the actual PDF.

Ensure the PDF is included in the website's project folder and deployment.

The button must work when the website is opened locally or deployed, provided the PDF is present at the specified path.

Style the button with Vibrant Orange and Rich Black text, with a clear hover and keyboard-focus state.

## 14. Footer

Create a minimal, polished footer containing:

- My name or US monogram.
- A short professional tagline.
- Navigation links to key sections.
- Copyright information with the current year generated using vanilla JavaScript.
- A back-to-top link or button.

Use a Rich Black background, Pure White primary text, Muted Gray secondary text, and Vibrant Orange interactive elements.

Do not add fake social links.

## 15. Responsive Design

The website must work correctly on:

- Desktop computers.
- Laptops.
- Tablets.
- Mobile phones.

Use CSS Grid, Flexbox, flexible units, and media queries.

Test approximately at:

- 1440px
- 1024px
- 768px
- 375px

Requirements:

- No horizontal overflow.
- Readable typography at all sizes.
- A responsive navigation menu.
- Properly scaled portrait image.
- Project cards that stack on mobile.
- Touch-friendly buttons.
- Appropriate section spacing.
- Consistent margins and padding.
- Responsive illustrations that remain readable.

Do not disable vertical scrolling. The page should feel natural and comfortable to explore.

## 16. JavaScript Functionality

Use vanilla JavaScript only.

Implement and test:

1. Mobile navigation toggle.
2. Closing the mobile menu after a link is clicked.
3. Smooth scrolling to page sections.
4. Sticky navigation styling on scroll.
5. Active navigation link highlighting.
6. Back-to-top functionality.
7. Subtle scroll-triggered animations where appropriate.
8. Automatic current-year display in the footer.
9. Basic validation only if a contact form is included.

Use event listeners and clean, readable JavaScript.

Respect the `prefers-reduced-motion` accessibility setting.

Avoid unnecessary animations, fake loading screens, nonfunctional buttons, and overly complicated interactions.

## 17. Design and Accessibility Standards

Follow professional web design and accessibility practices.

Requirements:

- Semantic HTML5 elements.
- A logical heading hierarchy.
- One main page heading.
- Descriptive image alternative text.
- Accessible navigation.
- Keyboard-operable buttons and links.
- Visible focus states.
- Appropriate ARIA attributes.
- Good color contrast.
- Responsive images.
- Consistent typography and spacing.
- Clean and maintainable code.
- Appropriate page title, description, and metadata.
- A favicon based on the CSS monogram or a suitable generated favicon if practical.

Use a professional font with sensible fallback fonts. A Google Font may be used, but the website must remain readable if the font cannot load.

Use the specified six-color palette consistently. Do not introduce additional accent colors unless absolutely necessary for accessibility.

Respect reduced-motion preferences and avoid relying on color alone to communicate information.

## 18. Required Folder Structure

Create this project structure:

```text
portfolio/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── Syed_Ukasha_Shahid_CV.pdf
    ├── profile.jpg
    └── projects/
```

The profile photograph must be my actual uploaded image. If it has a different filename, use the real filename consistently or explain how to rename it to `profile.jpg`.

Do not require a separate logo image. Create the US monogram using HTML and CSS.

Do not require project screenshot files. Create conceptual project visuals directly in HTML and CSS.

Avoid creating unnecessary empty folders or placeholder files that are not used.

## 19. Code Delivery Requirements

Provide the complete source code for:

1. `index.html`
2. `style.css`
3. `script.js`

Also provide:

- The final folder structure.
- Instructions for placing my uploaded CV and profile picture in the correct locations.
- Instructions for opening the website locally.
- Instructions for testing the website in a browser.
- Instructions for publishing it on GitHub Pages or another suitable static hosting platform.

Ensure all asset paths are correct and all source files work together.

Do not provide pseudocode, incomplete snippets, or references to files that have not been created.

If the coding environment supports creating project files, create the files directly and provide the completed project. Otherwise, present the complete contents of each file separately.

## 20. Final Quality Checklist

Before finishing, verify that:

- The website is a single-page landing website.
- Vertical scrolling works.
- Only HTML5, CSS3, and vanilla JavaScript are used.
- React, JSX, TypeScript, and CSS frameworks are not used.
- My uploaded profile picture is used.
- A professional US monogram replaces the missing logo.
- The specified Warm Ivory and Vibrant Orange color palette is used throughout.
- My CV information is represented accurately.
- The CV download link points to the correct PDF.
- All section navigation links work.
- Email and phone links contain the correct details.
- Project illustrations are clearly conceptual.
- No fake project, GitHub, LinkedIn, or live-demo links are included.
- No unsupported qualifications, experience, or achievements are added.
- The website works across desktop, tablet, and mobile.
- There is no unwanted horizontal overflow.
- Accessibility and keyboard navigation are supported.
- All JavaScript functionality works as intended.
- The code is organized, readable, and ready for customization.

## Final Instruction

Use your full design creativity to produce an impressive, premium-quality portfolio website that feels professionally designed specifically for Syed Ukasha Shahid.

Prioritize a strong visual hierarchy, the **Warm Ivory + Vibrant Orange + Rich Black** color identity, my real profile photograph, attractive CSS-based project illustrations, accurate CV content, responsive layouts, and clean code.

The final result must be a complete, functional, single-page website built exclusively with HTML5, CSS3, and vanilla JavaScript. Do not ask me for assets I have already said I do not have. Make reasonable design decisions and deliver the finished project.