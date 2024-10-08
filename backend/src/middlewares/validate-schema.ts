import { invalidDataError } from "../errors/invalid-data-error";
import { NextFunction, Response, Request } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";


export function validateSchema(schema: ObjectSchema): Validation {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error, value } = schema.validate(req.body, { abortEarly: false });

      if (error) {
        console.log("Erro de validação detectado:", error.details);
        return res
          .status(httpStatus.BAD_REQUEST)
          .send(invalidDataError(error.details.map((d) => d.message)));
      }

      next();

    } catch (err) {
      console.error("Erro inesperado durante a validação do schema:", err);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: "Erro inesperado durante a validação do schema.",
      });
    }
  };
}

type Validation = (req: Request, res: Response, next: NextFunction) => void;
