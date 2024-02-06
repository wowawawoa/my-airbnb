import prisma from "@/app/libs/prismadb";

export interface ListingsParams {
  userId?: string;
}

export default async function getListings(params: ListingsParams) {
  try {
    const { userId } = params;

    // if query is empty, it will return all listings
    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
