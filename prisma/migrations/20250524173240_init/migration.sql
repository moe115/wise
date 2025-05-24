-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Volunteer" (
    "volId" SERIAL NOT NULL,
    "typeV" TEXT,
    "phone" TEXT,
    "AvailabilityV" TEXT,
    "ReputationScore" DECIMAL(65,30) NOT NULL,
    "CategoryV" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Volunteer_pkey" PRIMARY KEY ("volId")
);

-- CreateTable
CREATE TABLE "Citizen" (
    "CitizenId" SERIAL NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "citvolId" INTEGER NOT NULL,

    CONSTRAINT "Citizen_pkey" PRIMARY KEY ("CitizenId")
);

-- CreateTable
CREATE TABLE "NGO" (
    "NGOId" SERIAL NOT NULL,
    "ngoName" TEXT,
    "ngovolId" INTEGER NOT NULL,

    CONSTRAINT "NGO_pkey" PRIMARY KEY ("NGOId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Volunteer_volId_key" ON "Volunteer"("volId");

-- CreateIndex
CREATE UNIQUE INDEX "Volunteer_userId_key" ON "Volunteer"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Citizen_CitizenId_key" ON "Citizen"("CitizenId");

-- CreateIndex
CREATE UNIQUE INDEX "Citizen_citvolId_key" ON "Citizen"("citvolId");

-- CreateIndex
CREATE UNIQUE INDEX "NGO_NGOId_key" ON "NGO"("NGOId");

-- CreateIndex
CREATE UNIQUE INDEX "NGO_ngovolId_key" ON "NGO"("ngovolId");

-- AddForeignKey
ALTER TABLE "Volunteer" ADD CONSTRAINT "Volunteer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Citizen" ADD CONSTRAINT "Citizen_citvolId_fkey" FOREIGN KEY ("citvolId") REFERENCES "Volunteer"("volId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NGO" ADD CONSTRAINT "NGO_ngovolId_fkey" FOREIGN KEY ("ngovolId") REFERENCES "Volunteer"("volId") ON DELETE RESTRICT ON UPDATE CASCADE;
