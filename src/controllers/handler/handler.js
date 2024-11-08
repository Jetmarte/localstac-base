'use strict';

exports.getHello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Pase a Serverless v1.0! Su función se ejecutó correctamente',
        input: event,
      },
      null,
      2
    ),
  };
};


