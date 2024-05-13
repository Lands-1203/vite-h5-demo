import { GenerateServiceProps, generateService } from '@umijs/openapi';
const env = process.env;

const openapiConfig: GenerateServiceProps[] = [
  {
    requestLibPath: "import request from '../request';",
    serversPath: './src/servers',
    schemaPath: `${env.hote_travel}/v3/api-docs`,
    projectName: 'hoteTravel',
    apiPrefix: '',
    namespace: 'SYSAPI',
  },
];
openapiConfig.forEach((item) => {
  generateService(item);
});
