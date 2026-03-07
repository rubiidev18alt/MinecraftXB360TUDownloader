# Minecraft Xbox 360 TU Downloader

A modern, web-based tool for downloading Title Updates (TUs) for the Minecraft Xbox 360 Edition. This application provides direct download links for updates TU1 through TU75, along with installation instructions for RGH/JTAG consoles and Xenia emulators.

## Features

- **Complete Archive**: Access download links for every major Title Update from TU1 to the final TU75.
- **Direct Downloads**: Fetches files directly from Archive.org with correct path structures for different update versions.
- **Smart Logic**: Automatically handles special cases like:
  - **TU1**: Uses specific cache path structure.
  - **TU2-TU6**: Uses cache path without subfolders.
  - **TU75**: Handles the "Undocumented Update" path.
  - **TU42**: Includes the re-added specific link.
- **Installation Guides**: Built-in instructions for:
  - **RGH/JTAG**: Real Xbox 360 hardware.
  - **Xenia Canary**: Experimental emulator support.
- **Interactive UI**:
  - Minecraft-themed interface with pixel fonts and dirt textures.
  - "Steve" assistant guide.
  - Mini changelogs for major updates.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Rubiidev18alt/MinecraftXB360TUDownloader.git
    cd MinecraftXB360TUDownloader
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Building for Production

To build the app for production, run:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory. You can then serve this folder using any static file host.

## usage

1.  Select a Title Update from the dropdown menu.
2.  Click the "Download TU" button to get the file.
3.  Follow the on-screen instructions to install the update on your console or emulator.

## Disclaimer

This project is a fan-made tool and is not affiliated with, endorsed by, or connected to Mojang Studios, 4J Studios, Microsoft, or Xbox. All game content and trademarks are the property of their respective owners.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
