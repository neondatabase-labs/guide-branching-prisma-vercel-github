-- CreateTable
CREATE TABLE "elements" (
    "id" SERIAL NOT NULL,
    "element_name" TEXT NOT NULL,
    "atomic_number" INTEGER NOT NULL,
    "symbol" TEXT NOT NULL,

    CONSTRAINT "elements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "elements_atomic_number_key" ON "elements"("atomic_number");
