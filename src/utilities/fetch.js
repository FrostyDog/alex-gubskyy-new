import token from "./token";

export async function fetchProjects(url) {
  const fiveProjects = await fetch(`${url}?sort=updated&direction=desc&per_page=5&page=1`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  const fiveProjectsJSON = await fiveProjects.json();
  return fiveProjectsJSON;
}

export async function fetchProjectCommits(arrayOfProjects) {
  const result = await Promise.all(arrayOfProjects.map(async (el) => fetchCommitUrls(el)));
  return result;
}

export async function fetchCommitUrls(project) {
  const response = await getJSON(`${project.url}/commits?sort=updated&direction=desc&per_page=3`);
  const listOfCommits = await response.map((el) => el); // or el.html_url fetching specific url;
  return { ...project, listOfCommits };
}

export function getJSON(url) {
  return fetch(url, {
    headers: {
      Authorization: `token ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Something went, wrong sorry");
  });
}
