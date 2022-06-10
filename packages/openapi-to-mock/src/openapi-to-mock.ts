import { extractResponses } from "./response";
import { extractSchemas } from "./schema";
import { composeMockData, MockData } from "./compose";
import swaggerCombine from 'swagger-combine';
import { OpenAPIObject } from 'openapi3-ts';

const openAPIToMock = async (file: string): Promise<MockData> => {
  try {
    const content: OpenAPIObject = await swaggerCombine(file)
    const responses = extractResponses(content);
    const schemas = extractSchemas(content);
    return composeMockData(responses, schemas);
  } catch (e) {
    console.error(e)
    throw e
  }
}

export { openAPIToMock }
