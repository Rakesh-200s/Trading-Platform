import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  // Buy window state
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedBuyStockUID, setSelectedBuyStockUID] = useState("");

  // Sell window state
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedSellStockUID, setSelectedSellStockUID] = useState("");

  // Buy handlers
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedBuyStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedBuyStockUID("");
  };

  // Sell handlers
  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedSellStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedSellStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}

      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedBuyStockUID} />
      )}

      {isSellWindowOpen && (
        <SellActionWindow uid={selectedSellStockUID} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;