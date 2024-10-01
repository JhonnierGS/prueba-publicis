export function pathRelative (publicPath) {
  // console.log('JS Path: ', import.meta.url);

  const entryPath = publicPath.startsWith('/') ? publicPath.slice(1) : publicPath;

  const { href: metaURL } = new URL(import.meta.url);
  const [relativePath] = metaURL.split('_astro');

  const path = import.meta.env.MODE !== 'production'
    ? `/${entryPath}`
    : `${relativePath}${entryPath}`;

  // console.log('Transformed Path: ', path);
  // console.log('--')

  return path;
}