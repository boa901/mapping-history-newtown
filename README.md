# Mapping History Newtown

This repository hosts the source code for the Mapping History Newtown Honors Capstone project in 2023. The objective of this application is to illustrate the layout of Harrisonburg before the Urban Renewal Projects, which wiped out a significant number of residences owned largely by African Americans in the community. The aim of this project is carried out by overlaying historical maps and showing the locations of homes that African Americans either owned or lived in before Urban Renewal.

## Getting Started

### Setup

The 1930s Harrisonburg Map Overlay tiles must be added to the project for the overlay to be rendered.
- Get access to the 1930s Harrisonburg Map overlay tiles. Contact [noah.swartzentruber@emu.edu](mailto:noah.swartzentruber@emu.edu) for more information about the overlay.
- If not already created, add a folder in the `/next` directory named `public`.
- Move all of the tiles, organized by standard by the zoom level and coordinates in a folder named `tiles` in the `/next/public` folder.

If the tiles have been added correctly, they should be located within the project in the `/next/public/tiles` directory.


Install the necessary packages and dependencies by running the following:
```bash
npm install
```

Finally, to run the development server run the following command:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application page.
