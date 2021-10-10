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

const detailJob = (job) => {
  return {
    type: "detailJob",
    job: job,
  };
};

export { storeToken, storeJobs, detailJob };
