"use client";

import { useApp } from "../context/AppContext";

export default function UIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    isLoggedIn,
    cartItems,
    updateCartItemQuantity,
    isCartOpen,
    setIsCartOpen,
    isLoginOpen,
    setIsLoginOpen,
    isSignupOpen,
    setIsSignupOpen,
    isCheckoutOpen,
    setIsCheckoutOpen,
    isSidebarOpen,
    setIsSidebarOpen,
  } = useApp();

  const handleCheckout = () => {
    if (!isLoggedIn) {
      setIsCartOpen(false);
      setIsLoginOpen(true);
    } else {
      setIsCartOpen(false);
      setIsCheckoutOpen(true);
    }
  };

  return children;
}
