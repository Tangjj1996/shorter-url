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
    } catch (e) {
      res.sendStatus(401);
    }
  };

export default validateResource;
