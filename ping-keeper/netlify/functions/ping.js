exports.handler = async () => {
  console.log("Ping executed");
  return {
    statusCode: 200,
    body: "pong"
  };
};