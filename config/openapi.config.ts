import { GenerateServiceProps, generateService } from '@umijs/openapi';
const env = process.env;

const openapiConfig: GenerateServiceProps[] = [
  {
    requestLibPath: "import request from '../request';",
    serversPath: './src/servers',
    schemaPath: `${env.api_url}/v3/api-docs`,
    projectName: 'hzChain',
    apiPrefix: '',
    namespace: 'SYSAPI',
  },
];
openapiConfig.forEach((item) => {
  generateService(item);
});
