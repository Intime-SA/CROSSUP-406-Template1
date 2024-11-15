import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { ViewProductProps, Variant } from "@/domain/definitionsTypes";
import {
  setVariants as setGlobalVariants,
  setSelectedVariant as setGlobalSelectedVariant,
  setQuantity as setGlobalQuantity,
} from "@/redux/features/selectedTargetSlice";

export const useProductView = (product: ViewProductProps["product"]) => {
  const dispatch = useDispatch();
  const globalState = useSelector((state: RootState) => state.selectedTarget);

  const [variants, setVariants] = useState<Variant[]>(product.variants);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [availableSizes, setAvailableSizes] = useState<string[]>([]);
  const [availableColors, setAvailableColors] = useState<string[]>([]);
  const [showMessage, setShowMessage] = useState(false);

  const handleIncrease = useCallback(() => {
    setQuantity((prev) =>
      Math.min(prev + 1, selectedVariant?.stock ?? Infinity)
    );
  }, [selectedVariant]);

  const handleDecrease = useCallback(() => {
    setQuantity((prev) => Math.max(1, prev - 1));
  }, []);

  const updateAvailableOptions = useCallback((currentVariants: Variant[]) => {
    const sizes = Array.from(new Set(currentVariants.map((v) => v.attr.Talle)));
    const colors = Array.from(
      new Set(currentVariants.map((v) => v.attr.Color))
    );
    setAvailableSizes(sizes);
    setAvailableColors(colors);
  }, []);

  const handleColorSelect = useCallback(
    (color: string) => {
      const newVariant =
        variants.find(
          (v) =>
            v.attr.Color === color &&
            v.attr.Talle === selectedVariant?.attr.Talle
        ) || variants.find((v) => v.attr.Color === color);
      if (newVariant) {
        setSelectedVariant(newVariant);
        const availableSizesForColor = variants
          .filter((v) => v.attr.Color === color && v.stock > 0)
          .map((v) => v.attr.Talle);
        setAvailableSizes(availableSizesForColor);
      }
    },
    [variants, selectedVariant]
  );

  const handleSizeSelect = useCallback(
    (size: string) => {
      const newVariant =
        variants.find(
          (v) =>
            v.attr.Talle === size &&
            v.attr.Color === selectedVariant?.attr.Color
        ) || variants.find((v) => v.attr.Talle === size);
      if (newVariant) {
        setSelectedVariant(newVariant);
        const availableColorsForSize = variants
          .filter((v) => v.attr.Talle === size && v.stock > 0)
          .map((v) => v.attr.Color);
        setAvailableColors(availableColorsForSize);
      }
    },
    [variants, selectedVariant]
  );

  useEffect(() => {
    setVariants(product.variants);
    updateAvailableOptions(product.variants);
    setSelectedVariant(null); // Initialize with no variant selected
  }, [product, updateAvailableOptions]);

  useEffect(() => {
    if (selectedVariant) {
      setQuantity(1);
    }
  }, [selectedVariant]);

  // Sync local state with global state when needed
  useEffect(() => {
    dispatch(setGlobalVariants(variants));
    // Only dispatch setGlobalSelectedVariant if selectedVariant is not null
    if (selectedVariant) {
      dispatch(setGlobalSelectedVariant(selectedVariant));
    }

    dispatch(setGlobalQuantity(quantity));
  }, [variants, selectedVariant, quantity, dispatch]);

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
    globalState,
  };
};
