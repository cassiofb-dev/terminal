export default async (args: string[]) => {
  const city = args.join('+');

  if (!city) {
    return 'Usage: weather [city]. Example: weather Brussels';
  }

  const weather = await fetch(`https://wttr.in/${city}?ATm`);

  return weather.text();
}
