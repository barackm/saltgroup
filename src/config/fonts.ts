import localFont from "next/font/local";

export const gramatika = localFont({
  src: [
    {
      path: "../../public/fonts/gramatika/GramatikaTrial-Regular-BF65dea4c5a77e9.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/gramatika/GramatikaTrial-Italic-BF65dea4c5a1363.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/gramatika/GramatikaTrial-Bold-BF65dea4c5530e5.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/gramatika/GramatikaTrial-Medium-BF65dea4c5c6afd.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/gramatika/GramatikaTrial-Light-BF65dea4c59cf23.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-gramatika",
});

export const neueHaas = localFont({
  src: [
    {
      path: "../../public/fonts/neue-haas/NeueHaasDisplayRoman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-haas/NeueHaasDisplayMediu.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-haas/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-haas/NeueHaasDisplayLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-haas/NeueHaasDisplayBlack.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-neue-haas",
});
