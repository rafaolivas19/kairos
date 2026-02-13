import { CopyInput } from "./ui/copy-input";

export default function Uuids() {
  return (
    <>
      <CopyInput
        key="guid"
        value={crypto.randomUUID()}
        fontSize="text-xs sm:text-md"
      ></CopyInput>
    </>
  );
}
