import type { AnyObjectSchema } from "yup";
import type { Request, Response, NextFunction } from "express";

const validateResource =
  (resourceSchema: AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await resourceSchema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (e: any) {
      res.status(401).send(e.message);
    }
  };

export default validateResource;
