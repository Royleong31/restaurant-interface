import ReactDOM from "react-dom";
import Overlay from "../../../components/Overlay";
import MenuModal from "./MenuModal/MenuModal";

type Props = {
  categories: string[];
  activeCategory: { category: string; offsetY: number };
  onOverlayClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const portalElement = document.getElementById("overlays") || new Element();

export default function Menu({ onOverlayClick, categories, activeCategory }: Props) {
  return (
    <>
      {ReactDOM.createPortal(
        <MenuModal categories={categories} activeCategory={activeCategory}/>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Overlay onCloseModal={onOverlayClick} />,
        portalElement
      )}
    </>
  );
}
