export default (args: string[]) => {
  const confirmed = confirm('Do you really want to install the most based operating system???');

  if (confirmed) {
    window.open('https://alpinelinux.org/downloads/');
    return 'Welcome to the based club 🤝';
  }

  window.open('https://www.youtube.com/watch?v=w6vVS6v58II');
  return 'Enjoy your spyware full of bugs 😂';
}
