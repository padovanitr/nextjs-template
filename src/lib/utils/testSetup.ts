import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import { config } from "dotenv";

vi.mock("server-only", () => ({}));

config({ path: ".env.test" });

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
