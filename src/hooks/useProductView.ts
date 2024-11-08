import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { ViewProductProps, Variant } from "@/domain/definitionsTypes";
import {
  setVariants,
  setSelectedVariant,
  setQuantity,
} from "@/redux/features/selectedTargetSlice";

export const useProductView = (product: ViewProductProps["product"]) => {
  const dispatch = useDispatch();
  const { variants, selectedVariant, quantity } = useSelector(
    (state: RootState) => state.selectedTarget
  );
  const [availableSizes, setAvailableSizes] = useState<string[]>([]);
  const [availableColors, setAvailableColors] = useState<string[]>([]);

  const handleIncrease = () =>
    dispatch(setQuantity(Math.min(quantity + 1, selectedVariant?.stock || 1)));
  const handleDecrease = () => dispatch(setQuantity(Math.max(1, quantity - 1)));

  useEffect(() => {
    dispatch(setVariants(product.variants));
    dispatch(setSelectedVariant(product.variants[0]));
    updateAvailableOptions(product.variants);
  }, [product, dispatch]);

  const updateAvailableOptions = (currentVariants: Variant[]) => {
    const sizes = Array.from(new Set(currentVariants.map((v) => v.attr.Talle)));
    const colors = Array.from(
      new Set(currentVariants.map((v) => v.attr.Color))
    );
    setAvailableSizes(sizes);
    setAvailableColors(colors);
  };

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

  useEffect(() => {
    if (selectedVariant) {
      dispatch(setQuantity(1));
    }
  }, [selectedVariant, dispatch]);

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
  };
};
