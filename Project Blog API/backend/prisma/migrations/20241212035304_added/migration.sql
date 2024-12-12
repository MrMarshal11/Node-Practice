-- CreateTable
CREATE TABLE "unpublishedPosts" (
    "id" SERIAL NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "unpublishedPosts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "unpublishedPosts" ADD CONSTRAINT "unpublishedPosts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
