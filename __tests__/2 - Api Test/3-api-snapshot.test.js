import rp from "request-promise-native";

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
        HTTPS: true, //expect.any(Boolean)
      })
    ])
  });
});
