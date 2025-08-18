import prisma from "@/lib/prisma";

export async function GET () {
    const res=await prisma.user.findFirst();
    console.log(res)

}