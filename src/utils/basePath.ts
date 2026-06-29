const configuredBasePath = String(import.meta.env.PUBLIC_BASE_PATH || '/wedding-website-prototype').trim();
const normalizedBasePath = configuredBasePath.replace(/\/+$/, '');

export const getBasePath = (path = '/') => {
  const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+/, '').replace(/\/+$/, '')}`;

  if (!normalizedBasePath || normalizedBasePath === '/') {
    return normalizedPath;
  }

  return `${normalizedBasePath}${normalizedPath === '/' ? '' : normalizedPath}`;
};
