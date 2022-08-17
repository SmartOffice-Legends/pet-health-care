export abstract class IStorage {
  /**
   * @param  {string} key
   * @param  {string} value
   * @returns Promise
   */
  abstract setItem(key: string, value: any): Promise<boolean>;

  /**
   * @param  {string} key
   * @returns Promise
   */
  abstract getItem(key: string): Promise<string | null>;

  /**
   * @param  {string} key
   * @param  {any} value
   * @returns Promise
   */
  abstract updateItem(key: string, value: any): Promise<boolean>;

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
