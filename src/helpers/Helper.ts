/**
 * Get dynamic image path
 */
export function getImagePath(image: string) {
  if (image.startsWith('http')) {
    return image;
  }
  return new URL(`../assets/${image}`, import.meta.url).href;
}
