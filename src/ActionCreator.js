const storeToken = (token) => {
  return {
    type: "storeToken",
    token: token,
  };
};

const storeJobs = (jobs) => {
  return {
    type: "storeJobs",
    jobs: jobs,
  };
};

export { storeToken, storeJobs };
