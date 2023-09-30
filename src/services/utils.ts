export default function getQueryParams(paramObj: Record<string, string>) {
  return Object.keys(paramObj)
    .map(
      (par) => `${encodeURIComponent(par)}=${encodeURIComponent(paramObj[par])}`
    )
    .join('&');
}
