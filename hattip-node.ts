import handler from "./hattip-entry";
import { createMiddleware } from "@hattip/adapter-node";
export default createMiddleware(handler);