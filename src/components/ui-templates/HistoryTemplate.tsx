"use client";

import React, { useState, useEffect } from "react";
import {
  DesignType,
  SheetContentPropsHorizontal,
} from "@/domain/definitionsTypes";
import ProductHistory from "./ProductHistory";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/use-media-query";
import { CountdownTimer } from "./CountDownTimer";
import { useProductSelectors } from "@/hooks/useSelectors";

// interface CarouselApi {
//   scrollTo: (index: number) => void;
//   on: (event: string, callback: () => void) => void;
//   selectedScrollSnap: () => number;
// }

export const HistoryTemplate: React.FC<SheetContentPropsHorizontal> = ({
  isOpen,
  setIsOpen,
  handleClose,
  recommendedProducts,
  titleText,
  template,
}) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const { amountOfTime, timerGlobal, hasShortageText, hasShortageGlobal } =
    useProductSelectors();

  const handleProgressClick = (index: number) => {
    api?.scrollTo(index);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className={`max-w-[1300px] ${isMobile ? "p-6" : "p-16"} bg-[#f9f8ff]`}
      >
        {isMobile && (
          <div className="fixed top-0 left-0 right-0 z-50 flex gap-1 p-2 bg-transparent">
            {recommendedProducts?.map((_, index) => (
              <div
                key={index}
                className="flex-1 h-1 bg-gray-200 rounded overflow-hidden cursor-pointer"
                onClick={() => handleProgressClick(index)}
              >
                <div
                  className={`h-full bg-white transition-all duration-300 ${
                    index <= currentIndex ? "w-full" : "w-0"
                  }`}
                />
              </div>
            ))}
          </div>
        )}

        <DialogHeader className={`relative ${isMobile ? "mt-8" : ""}`}>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-0 rounded-full"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
          <DialogTitle className="flex flex-col text-center text-xl font-semibold px-12 space-y-4">
            <div className="mb-2 flex justify-between">
              {titleText || "Recommended Products"}{" "}
              {template === DesignType.HISTORY && (
                <div className="flex items-center gap-3">
                  {" "}
                  {timerGlobal && amountOfTime !== 0 && (
                    <div className="h-[30px] px-3 py-1 border border-[var(--border-components)] justify-start items-center gap-2 inline-flex">
                      <CountdownTimer initialTime={amountOfTime} />
                    </div>
                  )}
                  {hasShortageGlobal && (
                    <div className="h-[30px] px-3 py-1 border border-[var(--border-components)] justify-start items-center gap-2 inline-flex">
                      <p className="text-xs text-[var(--border-components)] font-semibold uppercase tracking-wide">
                        {hasShortageText}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
            {template === DesignType.HISTORY && isMobile && (
              <div className="flex items-center gap-3">
                {" "}
                {timerGlobal && amountOfTime !== 0 && (
                  <div className="h-[30px] px-3 py-1 border border-[var(--border-components)] justify-start items-center gap-2 inline-flex">
                    <CountdownTimer initialTime={amountOfTime} />
                  </div>
                )}
                {hasShortageGlobal && (
                  <div className="h-[30px] px-3 py-1 border border-[var(--border-components)] justify-start items-center gap-2 inline-flex">
                    <p className="text-xs text-[var(--border-components)] font-semibold uppercase tracking-wide">
                      {hasShortageText}
                    </p>
                  </div>
                )}
              </div>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="relative mt-0">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
              dragFree: isMobile,
            }}
            className="w-full max-w-[1200px] mx-auto"
          >
            <CarouselContent className="-ml-4">
              {recommendedProducts?.map((product) => (
                <CarouselItem
                  key={product.id}
                  className={`px-0 ${isMobile ? "basis-full" : "basis-1/3"}`}
                >
                  <div
                    className={`${
                      isMobile ? "p-10" : "p-4 my-2"
                    } bg-white flex-col justify-center items-start gap-6 inline-flex rounded-lg shadow-sm`}
                  >
                    <ProductHistory
                      key={product.id}
                      product={product}
                      setIsOpen={setIsOpen}
                      onClose={handleClose}
                      template={template}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {!isMobile && (
              <>
                <div className="absolute -left-12 top-1/2 -translate-y-1/2">
                  <CarouselPrevious />
                </div>
                <div className="absolute -right-12 top-1/2 -translate-y-1/2">
                  <CarouselNext />
                </div>
              </>
            )}
          </Carousel>
        </div>

        {!isMobile && (
          <div className="flex justify-center items-center gap-[3.25px] mt-8">
            {recommendedProducts?.map((_, index) => (
              <div
                key={index}
                className={`w-[8.80px] h-[8.80px] rounded-full ${
                  index === currentIndex ? "bg-[#d1d1d1]" : "bg-[#f0f0f0]"
                } cursor-pointer`}
                onClick={() => handleProgressClick(index)}
              />
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default HistoryTemplate;
