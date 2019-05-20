import rp from "request-promise-native";

describe("API Snapshot", () => {
  test("Initial snapshot", async () => {
    const response = await rp({
      uri: "https://api.publicapis.org/entries?Category=Books&https=false",
      json: true,
      resolveWithFullResponse: true,
      rejectUnauthorized: false
    });
    expect(response.body).toMatchInlineSnapshot();
  });
});
