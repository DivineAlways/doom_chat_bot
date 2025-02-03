// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'gpt-4o-mini',
    label: 'GPT 4o mini',
    apiIdentifier: 'gpt-4o-mini',
    description: 'Small model for fast, lightweight tasks',
  },
  {
    id: 'gpt-4o',
    label: 'GPT 4o',
    apiIdentifier: 'gpt-4o',
    description: 'For complex, multi-step tasks',
  },
  {
    id: 'gemini-pro',
    label: 'Gemini Pro',
    apiIdentifier: 'gemini-pro',
    description: 'Gemini Pro model',
  },
  {
    id: 'gemini-ultra',
    label: 'Gemini Ultra',
    apiIdentifier: 'gemini-ultra',
    description: 'Gemini Ultra model',
  },
  {
    id: 'gemini-2.0-pro',
    label: 'Gemini 2.0 Pro',
    apiIdentifier: 'gemini-2.0-pro',
    description: 'The most powerful model from Google.',
  },
  {
    id: 'gemini-1.5-pro',
    label: 'Gemini 1.5 Pro',
    apiIdentifier: 'gemini-1.5-pro',
    description: 'The most powerful model from Google.',
  },
];

export const DEFAULT_MODEL_NAME: string = 'gpt-4o-mini';
