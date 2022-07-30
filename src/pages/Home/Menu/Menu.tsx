import ReactDOM from "react-dom";
import Overlay from "../../../components/Overlay";
import MenuModal from "./MenuModal/MenuModal";
import { CategoryPosition } from "../Home";

type Props = {
  categories: CategoryPosition[];
  activeCategory: string;
  onOverlayClick: React.Dispatch<React.SetStateAction<boolean>>;
  onCategoryListClick: React.Dispatch<React.SetStateAction<string>>;
};

const portalElement = document.getElementById("overlays") || new Element();

export default function Menu({
  onOverlayClick,
  categories,
  activeCategory,
  onCategoryListClick,
}: Props) {
  return (
    <>
      {ReactDOM.createPortal(
        <MenuModal
          categories={categories}
          activeCategory={activeCategory}
          onOverlayClick={onOverlayClick}
        />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Overlay onCloseModal={onOverlayClick} />,
        portalElement
      )}
    </>
  );
}
