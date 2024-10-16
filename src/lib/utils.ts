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
    path: "tasks/url-params-routes",
  },
  {
    id: 2,
    name: "Build a dummy file tree type component in React.",
    description:
      "Develop a simple, dummy file tree component that mimics the structure of a file system. This component should display a hierarchical view of folders and files, with expandable/collapsible folders to navigate through the tree. No backend integration is required, just a static representation to demonstrate the UI functionality.",
    path: "tasks/file-tree",
  },
  {
    id: 3,
    name: "React Input Border Color Based on Hex Code Input",
    description:
      "Create a React component with an input field that changes its border color based on the hex color code typed by the user. The input should accept a combination of letters and numbers. However, if the input consists only of letters, the border color shouldn't change. If it contains a mix of letters and numbers or is entirely numeric, update the border color according to the input.",
    path: "tasks/hex-code-input",
  },
  {
    id: 4,
    name: "Debounced Search Input (Optimization Challenge).",
    description:
      "Write a React component that renders a search input field. Implement debouncing logic so that the search query is only sent to the API after the user stops typing for 300ms.",
    path: "tasks/debounced-search",
  },
  {
    id: 5,
    name: "Implement Infinite Scroll (API Fetching Challenge)",
    description:
      "Create an infinite scroll component that loads more data when the user scrolls to the bottom of the page.",
    path: "tasks/infinite-content-scroll",
  },
  {
    id: 6,
    name: "Debounced Search Input - Filter Movie Names",
    description:
      "Write a React component that renders a search input field. Implement debouncing logic so that the search query is only used to filter movie names after the user stops typing for 400ms.",
    path: "tasks/debounced-movies-search",
  },
  {
    id: 7,
    name: "Replace Vowels with # in Input Field",
    description:
      "Create a React component that replaces all vowels in the user input (both uppercase and lowercase) with the # symbol in real-time. This transformation should be applied as the user types in the input field.",
    path: "tasks/replace-vowels",
  },
  {
    id: 8,
    name: "Drag-and-Drop To-Do App in React",
    description:
      "Build a simple to-do app using React with drag-and-drop functionality. Users can move tasks between 'Next Up', 'In Progress', and 'Completed' sections.",
    path: "tasks/drag-and-drop",
  },
  {
    id: 9,
    name: "Traffic Light Simulator with Automatic Signal Transition",
    description:
      "Create a simple traffic light simulator using React, where the traffic signal cycles through green, orange, and red lights. Each light should remain active for 2 seconds before transitioning to the next color in the sequence. This project will demonstrate your ability to manage state and use effects to trigger timed updates, simulating a real-world traffic signal system.",
    path: "tasks/traffic-signal",
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

export const movieList = [
  { id: 1, name: "The Shawshank Redemption" },
  { id: 2, name: "The Godfather" },
  { id: 3, name: "The Dark Knight" },
  { id: 4, name: "Pulp Fiction" },
  { id: 5, name: "Schindler’s List" },
  { id: 6, name: "Forrest Gump" },
  { id: 7, name: "Fight Club" },
  { id: 8, name: "Inception" },
  { id: 9, name: "The Matrix" },
  { id: 10, name: "Goodfellas" },
  { id: 11, name: "The Silence of the Lambs" },
  { id: 12, name: "Se7en" },
  { id: 13, name: "The Usual Suspects" },
  { id: 14, name: "Interstellar" },
  { id: 15, name: "Gladiator" },
  { id: 16, name: "The Green Mile" },
  { id: 17, name: "The Prestige" },
  { id: 18, name: "The Departed" },
  { id: 19, name: "Memento" },
  { id: 20, name: "Braveheart" },
  { id: 21, name: "Django Unchained" },
  { id: 22, name: "The Wolf of Wall Street" },
  { id: 23, name: "The Lion King" },
  { id: 24, name: "Avatar" },
  { id: 25, name: "Avengers: Endgame" },
  { id: 26, name: "Titanic" },
];

// Drag-And-Drop Task Todo's...
export const todos = {
  "Next Up": [
    "Design UI mockups",
    "Set up project repository",
    "Write unit test",
    "Integrate payment gateway",
  ],
  "In Progress": ["Develop authentication flow", "Implement responsive design"],
  Completed: [
    "Set up CI/CD pipeline",
    "Conduct code reviews",
    "Deploy initial version to staging",
  ],
};
