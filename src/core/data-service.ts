import { HttpClient, json } from 'aurelia-fetch-client';
import { timingSafeEqual } from 'crypto';

export abstract class DataService {
  protected constructor(
    private httpClient: HttpClient,
  ) {
    this.configureHttpClient();
  }
  private configureHttpClient() {
    this.httpClient.configure(config => config
      .withBaseUrl('http://localhost:5000')
    );
  }
  private createRequest<TResult>(
    method: string,
    endpoint: string,
    body: any
  ): Promise<TResult> {
    let requestInit: RequestInit = {
      method,
    };
    if (body !== null) {
      requestInit.body = json(body);
    }
    return this.httpClient.fetch(endpoint, requestInit)
      .then(res => res.json());
  }
  protected get<TResult>(endpoint: string): Promise<TResult> {
    return this.createRequest('GET', endpoint, null);
  }
  protected post<TResult>(endpoint: string, body: any): Promise<TResult> {
    return this.createRequest('POST', endpoint, body);
  }
  protected put<TResult>(endpoint: string, body: any): Promise<TResult> {
    return this.createRequest('PUT', endpoint, body);
  }
  protected del<TResult>(endpoint: string): Promise<TResult> {
    return this.createRequest('DELETE', endpoint, null);
  }
}