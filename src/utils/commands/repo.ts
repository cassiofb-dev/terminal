import packageJson from '../../../package.json';

export default () => {
  window.open(packageJson.repository.url, '_blank');

  return 'Opening repository...';
}
