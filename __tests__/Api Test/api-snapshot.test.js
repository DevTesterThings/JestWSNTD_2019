import rp from "request-promise-native";

describe("API Snapshot", () => {
  test.skip("Initial snapshot", async () => {
    const response = await rp({
      uri: 'https://api.publicapis.org/entries?Category=Books&https=true',
      json: true,
      resolveWithFullResponse: true,
      rejectUnauthorized: false
    });
    expect(response.body).toMatchInlineSnapshot(`
Object {
  "count": 6,
  "entries": Array [
    Object {
      "API": "Bhagavad Gita",
      "Auth": "OAuth",
      "Category": "Books",
      "Cors": "yes",
      "Description": "Bhagavad Gita text",
      "HTTPS": true,
      "Link": "https://bhagavadgita.io/api",
    },
    Object {
      "API": "BookNomads",
      "Auth": "",
      "Category": "Books",
      "Cors": "unknown",
      "Description": "Books published in the Netherlands and Flanders (about 2.5 million), book covers and related data",
      "HTTPS": true,
      "Link": "https://www.booknomads.com/dev",
    },
    Object {
      "API": "Goodreads",
      "Auth": "apiKey",
      "Category": "Books",
      "Cors": "unknown",
      "Description": "Books",
      "HTTPS": true,
      "Link": "https://www.goodreads.com/api",
    },
    Object {
      "API": "Google Books",
      "Auth": "OAuth",
      "Category": "Books",
      "Cors": "unknown",
      "Description": "Books",
      "HTTPS": true,
      "Link": "https://developers.google.com/books/",
    },
    Object {
      "API": "Open Library",
      "Auth": "",
      "Category": "Books",
      "Cors": "unknown",
      "Description": "Books, book covers and related data",
      "HTTPS": true,
      "Link": "https://openlibrary.org/developers/api",
    },
    Object {
      "API": "Penguin Publishing",
      "Auth": "",
      "Category": "Books",
      "Cors": "unknown",
      "Description": "Books, book covers and related data",
      "HTTPS": true,
      "Link": "http://www.penguinrandomhouse.biz/webservices/rest/",
    },
  ],
}
`);
  });

  test.skip("Complex matcher", async () => {
    const response = await rp({
      uri: "https://api.publicapis.org/entries?Category=Books&https=true",
      json: true,
      resolveWithFullResponse: true,
      rejectUnauthorized: false
    });
    expect(response.body).toMatchSnapshot({
      count: 6,
      entries: expect.arrayContaining([
        expect.objectContaining({
          Auth: expect.stringMatching(/^OAuth|apiKey|$/),
          Category: expect.any(String),
          Cors: expect.any(String),
          HTTPS: true,//expect.any(Boolean)
        })
      ])
    });
  });
});
