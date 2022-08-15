export abstract class IStorage {
  constructor() {
    console.log('hi');
  }
  /**
   * @param  {string} key
   * @param  {string} value
   * @returns Promise
   */
  abstract setItem(key: string, value: string): Promise<boolean>;

  /**
   * @param  {string} key
   * @returns Promise
   */
  abstract getItem(key: string): Promise<string | null>;

  /**
   * @param  {string} key
   * @returns Promise
   */
  abstract removeItem(key: string): Promise<boolean>;

  /**
   * @returns Promise
   */
  abstract clear(): Promise<boolean>;
}
