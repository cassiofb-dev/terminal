export default (args: string[]) => {
  if (args.length === 0) {
    return `Please specify a command to run as root user.`
  }

  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
}
