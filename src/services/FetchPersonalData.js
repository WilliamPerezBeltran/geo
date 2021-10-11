import * as constants from "../constants/Constants";

export const Me = async (token) => {
  try {
    const url = `${constants.externalResourceBase}api/auth/me`;

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
    console.log("faile at fetchPersonalData service");
  }
};
