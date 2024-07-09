// types/next.d.ts
import { JwtPayload } from "jsonwebtoken";
import { NextApiRequest } from "next";

declare module "next" {
  interface NextApiRequest {
    user?: JwtPayload;
  }
}
