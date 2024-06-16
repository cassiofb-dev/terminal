import packageJson from '../../../package.json';

export default () => {
  window.open(`mailto:${packageJson.author.email}`);

  return `Opening mailto:${packageJson.author.email}...`;
}
