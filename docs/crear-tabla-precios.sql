-- Crear la tabla de precios editables en Neon.
-- Pegar en el SQL Editor de Neon (console.neon.tech), seleccionar TODO y ejecutar (Run).
--
-- IMPORTANTE:
--  1) Las comillas deben ser RECTAS ("), no curvas (" ").
--  2) Copiar la línea COMPLETA, incluido el punto y coma final.
--
-- Versión en una sola línea (más difícil de romper):

CREATE TABLE IF NOT EXISTS "AlojamientoPrecio" ("slug" TEXT NOT NULL, "precioARS" INTEGER, "actualizadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "AlojamientoPrecio_pkey" PRIMARY KEY ("slug"));
