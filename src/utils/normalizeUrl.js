const normalizeUrl = url => {
  if (!url) return null;

  // If it already starts with http:// or https://, return as-is
  if (/^https?:\/\//i.test(url)) return url;

  // If it looks like a domain (e.g. google.com or mysite.org)
  if (/^[\w.-]+\.[a-z]{2,}$/i.test(url)) return `https://${url}`;

  // Otherwise, not a valid link — return null or handle differently
  return null;
};

export default normalizeUrl;
