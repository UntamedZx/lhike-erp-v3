import fp from "fastify-plugin";

export const jwtPlugin = fp(async (fastify) => {
  fastify.register(require("@fastify/jwt"), {
    secret: process.env.JWT_SECRET || "valenin",
  });
});
