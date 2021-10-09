import * as constants from "../constants/Constants";

export const Login = async (email, password) => {
  try {
    const url = `${constants.externalResourceBase}api/auth/login`;

    var formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    let response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    alert("faile at fetchLogin service");
  }
};
