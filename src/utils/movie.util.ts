import axios from 'axios';
import * as cheerio from 'cheerio';

export async function fetchMovieDetails(url: string) {
  try {
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);

    const movieWrap = $('div#dle-content');

    if (!movieWrap.length) {
      console.error('Element not found');
      return null;
    }

    const title = movieWrap.find('span.solototle').text().trim();
    const originalTitle = movieWrap.find('span.origintitle').text().trim();

    // const posterHref = movieWrap.find('div.film-poster').find('img').attr('src');
    // const poster = posterHref ? new URL(posterHref, url).href || null : null;

    const likes = movieWrap.find('span[data-likes-id]').text().trim();
    const dislikes = movieWrap.find('span[data-dislikes-id]').text().trim();

    const infoItems: Record<string, any> = [];

    movieWrap.find('div.film-info div.fi-item').each((_, el) => {
      const label = $(el).find('div.fi-label').text().trim();
      const value = $(el).find('div.fi-desc').text().trim();
      infoItems.push({ label, value });
    });

    const [quality, year, age, country, genres, value, directors, actors, duration, lang, imdb] =
      infoItems.map((item: Record<string, any>) => item.value) || [];

    const description = movieWrap.find('div.full-text').text().trim();

    return {
      title,
      originalTitle,
      // poster: poster || null,
      quality,
      year,
      age,
      country,
      genres: genres
        ? genres
            .split(',')
            .map((item: string) => item.trim())
            .filter((item: string) => item !== '')
        : [],
      directors: directors
        ? directors
            .split(',')
            .map((item: string) => item.trim())
            .filter((item: string) => item !== '')
        : [],
      actors: actors
        ? actors
            .split(',')
            .map((item: string) => item.trim())
            .filter((item: string) => item !== '')
        : [],
      duration,
      likes,
      dislikes,
      imdb: imdb.split('/')[0],
      description
    };
  } catch (err) {
    console.error('Error while querying or parsing:', err);
    return null;
  }
}
