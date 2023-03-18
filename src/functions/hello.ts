import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

/**
 * Handles a simple code to say "hello" triggered by an HTTP event.
 * @param _event An AWS API Gateway event.
 * @returns A promise with the API Gateway result
 */
export const handler: APIGatewayProxyHandler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const response = {
      statusCode: 200,
      body: 'HELLO AMIGOS!',
    };
    return response;
  } catch (err) {
    return {
      statusCode: 500,
      body: 'Unexpected error occured',
    };
  }
};
