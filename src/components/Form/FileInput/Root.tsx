"use client";

//use client acima é obrigaçao do next para usar o context
import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from "react";

//extendendo / criando o tipo
export type IRootProps = ComponentProps<"div">;

//tipando o context
type FileInputContextType = {
  id: string;
  files: File[];
  onFilesSelected: (files: File[], multiple: boolean) => void;
};

//criando o context e atribuindo o type
const FileInputContext = createContext({} as FileInputContextType);

export function Root(props: IRootProps) {
  //este hook cria um id e persiste nas utilidades mesmo quando o componente renderiza
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files]);
    } else {
      setFiles(files);
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  );
}

//exportando uma funçao que carrega consigo o context permitindo o uso externo
export const useFileInput = () => useContext(FileInputContext);
