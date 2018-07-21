import { HttpClient, json } from 'aurelia-fetch-client';
import { timingSafeEqual } from 'crypto';
import { AuthService } from './auth-service';

export abstract class DataService {
  protected constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
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
    body: any,
    isProtected: boolean,
  ): Promise<TResult> {
    let requestInit: RequestInit = {
      method,
    };
    if (body !== null) {
      requestInit.body = json(body);
    }
    if (isProtected) {
      requestInit.headers = this.createAuthorisationHeader();
    }
    return this.httpClient.fetch(endpoint, requestInit)
      .then(res => res.json());
  }
  private createAuthorisationHeader(): any {
    let accessToken = this.authService.getAccessToken();
    return {'Authorization': `Bearer ${accessToken}`}
  }
  protected get<TResult>(endpoint: string, isProtected: boolean): Promise<TResult> {
    return this.createRequest('GET', endpoint, null, isProtected);
  }
  protected post<TResult>(endpoint: string, body: any, isProtected: boolean): Promise<TResult> {
    return this.createRequest('POST', endpoint, body, isProtected);
  }
  protected put<TResult>(endpoint: string, body: any, isProtected: boolean): Promise<TResult> {
    return this.createRequest('PUT', endpoint, body, isProtected);
  }
  protected del<TResult>(endpoint: string, isProtected: boolean): Promise<TResult> {
    return this.createRequest('DELETE', endpoint, null, isProtected);
  }
}