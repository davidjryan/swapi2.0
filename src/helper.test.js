import {
  fetchPeople,
//  cleanPeople,
//  buildPeople,
//  fetchPlanets,
//  cleanPlanets,
//  buildPlanets,
//  fetchVehicles,
//  cleanVehicles,
  fetchCrawl
//  randomizer
} from './helper.js';

describe('fetchPeople', () => {
  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
        {
          genericResponse: 'Its fetching'
        }
      )
    }));
  });

  it('should be a function', () => {
    expect(fetchPeople).toBeAFunction;
  });


});

describe('fetchCrawl', () => {
  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
        mockCrawlResults
      )
    }));

    const mockCrawlResults =
      {
        title: 'I am a title',

        release_date: '2017-05-30',
        opening_crawl: 'I am a crawl'
      };
  });

  it('should be a function', () => {
    expect(fetchCrawl).toBeAFunction;
  });

  it('should return an object of results', async () => {
    const filmData = await fetchCrawl();
    expect(typeof filmData).toEqual('object');
  });

  it('should return title, release date, and crawl', async () => {
    const mockCrawl =
      {
        title: 'I AM A TITLE',
        date: '2017-05-30',
        crawl: 'I am a crawl'
      };

    const filmData = await fetchCrawl();
    expect(filmData.title).toEqual(mockCrawl.title);
    expect(filmData.date).toEqual(mockCrawl.date);
    expect(filmData.crawl).toEqual(mockCrawl.crawl);
  });
});

// describe('randomizer', () => {
//   const
// })
