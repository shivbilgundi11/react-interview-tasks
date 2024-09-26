import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// tasks list...
export const tasksList = [
  {
    id: 1,
    name: "Building a Dynamic Dropdown with URL Update Using React Router",
    description:
      "This challenge tests your ability to work with React Router for dynamic routing and URL manipulation without page navigation. The goal is to keep the user on the same page but reflect the selected dropdown option in the URL, enhancing usability and bookmarkability without unnecessary page reloads.",
    path: "url-params-routes",
  },
  {
    id: 2,
    name: "Build a dummy file tree type component in React.",
    description:
      "Develop a simple, dummy file tree component that mimics the structure of a file system. This component should display a hierarchical view of folders and files, with expandable/collapsible folders to navigate through the tree. No backend integration is required, just a static representation to demonstrate the UI functionality.",
    path: "file-tree",
  },
];

export const dropDownLinks = [
  {
    id: 1,
    linkName: "Example Link 1",
    path: "examples",
  },
  {
    id: 2,
    linkName: "Example Link 2",
    path: "examples",
  },
  {
    id: 3,
    linkName: "Example Link 3",
    path: "examples",
  },
  {
    id: 4,
    linkName: "Example Link 4",
    path: "examples",
  },
  {
    id: 5,
    linkName: "Example Link 5",
    path: "examples",
  },
];

export const movies = [
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "The Dark Knight", year: 2008 },
  { id: 3, title: "Interstellar", year: 2014 },
  { id: 4, title: "Parasite", year: 2019 },
  { id: 5, title: "The Shawshank Redemption", year: 1994 },
  { id: 6, title: "Spider-Man: Into the Spider-Verse", year: 2018 },
  { id: 7, title: "The Godfather", year: 1972 },
  { id: 8, title: "Pulp Fiction", year: 1994 },
  { id: 9, title: "Avatar", year: 2009 },
  { id: 10, title: "Everything Everywhere All at Once", year: 2022 },
];

export const shows = [
  { id: 1, title: "Breaking Bad", year: 2008 },
  { id: 2, title: "Stranger Things", year: 2016 },
  { id: 3, title: "Game of Thrones", year: 2011 },
  { id: 4, title: "The Mandalorian", year: 2019 },
  { id: 5, title: "The Office (US)", year: 2005 },
  { id: 6, title: "The Boys", year: 2019 },
  { id: 7, title: "Succession", year: 2018 },
  { id: 8, title: "The Crown", year: 2016 },
  { id: 9, title: "The Witcher", year: 2019 },
  { id: 10, title: "Money Heist", year: 2017 },
];
