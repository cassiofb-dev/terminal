import { UAParser } from 'ua-parser-js';

import packageJson from '../../../../package.json';
import getTheme from '../../getTheme';
import alpine from './logos/alpine';
import macos from './logos/macos';
import unknown from './logos/unknown';
import windows from './logos/windows';
import android from './logos/android';

let uaParser = new UAParser(window.navigator.userAgent);

const getArt = () => {
  switch (uaParser.getOS().name) {
    case 'macOS':
      return macos;
    case 'iOS':
      return macos;
    case 'Windows':
      return windows;
    case 'Linux':
      return alpine;
    case 'Android':
      return android;
    default:
      return unknown;
  }
};

const getInfo = () => {
  const os = uaParser.getOS();
  const cpu = uaParser.getCPU();
  const browser = uaParser.getBrowser();
  const engine = uaParser.getEngine();
  const hostname = window.location.hostname;
  const terminal = 'Cassio Web Terminal';
  const theme = getTheme().name;
  const resolution = `${window.screen.availWidth}x${window.screen.availHeight}`;
  const packages = Object.keys(packageJson.dependencies);
  const devPackages = Object.keys(packageJson.devDependencies);

  let message = "";
  message += `${os.name}@${browser.name}\n`
  message += `-------------\n`
  message += `OS: ${os.name} ${os.version}\n`;
  message += `Arch: ${cpu.architecture}\n`;
  message += `Host: ${hostname}\n`;
  message += `Packages: ${packages.length + devPackages.length}\n`;
  message += `Theme: ${theme}\n`;
  message += `Terminal: ${terminal}\n`
  message += `Resolution: ${resolution}\n`;
  message += `Browser: ${browser.name} ${browser.version}\n`;
  message += `Engine: ${engine.name} ${engine.version}\n`;

  return message;
};

export default async (args?: string[]): Promise<string> => {
  const art = getArt();
  const info = getInfo();

  const artLines = art.split('\n');
  const infoLines = info.split('\n');
  const messageLines = [];

  const paddingX = Math.max(...artLines.map(line => line.length)) + 8;

  artLines.shift();
  while (artLines.length || infoLines.length) {
    if (artLines.length && infoLines.length) {
      let currentLine = artLines.shift() || "";
      currentLine += " ".repeat(paddingX - currentLine.length);
      currentLine += infoLines.shift();

      messageLines.push(currentLine);
    }

    if (artLines.length && !infoLines.length) {
      messageLines.push(artLines.shift());
    }

    if (!artLines.length && infoLines.length) {
      messageLines.push("".repeat(paddingX) + infoLines.shift());
    }
  }

  return messageLines.join('\n');
};
