const storeToken = (token) => {
  return {
    type: "STORE_TOKEN",
    token: token,
  };
};

export { storeToken };
