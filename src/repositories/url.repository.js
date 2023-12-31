import { db } from '../database/db.connection.js';

export const saveUrl = async ({ ownerId, url, shortUrl }) => {
  return await db.query(
    `
    INSERT INTO urls ("ownerId", url, "shortUrl") VALUES ($1, $2, $3) returning id, "shortUrl"
  `,
    [ownerId, url, shortUrl],
  );
};

export const getUrlById = async ({ id }) => {
  return await db.query('SELECT * FROM urls WHERE id = $1', [id]);
};

export const getUrlByShortUrl = async ({ shortUrl }) => {
  return await db.query('SELECT * FROM urls WHERE "shortUrl" = $1', [shortUrl]);
};

export const deleteUrlById = async ({ id, ownerId }) => {
  return await db.query('DELETE FROM urls WHERE id = $1 AND "ownerId" = $2;', [id, ownerId]);
};

export const updateVisitCount = async ({ id, newVisitCount }) => {
  return await db.query('UPDATE urls SET "visitCount" = $2 WHERE id = $1', [id, newVisitCount]);
};

export const urlRepository = {
  saveUrl,
  getUrlById,
  getUrlByShortUrl,
  updateVisitCount,
  deleteUrlById,
};
