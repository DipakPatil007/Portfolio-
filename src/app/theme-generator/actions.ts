'use server';

import { generateTheme, type GenerateThemeInput, type GenerateThemeOutput } from '@/ai/flows/generate-theme';

export async function generateThemeAction(input: GenerateThemeInput): Promise<GenerateThemeOutput | { error: string }> {
  try {
    const result = await generateTheme(input);
    return result;
  } catch (error) {
    console.error('Error generating theme:', error);
    if (error instanceof Error) {
        return { error: error.message };
    }
    return { error: 'An unknown error occurred while generating the theme.' };
  }
}
