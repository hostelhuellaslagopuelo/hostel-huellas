CREATE TABLE IF NOT EXISTS "AlojamientoPrecio" (
▎ "slug" TEXT NOT NULL,
▎ "precioARS" INTEGER,
▎ "actualizadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
▎ CONSTRAINT "AlojamientoPrecio_pkey" PRIMARY KEY ("slug")
▎ );
