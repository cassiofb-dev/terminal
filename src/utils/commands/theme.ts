import themes from '../../../themes.json';
import { theme } from '../../stores/theme';
import packageJson from '../../../package.json';

export default (args: string[]) => {
  const usage = `Usage: theme [args].
  [args]:
    ls: list all available themes
    set: set theme to [theme]

  [Examples]:
    theme ls
    theme set gruvboxdark
  `;

  if (args.length === 0) {
    return usage;
  }

  switch (args[0]) {
    case 'ls': {
      let result = themes.map((t) => t.name.toLowerCase()).join(', ');
      result += `You can preview all these themes here: ${packageJson.repository.url}/tree/master/docs/themes`;

      return result;
    }

    case 'set': {
      if (args.length !== 2) {
        return usage;
      }

      const selectedTheme = args[1];
      const t = themes.find((t) => t.name.toLowerCase() === selectedTheme);

      if (!t) {
        return `Theme '${selectedTheme}' not found. Try 'theme ls' to see all available themes.`;
      }

      theme.set(t);

      return `Theme set to ${selectedTheme}`;
    }

    default: {
      return usage;
    }
  }
}
