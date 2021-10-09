import { RequestBodyDefault } from "fastify";
import { convertCurrency } from "../services/currencies.service";
export default async (request: any, reply: any) => {
    return convertCurrency(request.query.base, request.query.amount);
//   return reply.send({
//     base: request.query.base,
//     amount: request.query.amount,
//     convertion: [
//         {
//             currency: "EUR",
//             rate: 0.9,
//             amount: request.query.amount * 0.9
//         }
//     ]
//   });
};
