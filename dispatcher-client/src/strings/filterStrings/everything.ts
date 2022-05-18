import { sources } from '../../mockData/allSources';

export const everythingStrings = [
  {
    name: 'Sort by',
    options: [
      { name: 'Relevancy', id: 'relevancy' },
      { name: 'Popularity', id: 'popularity' },
      { name: 'publishedAt' },
    ],
  },
  {
    name: 'Dates',
  },
  { name: 'Sources', options: sources },
  {
    name: 'Language',
    options: [
      { name: 'Arabic', id: 'ar' },
      { name: 'German', id: 'de' },
      { name: 'English', id: 'en' },
      { name: 'Spanish', id: 'es' },
      { name: 'French', id: 'fr' },
      { name: 'Hebrew', id: 'he' },
      { name: 'Italian', id: 'it' },
      { name: 'Dutch', id: 'nl' },
      { name: 'Norwegian', id: 'no' },
      { name: 'Portuguese', id: 'pt' },
      { name: 'Russian', id: 'ru' },
      { name: 'Swedish', id: 'sv' },
      { name: 'Chinese', id: 'zh' },
    ],
  },
];
