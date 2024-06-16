import type { Theme } from "../interfaces/theme";
import { defaultColorscheme } from "../stores/theme";

export default () => {
  const savedTheme =  JSON.parse(localStorage.getItem('colorscheme') || "");

  if (savedTheme['name']) {
    return savedTheme as Theme;
  }

  return defaultColorscheme;
};
