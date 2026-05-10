import { Request, Response } from "express";
import prisma from "../prisma/client";

export const listAffiliates = async (req: Request, res: Response) => {

  const affiliates = await prisma.affiliate.findMany();

  console.log(affiliates);

  res.render("affiliates/list", {
    affiliates,
  });
};

export const showCreateForm = (req: Request, res: Response) => {
  res.render("affiliates/create");
};

export const createAffiliate = async (req: Request, res: Response) => {

  const { firstName, lastName, email, membershipType } = req.body;

  await prisma.affiliate.create({
    data: {
      firstName,
      lastName,
      email,
      membershipType,
    },
  });

  res.redirect("/affiliates");
};