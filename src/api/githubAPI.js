import request from './baseAPI';

export const getRepoCommits = (ownerRepo, page) =>
  request.get(`/repos/${ownerRepo}/commits?per_page=10&page=${page}`);
