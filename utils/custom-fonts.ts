import localFont from "next/font/local";

const rightGrotesk = localFont({
  src: "../public/fonts/Right Grotesk/RightGrotesk-CompactBlack.otf",
});

const biroScript = localFont({
  src: [
    {
      path: "../public/fonts/BiroScript/BiroScriptPlus-Bold.ttf",
    },
  ],
  variable: "--font-biro-script",
});

const biroScriptUS = localFont({
  src: [
    {
      path: "../public/fonts/BiroScript/BiroScriptUSPlus-Bold.ttf",
    },
  ],
  variable: "--font-biro-script-us",
});

const messinaSans = localFont({
  src: [
    {
      path: "../public/fonts/MessinaSans/MessinaSansMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/MessinaSans/MessinaSansMono-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-messina-sans",
});

export { rightGrotesk, biroScript, biroScriptUS, messinaSans };
