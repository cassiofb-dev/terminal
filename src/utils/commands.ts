import banner from './commands/banner';
import clear from './commands/clear';
import curl from './commands/curl';
import doas from './commands/doas';
import email from './commands/email';
import hostname from './commands/hostname';
import repo from './commands/repo';
import theme from './commands/theme';
import weather from './commands/weather';
import fastfetch from './commands/fastfetch/fastfetch';
import install from './commands/install';
import vi from './commands/vi';
import cassio from './commands/cassio';

export const commands: Record<string, (args: string[]) => Promise<string> | string> = {
  help: () => 'Available commands: ' + Object.keys(commands).join(', '),
  whoami: () => 'user',
  vim: () => `why use vim? try 'emacs'`,
  emacs: () => `why use emacs? try 'vim'`,
  sudo: () => `why use sudo? try 'doas'`,
  exit: () => 'Please close the tab to exit.',
  date: () => new Date().toLocaleString(),
  echo: (args: string[]) => args.join(' '),
  capy: vi,
  vi,
  install,
  hostname,
  doas,
  theme,
  repo,
  clear,
  email,
  weather,
  curl,
  banner,
  fastfetch,
  cassio,
};
