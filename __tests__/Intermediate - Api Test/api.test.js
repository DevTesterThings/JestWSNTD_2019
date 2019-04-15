describe('api test', () => {
  const url = 'https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular';
  it('should return a 200', async () => {
    setStatus(215);

    const result = await https({
      url,
      header: 'authorization: OAuth oauth_consumer_key="consumer-key-for-app',
      method: 'get'
    });
    expect(result.data).toBe('{"errors":[{"code":215,"message":"Bad Authentication data."}]}');
  })
})
