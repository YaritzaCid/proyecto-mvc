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

/*Evitar duplicados en el formulario*/
const existing = await prisma.affiliate.findUnique({
  where: { email }
});

if (existing) {
  return res.send("Este email ya está registrado");
}

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


/* Ver afiliado individualmente */
export const showAffiliate = async (req: Request, res: Response) => {

  const id = Number(req.params.id);

  const affiliate = await prisma.affiliate.findUnique({
    where: {
      id,
    },
  });

  if (!affiliate) {
    return res.send("Afiliado no encontrado");
  };

  res.render("affiliates/detail", {
    affiliate,
  });
};

/* edición de afiliados*/
export const showEditForm = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const affiliate = await prisma.affiliate.findUnique({
    where: { id },
  });

  if (!affiliate) {
    return res.send("Afiliado no encontrado");
  }

  res.render("affiliates/edit", {
    affiliate,
  });
};

export const updateAffiliate = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const { firstName, lastName, email, membershipType } = req.body;

  await prisma.affiliate.update({
    where: { id },
    data: {
      firstName,
      lastName,
      email,
      membershipType,
    },
  });

  res.redirect("/affiliates");
};

/* Borrar afiliado */
export const deleteAffiliate = async (req: Request, res: Response) => {

  const id = Number(req.params.id);

  await prisma.affiliate.delete({
    where: {
      id,
    },
  });

  res.redirect("/affiliates");
};