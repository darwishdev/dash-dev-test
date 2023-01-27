import { boot } from 'quasar/wrappers';
import {
  createPromiseClient,
  createConnectTransport,
} from '@bufbuild/connect-web'
import type { PromiseClient } from '@bufbuild/connect-web'
import { MlnRetail } from '../gen/retail/v1/service_retail_connectweb'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: PromiseClient<typeof MlnRetail> | undefined;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = createPromiseClient(
  MlnRetail,
  createConnectTransport({
      baseUrl: 'http://localhost:9090',
  }));

export default boot(({ app }) => {
  app.config.globalProperties.$api = api;
});

export { api };
