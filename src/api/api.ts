import {
  createPromiseClient,
  createConnectTransport,
} from '@bufbuild/connect-web'
import type { PromiseClient } from '@bufbuild/connect-web'
import { MlnRetail } from '../gen/retail/v1/service_retail_connectweb'


export default class Api {
  private static instance: Api;
  private baseUrl = 'http://localhost:9090';
  public client : PromiseClient<typeof MlnRetail> | undefined


  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {
    this.client = createPromiseClient(
      MlnRetail,
      createConnectTransport({
          baseUrl: this.baseUrl,
      }))
   }

  /**
   * The static method that controls the access to the Api instance.
   *
   * This implementation let you subclass the Api class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): Api {
      if (!Api.instance) {
          Api.instance = new Api();
      }
      return Api.instance;
  }
}
