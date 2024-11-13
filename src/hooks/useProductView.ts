import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { ViewProductProps, Variant } from "@/domain/definitionsTypes";
import {
  setVariants,
  setSelectedVariant,
  setQuantity,
} from "@/redux/features/selectedTargetSlice";

// hook para manejar la apertura del popUp "producto especifico"
export const useProductView = (product: ViewProductProps["product"]) => {
  // inicializa dispatch para comunicarse con state redux
  const dispatch = useDispatch();

  // selecciona los initial state del selectedTargetSlice (estado global para manejar variante seleccionada)
  const { variants, selectedVariant, quantity } = useSelector(
    (state: RootState) => state.selectedTarget
  );
  // estado local para manejar variantes de tamaños
  const [availableSizes, setAvailableSizes] = useState<string[]>([]);

  // estado local para manejar variantes de colores.
  const [availableColors, setAvailableColors] = useState<string[]>([]);

  // estado local para manejar mensaje de "no hay variantes seleccionadas"
  const [showMessage, setShowMessage] = useState(false);

  // funcion para manejar aumentar la cantidad de la variante seleccionada.
  const handleIncrease = () =>
    dispatch(setQuantity(Math.min(quantity + 1, selectedVariant?.stock || 1)));

  // funcion para manejar reducir la cantidad de la variante seleccionada.
  const handleDecrease = () => dispatch(setQuantity(Math.max(1, quantity - 1)));

  // aplicar un state con todas las variantes.
  useEffect(() => {
    dispatch(setVariants(product.variants));
    /*     dispatch(setSelectedVariant(product.variants[0])); */
    updateAvailableOptions(product.variants);
  }, [product, dispatch]);

  // funcion para  manejar disponibilidad de attr (variantes de talle y color)
  const updateAvailableOptions = (currentVariants: Variant[]) => {
    const sizes = Array.from(new Set(currentVariants.map((v) => v.attr.Talle)));
    const colors = Array.from(
      new Set(currentVariants.map((v) => v.attr.Color))
    );
    setAvailableSizes(sizes);
    setAvailableColors(colors);
  };

  // funcion para seleccionar y persistir el color/ tamaño seleccionado.
  const handleColorSelect = (color: string) => {
    const newVariant =
      variants.find(
        (v) =>
          v.attr.Color === color && v.attr.Talle === selectedVariant?.attr.Talle
      ) || variants.find((v) => v.attr.Color === color);
    if (newVariant) {
      dispatch(setSelectedVariant(newVariant));
      const availableSizesForColor = variants
        .filter((v) => v.attr.Color === color && v.stock > 0)
        .map((v) => v.attr.Talle);
      setAvailableSizes(availableSizesForColor);
    }
  };

  // funcion para seleccionar y persistir el tamaño / color seleccionado.
  const handleSizeSelect = (size: string) => {
    const newVariant =
      variants.find(
        (v) =>
          v.attr.Talle === size && v.attr.Color === selectedVariant?.attr.Color
      ) || variants.find((v) => v.attr.Talle === size);
    if (newVariant) {
      dispatch(setSelectedVariant(newVariant));
      const availableColorsForSize = variants
        .filter((v) => v.attr.Talle === size && v.stock > 0)
        .map((v) => v.attr.Color);
      setAvailableColors(availableColorsForSize);
    }
  };

  // setear la quantity en 1 por defecto al cambiar de selectVariant para no traer errores de cantidad por variante.
  useEffect(() => {
    if (selectedVariant) {
      dispatch(setQuantity(1));
    }
  }, [selectedVariant, dispatch]);

  // exportacion de metodos, estados y funciones para utilizar en los componentes de renderizado.
  return {
    variants,
    selectedVariant,
    quantity,
    availableSizes,
    availableColors,
    handleIncrease,
    handleDecrease,
    handleColorSelect,
    handleSizeSelect,
    showMessage,
    setShowMessage,
  };
};
