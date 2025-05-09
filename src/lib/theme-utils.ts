// Helper function to convert HEX to HSL string "H S% L%"
export function hexToHsl(hex: string): string | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return null;

  let r = parseInt(result[1], 16) / 255;
  let g = parseInt(result[2], 16) / 255;
  let b = parseInt(result[3], 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s: number, l = (max + min) / 2;

  if (max === min) {
    s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `${h} ${s}% ${l}%`;
}

// Helper function to determine if a color (HEX) is light
export function isColorLight(hex: string): boolean {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return true; // Default to light if parse fails

  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  // Using luminance formula (YIQ)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128; // Threshold for light/dark
}

// Define default contrasting HSL values
const DARK_FOREGROUND_HSL = '212 13% 16%'; // Dark Navy Blue
const LIGHT_FOREGROUND_HSL = '210 17% 97%'; // Light Gray
const WHITE_CARD_HSL = '0 0% 100%';
const DARK_CARD_HSL = '212 13% 20%';


export function applyThemeColors(
  primaryHex: string,
  backgroundHex: string,
  accentHex: string
): void {
  const root = document.documentElement;

  const primaryHsl = hexToHsl(primaryHex);
  const backgroundHsl = hexToHsl(backgroundHex);
  const accentHsl = hexToHsl(accentHex);

  if (backgroundHsl) {
    root.style.setProperty('--background', backgroundHsl);
    const mainFgColor = isColorLight(backgroundHex) ? DARK_FOREGROUND_HSL : LIGHT_FOREGROUND_HSL;
    root.style.setProperty('--foreground', mainFgColor);
    root.style.setProperty('--card-foreground', mainFgColor);
    root.style.setProperty('--popover-foreground', mainFgColor);
    root.style.setProperty('--secondary-foreground', mainFgColor);
    root.style.setProperty('--muted-foreground', isColorLight(backgroundHex) ? '212 13% 40%' : '210 17% 70%');


    const cardBgColor = isColorLight(backgroundHex) ? WHITE_CARD_HSL : DARK_CARD_HSL;
    root.style.setProperty('--card', cardBgColor);
    root.style.setProperty('--popover', cardBgColor);
    
    // Derive secondary, muted, border, input based on background
    // This is a simplified derivation
    const bgL = parseInt(backgroundHsl.split(' ')[2]); // Get lightness
    const secondaryL = isColorLight(backgroundHex) ? Math.max(0, bgL - 7) : Math.min(100, bgL + 7);
    const mutedL = isColorLight(backgroundHex) ? Math.max(0, bgL - 3) : Math.min(100, bgL + 3);
    const borderL = isColorLight(backgroundHex) ? Math.max(0, bgL - 9) : Math.min(100, bgL + 9);
    const inputL = isColorLight(backgroundHex) ? Math.max(0, bgL - 5) : Math.min(100, bgL + 5);
    
    const [bgH, bgS] = backgroundHsl.split(' ');

    root.style.setProperty('--secondary', `${bgH} ${bgS} ${secondaryL}%`);
    root.style.setProperty('--muted', `${bgH} ${bgS} ${mutedL}%`);
    root.style.setProperty('--border', `${bgH} ${bgS} ${borderL}%`);
    root.style.setProperty('--input', `${bgH} ${bgS} ${inputL}%`);
  }

  if (primaryHsl) {
    root.style.setProperty('--primary', primaryHsl);
    const primaryFgColor = isColorLight(primaryHex) ? DARK_FOREGROUND_HSL : LIGHT_FOREGROUND_HSL;
    root.style.setProperty('--primary-foreground', primaryFgColor);
  }

  if (accentHsl) {
    root.style.setProperty('--accent', accentHsl);
    // Accent foreground is often white or very dark for contrast
    const accentFgColor = isColorLight(accentHex) ? DARK_FOREGROUND_HSL : WHITE_CARD_HSL;
    root.style.setProperty('--accent-foreground', accentFgColor);
    root.style.setProperty('--ring', accentHsl);
  }
}
