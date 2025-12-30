import images from "./images";

export const customers = [
  {
    id: "1",
    name: "John Doe",
    country: "Pakistan",
    languages: "Urdu, Hindi",
    price: 50,
    image: images.user,
  },
  {
    id: "2",
    name: "Jane Smith",
    country: "India",
    languages: "Hindi, English",
    price: 60,
    image: images.user,
  },
  {
    id: "3",
    name: "Ali Khan",
    country: "Pakistan",
    languages: "Urdu, English",
    price: 70,
    image: images.user,
  },
  {
    id: "4",
    name: "Sara Ahmed",
    country: "Pakistan",
    languages: "Urdu, English",
    price: 55,
    image: images.user,
  },
  {
    id: "5",
    name: "David Lee",
    country: "USA",
    languages: "English",
    price: 80,
    image: images.user,
  },
];
export const LanguagesData = [
  {
    title: "urdu",
    languageButton: {
      width: 50,
    },
  },
  {
    title: "Hindi",
    languageButton: {
      width: 60,
    },
  },
  {
    title: "English",
    width: "74",
  },
];

export const hexWithOpacity = (hex: string, opacity: number) => {
  const alpha = Math.round((opacity / 100) * 255)
    .toString(16)
    .padStart(2, "0")
    .toUpperCase();

  return `${hex}${alpha}`;
};
