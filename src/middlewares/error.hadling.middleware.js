// eslint-disable-next-line no-unused-vars
export default function (error, req, res, next) {
  if (error.name === 'UnauthorizedError') return res.status(401).send(error.message);

  if (error.name === 'NotFoundError') return res.status(404).send(error.message);

  if (error.name === 'ConflictError') return res.status(409).send(error.message);

  if (error.name === 'JsonWebTokenError') return res.status(401).send('Unauthorized!');

  res.status(500).send({ message: 'Internal Server Error!' });
}
