import dotenv from "dotenv";

dotenv.config();

export class Secrets {
  static readonly BASE_URL = Secrets.get("BASE_URL");
  static readonly HEADLESS = Secrets.get("HEADLESS") === "true";
  
  private static get(name: string): string {
    const value = process.env[name];

    if (value === undefined) {
      throw new Error(`Missing environment variable: ${name}`);
    }
    return value;
  }
}
 