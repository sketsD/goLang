type SmallErrorMessageProps = {
  errorMessage: string;
};
export default function SmallErrorMessage({
  errorMessage,
}: SmallErrorMessageProps) {
  return (
    <div className="bg-red-500/40 flex justify-center rounded-md px-4 py-2 ">
      <div className="tracking-widest">{errorMessage}</div>
    </div>
  );
}
