import { mockUsers } from "../utils/constants.mjs";

export const resolveIndexByUserID = (request, response, next) => {
  const {
    params: { id },
  } = request; // Same as const body = request.body and const id....

  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return response.sendStatus(400);

  const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);

  if (findUserIndex === -1) return response.sendStatus(404);
  request.findUserIndex = findUserIndex; // To allow the next middleware to use this information
  next();
};
