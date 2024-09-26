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
];
