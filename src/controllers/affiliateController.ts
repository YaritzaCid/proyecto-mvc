import { Request, Response } from "express";
import prisma from "../prisma/client";

export const listAffiliates = async (req: Request, res: Response) => {

  const affiliates = await prisma.affiliate.findMany();

  console.log(affiliates);

  res.render("affiliates/list", {
    affiliates,
  });
};