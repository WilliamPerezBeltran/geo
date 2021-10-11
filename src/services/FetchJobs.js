import * as constants from "../constants/Constants";

export const Jobs = async (token) => {
  try {
    const url = `${constants.externalResourceBase}api/jobs`;

    let response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer${token}`,
      },
    });

    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log("faile at fetchJobs service");
  }
};
