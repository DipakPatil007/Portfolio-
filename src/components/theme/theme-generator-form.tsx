'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { generateThemeAction } from '@/app/theme-generator/actions';
import type { GenerateThemeOutput } from '@/ai/flows/generate-theme';
import { Loader2, Palette, Sparkles, Wand2 } from 'lucide-react';
import { applyThemeColors } from '@/lib/theme-utils'; 

const themeGeneratorSchema = z.object({
  primaryColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/, { message: 'Must be a valid hex color (e.g., #RRGGBB)' }).default('#24292F'),
  backgroundColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/, { message: 'Must be a valid hex color (e.g., #RRGGBB)' }).default('#F6F8FA'), // Mapped to secondaryColor for AI
  accentColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/, { message: 'Must be a valid hex color (e.g., #RRGGBB)' }).default('#26A69A'),
  fontFamily: z.string().min(1).default('Geist Sans'),
  iconStyle: z.string().min(1).default('minimalistic'),
  layoutStyle: z.string().min(1).default('grid-based'),
  animationStyle: z.string().min(1).default('subtle'),
});

type ThemeGeneratorFormValues = z.infer<typeof themeGeneratorSchema>;

export default function ThemeGeneratorForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<GenerateThemeOutput | null>(null);

  const form = useForm<ThemeGeneratorFormValues>({
    resolver: zodResolver(themeGeneratorSchema),
    defaultValues: {
      primaryColor: '#24292F', // Dark Navy Blue
      backgroundColor: '#F6F8FA', // Light Gray
      accentColor: '#26A69A', // Teal
      fontFamily: 'Geist Sans',
      iconStyle: 'minimalistic',
      layoutStyle: 'modern, grid-based',
      animationStyle: 'subtle, micro-interactions',
    },
  });

  async function onSubmit(values: ThemeGeneratorFormValues) {
    setIsLoading(true);
    setAiResponse(null);
    try {
      const result = await generateThemeAction({
        primaryColor: values.primaryColor,
        secondaryColor: values.backgroundColor, // Map form's backgroundColor to AI's secondaryColor
        accentColor: values.accentColor,
        fontFamily: values.fontFamily,
        iconStyle: values.iconStyle,
        layoutStyle: values.layoutStyle,
        animationStyle: values.animationStyle,
      });

      if ('error' in result) {
        toast({
          title: 'Error Generating Theme',
          description: result.error,
          variant: 'destructive',
        });
      } else {
        setAiResponse(result);
        toast({
          title: 'Theme Concept Generated!',
          description: 'Check out the AI-powered theme concept below.',
        });
      }
    } catch (error) {
      toast({
        title: 'An Unexpected Error Occurred',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleApplyColors = () => {
    const { primaryColor, backgroundColor, accentColor } = form.getValues();
    try {
      applyThemeColors(primaryColor, backgroundColor, accentColor);
      toast({
        title: 'Colors Applied!',
        description: 'Your chosen primary, background, and accent colors have been applied to the site styling.',
      });
    } catch (error) {
      console.error("Failed to apply colors:", error);
      toast({
        title: 'Error Applying Colors',
        description: 'Could not apply the selected colors. Please check your inputs.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl md:text-3xl">
            <Palette className="mr-3 h-8 w-8 text-accent" />
            Create Your Theme Concept
          </CardTitle>
          <CardDescription>
            Define your preferred colors and styles, and let our AI generate a unique theme concept for your portfolio.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <FormField
                  control={form.control}
                  name="primaryColor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Primary Color (HEX)</FormLabel>
                      <FormControl>
                        <Input type="color" {...field} className="h-12 p-1" />
                      </FormControl>
                       <FormDescription>E.g., #24292F (Dark Navy)</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="backgroundColor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Background Color (HEX)</FormLabel>
                      <FormControl>
                        <Input type="color" {...field} className="h-12 p-1" />
                      </FormControl>
                       <FormDescription>E.g., #F6F8FA (Light Gray)</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="accentColor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Accent Color (HEX)</FormLabel>
                      <FormControl>
                        <Input type="color" {...field} className="h-12 p-1" />
                      </FormControl>
                       <FormDescription>E.g., #26A69A (Teal)</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="fontFamily"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Font Family</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Roboto, Open Sans" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="iconStyle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Icon Style</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select icon style" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="minimalistic">Minimalistic</SelectItem>
                          <SelectItem value="flat">Flat</SelectItem>
                          <SelectItem value="line-art">Line Art</SelectItem>
                          <SelectItem value="neumorphic">Neumorphic</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="layoutStyle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Layout Style</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select layout style" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="modern, grid-based">Modern, Grid-Based</SelectItem>
                          <SelectItem value="clean, spacious">Clean, Spacious</SelectItem>
                          <SelectItem value="brutalist">Brutalist</SelectItem>
                          <SelectItem value="single-page scroll">Single-Page Scroll</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="animationStyle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Animation Style</FormLabel>
                       <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select animation style" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="subtle, micro-interactions">Subtle, Micro-interactions</SelectItem>
                          <SelectItem value="parallax scrolling">Parallax Scrolling</SelectItem>
                          <SelectItem value="playful, bouncy">Playful, Bouncy</SelectItem>
                          <SelectItem value="no animations">No Animations</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" disabled={isLoading} size="lg" className="w-full md:w-auto">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                Generate Theme Concept
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {aiResponse && (
        <Card className="shadow-xl animate-in fade-in duration-500">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl md:text-3xl">
               <Wand2 className="mr-3 h-8 w-8 text-primary" />
              AI Generated Theme: {aiResponse.themeName}
            </CardTitle>
            <CardDescription>{aiResponse.themeDescription}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 text-lg">Theme Configuration Details:</h4>
              <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
                {JSON.stringify(JSON.parse(aiResponse.themeConfig), null, 2)}
              </pre>
            </div>
            <Button onClick={handleApplyColors} size="lg" variant="outline" className="w-full md:w-auto">
              <Palette className="mr-2 h-4 w-4" />
              Apply My Chosen Colors
            </Button>
            <FormDescription className="text-xs mt-2">
                Note: Applying colors will change the site&apos;s Primary, Background, and Accent colors based on your inputs above. Other theme elements (like secondary colors, borders, etc.) will be derived. The full theme concept from AI is for inspiration.
            </FormDescription>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
