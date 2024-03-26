import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getElements() {
  const elements = await prisma.element.findMany();
  return elements;
}

export const dynamic = "force-dynamic";

export default async function ElementList() {
  const elements = await getElements();
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Elements</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Symbol</th>
            <th className="px-4 py-2">Atomic Number</th>
          </tr>
        </thead>
        <tbody>
          {elements.map((element) => (
            <tr key={element.id}>
              <td className="border px-4 py-2 text-center">
                {element.elementName}
              </td>
              <td className="border px-4 py-2 text-center">{element.symbol}</td>
              <td className="border px-4 py-2 text-center">
                {element.atomicNumber}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
