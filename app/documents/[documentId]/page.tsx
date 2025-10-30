import Editor from "./editor";

async function DocumentPage({
//   params,
}: {
  params: Promise<{ documentId: string }>;
}) {
//   const { documentId } = await params;
  return (
    <div className="min-h-screen  bg-[#FAFBFD] ">
      <Editor />
    </div>
  );
}

export default DocumentPage;
