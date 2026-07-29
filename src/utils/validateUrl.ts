export const isValidUrl = (url: string): boolean => {
  try {
    //URL is built-in class in JavaScript that can be used to validate a URL. If the URL is invalid, it will throw an error.
    new URL(url);
    return true;
  } catch {
    return false;
  }
};