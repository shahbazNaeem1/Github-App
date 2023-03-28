export const formatResponse = response =>
  response.map(item => ({
    avatarUrl: item.committer.avatar_url,
    date: item.commit.committer.date,
    message: JSON.stringify(item.commit.message),
    name: item.commit.committer.name,
  }));
