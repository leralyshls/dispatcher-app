import { sources } from './allSources';

export const countryFirstVisit = 'Israel';

export const filters = {
  search: ['Top Headlines', 'Everything'],
  everything: {
    filterBy: ['Sort by', 'Dates', 'Sources', 'Language'],
    language: [
      'Arabic',
      'German',
      'English',
      'Spanish',
      'French',
      'Hebrew',
      'Italian',
      'Dutch',
      'Norwegian',
      'Portuguese',
      'Chinese',
    ],
    sources: sources,
    sourtBy: ['Relevancy', 'Popularity', 'Published at'],
  },
  topHeadlines: {
    filterBy: ['Country', 'Category', 'Sources'],
    country: [
      'United Arab Emirates',
      'Argentina',
      'Austria',
      'Australia',
      'Belgium',
      'Bulgaria',
      'Brazil',
      'Canada',
      'Chile',
      'China',
      'Colombia',
      'Cuba',
      'Czechia',
      'Germany',
      'Egypt',
      'France',
      'Great Britain ',
      'Greece',
      'Hong Kong',
      'Hungary',
      'Indonesia',
      'Ireland',
      'Israel',
      'India',
      'Italy',
      'Japan',
      'Korea (the Republic of)',
      'Lithuania',
      'Latvia',
      'Morocco',
      'Mexico',
      'Malaysia',
      'Nigeria',
      'Netherlands',
      'Norway',
      'New Zealand',
      'Philippines',
      'Poland',
      'Portugal',
      'Romania',
      'Serbia',
      'Russia',
      'Saudi Arabia',
      'Sweden',
      'Singapore',
      'Slovenia',
      'Slovakia',
      'Thailand',
      'Turkey',
      'Taiwan',
      'Ukraine',
      'United States',
      'Venezuela',
      'Zambia',
    ],
    sources: sources,
    category: [
      'Business',
      'Entertainment',
      'General',
      'Health',
      'Science',
      'Sports',
      'Technology',
    ],
  },
};
