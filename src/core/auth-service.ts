export class AuthService {
  private rememberMe: boolean;
  private readonly storageKey = 'access_token';
  constructor() {
    this.setStorage();
  }
  private setStorage() {
    this.rememberMe = localStorage.getItem(this.storageKey) !== null;
  }
  private get storage() {
    return this.rememberMe ? localStorage : sessionStorage;
  }
  public setAccessToken(token: string, rememberMe: boolean) {
    this.rememberMe = rememberMe;
    this.storage.getItem(this.storageKey);
  }
  getAccessToken(): string {
    return this.storage.getItem(this.storageKey);
  }
  public clearAccessToken() {
    this.storage.clear();
  }
}