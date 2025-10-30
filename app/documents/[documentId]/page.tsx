import Editor from "./editor";

async function DocumentPage({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) {
  const { documentId } = await params;
  return (
    <div>
      This is Document with id : {documentId}
    
      <Editor />
    </div>
  );
}

export default DocumentPage;
