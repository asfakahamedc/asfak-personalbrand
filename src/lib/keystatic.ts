import { createReader } from "@keystatic/core/reader";
import config from "../../keystatic.config";

// Instantiate the reader instance for Server Components
export const reader = createReader(process.cwd(), config);
