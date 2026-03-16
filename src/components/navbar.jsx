// "use client"
// import logo from "../../public/assets/logo.png";
// import { User ,Search, Heart, ShoppingCart, Menu, X} from 'lucide-react';
// import { useState } from "react";


// export default function Navbar() {
// const [isMenuOpen, setisMenuOpen] = useState(false);
// return (
//     <nav className="flex items-center justify-between p-4 bg-white dark:bg-black max-w-7xl mx-auto">  
//         <div className="text-xl font-bold text-gray-800 dark:text-gray-200">
//          <img src="/assets/logo.png" alt="Logo" />
//         </div>
//         <ul className="hidden md:flex space-x-6">
//             <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#B88E2F] dark:hover:text-gray-200">Home</a></li>
//             <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#B88E2F] dark:hover:text-gray-200">Shop</a></li>
//             <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#B88E2F] dark:hover:text-gray-200">About</a></li>    
//             <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#B88E2F] dark:hover:text-gray-200">Contact</a></li>
//         </ul>
//           <ul className="hidden md:flex space-x-6">
//             <li className="hover:text-[#B88E2F] cursor-pointer "><User /></li>
//             <li className="hover:text-[#B88E2F] cursor-pointer "><Search /></li>
//             <li className="hover:text-[#B88E2F] cursor-pointer "><Heart /></li>
//             <li className="hover:text-[#B88E2F] cursor-pointer "><ShoppingCart /></li>
//           </ul>
//             <div className="md:hidden">
//                <button
//                 onClick={() => setisMenuOpen(!isMenuOpen)}
//                 className="relative w-6 h-6 transition-all duration-300"
//                 >
//                 <span
//                 className={`absolute inset-0 transition-all duration-300 ${
//                 isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
//                 }`}
//                 >
//                 <Menu />
//                 </span>

//                 <span
//                 className={`absolute inset-0 transition-all duration-300 ${
//                 isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
//                 }`}
//                 >
//                 <X />
//                 </span>
//                 </button>
//             </div>
            
//             {isMenuOpen && (
//                 <ul className="absolute top-16 left-0 w-full bg-white dark:bg-black flex flex-col items-center space-y-4 py-4 md:hidden">
//                     <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Home</a></li>
//                     <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Shop</a></li>
//                     <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">About</a></li>    
//                     <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Contact</a></li>
//                 </ul>
//             )}

//     </nav>
//   );
// }   

"use client";

import Link from "next/link";
import { User, Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "./CartProvider";
import { useWishlist } from "./WishlistProvider";

export default function Navbar() {

const [isMenuOpen, setIsMenuOpen] = useState(false);
const [activeDropdown, setActiveDropdown] = useState(null);
const { items, count } = useCart();
const { items: wishItems, count: wishCount } = useWishlist();

const toggleDropdown = (name) => {
  setActiveDropdown(activeDropdown === name ? null : name);
};

return (
<nav className="sticky top-0 z-50 backdrop-blur bg-white/90 border-b border-black/5">
  <div className="flex items-center justify-between p-4 max-w-7xl mx-auto relative">
 
 {/* Logo */}
<Link href="/" className="text-xl font-bold flex items-center gap-2">
  <img src="/assets/logo.png" alt="Funiro" className="h-8"/>
  <span className="hidden sm:block font-semibold tracking-wide text-[#1f2937]">Funiro</span>
</Link>

 {/* Desktop Menu */}
<ul className="hidden md:flex space-x-8 text-sm font-semibold text-[#1f2937]">
<li><Link href="/" className="hover:text-[#B88E2F]">Home</Link></li>
<li><Link href="/shop" className="hover:text-[#B88E2F]">Shop</Link></li>
<li><Link href="/about" className="hover:text-[#B88E2F]">About</Link></li>
<li><Link href="/contact" className="hover:text-[#B88E2F]">Contact</Link></li>
</ul>

{/* Icons */}
<ul className="flex space-x-6 relative">

<li className="cursor-pointer relative">
<button onClick={() => toggleDropdown("user")}>
<User className="hover:text-[#B88E2F] cursor-pointer" />
</button>

{activeDropdown === "user" && (
<div className="absolute right-0 top-10 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-3 animate-fadeIn">

<Link href="/account" className="block px-4 py-2 text-gray-700 hover:text-[#B88E2F] cursor-pointer transition duration-200">
  Login
</Link>

  <div className="border-t border-gray-100 my-1"></div>

<Link href="/register" className="block px-4 py-2 text-gray-700 hover:text-[#B88E2F] cursor-pointer transition duration-200">
  Register
</Link>

</div>
)}

</li>

<li className="hidden md:block cursor-pointer relative">
<button onClick={() => toggleDropdown("search")}>
<Search className="hover:text-[#B88E2F] cursor-pointer" />
</button>

{activeDropdown === "search" && (
<div className="absolute right-0 top-10 bg-white rounded-xl border border-gray-100 p-5 animate-fadeIn shadow-lg  rounded w-60">
<input
type="text"
placeholder="Search..."
className="border border-[#B88E2F] p-2 w-full"
/>
</div>
)}

</li>

<li className="cursor-pointer relative">
<button onClick={() => toggleDropdown("wishlist")}>
<Heart className="hover:text-[#B88E2F] cursor-pointer" />
{wishCount > 0 && (
  <span className="absolute -top-2 -right-2 bg-[#B88E2F] text-white text-[10px] font-semibold rounded-full h-5 w-5 flex items-center justify-center">
    {wishCount}
  </span>
)}
</button>

{activeDropdown === "wishlist" && (
<div className="absolute right-0 top-8 bg-white shadow-lg p-4 rounded-xl w-64">
{wishItems.length === 0 ? (
  <p>Your wishlist is empty</p>
) : (
  <div className="space-y-3">
    {wishItems.slice(0, 3).map((item) => (
      <div key={item.id} className="flex items-center gap-3">
        <img src={item.image} width="48" height="48" alt={item.name} className="rounded-lg object-cover" />
        <div className="flex-1">
          <p className="text-sm font-semibold">{item.name}</p>
          <p className="text-xs text-gray-500">${item.price.toFixed(2)}</p>
        </div>
      </div>
    ))}
    {wishItems.length > 3 && (
      <p className="text-xs text-gray-500">+{wishItems.length - 3} more items</p>
    )}
    <Link
      href="/wishlist"
      className="block text-center text-sm font-semibold text-[#B88E2F] hover:underline"
    >
      View wishlist
    </Link>
    <Link
      href="/compare"
      className="block text-center text-xs text-gray-500 hover:underline"
    >
      Compare list
    </Link>
  </div>
)}
</div>
)}

</li>

<li className="cursor-pointer relative ">
<button onClick={() => toggleDropdown("cart")}>
<ShoppingCart className="hover:text-[#B88E2F] cursor-pointer" />
{count > 0 && (
  <span className="absolute -top-2 -right-2 bg-[#B88E2F] text-white text-[10px] font-semibold rounded-full h-5 w-5 flex items-center justify-center">
    {count}
  </span>
)}
</button>

{activeDropdown === "cart" && (
    <div className="absolute right-0 w-72 top-10  bg-[#f4f5f7] rounded-xl shadow-xl border border-gray-100 p-4 animate-fadeIn">

{items.length === 0 ? (
  <p>Your cart is empty</p>
) : (
  <div className="space-y-4">
    {items.slice(0, 3).map((item) => (
      <div key={item.id} className="flex items-center gap-3">
        <img src={item.image} width="56" height="56" alt={item.name} className="rounded-lg object-cover" />
        <div className="flex-1">
          <p className="text-sm font-semibold">{item.name}</p>
          <p className="text-xs text-gray-500">
            {item.quantity} × ${item.price.toFixed(2)}
          </p>
        </div>
      </div>
    ))}
    {items.length > 3 && (
      <p className="text-xs text-gray-500">+{items.length - 3} more items</p>
    )}
  </div>
)}

<Link href="/cart" className="block bg-[#B88E2F] text-center w-full text-white py-2 px-4 rounded-lg hover:bg-[#9a7a26] mt-5 transition duration-200">
  View Cart
</Link>

</div>

)}

</li>

</ul>

{/* Mobile Menu Button */}
<div className="md:hidden">
<button
onClick={() => setIsMenuOpen(!isMenuOpen)}
className="relative w-6 h-6"
>
{isMenuOpen ? <X /> : <Menu />}
</button>
</div>

{/* Mobile Menu */}
{isMenuOpen && (
<ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 md:hidden shadow-lg">
<li><Link href="/" className="hover:text-[#B88E2F]">Home</Link></li>
<li><Link href="/shop" className="hover:text-[#B88E2F]">Shop</Link></li>
<li><Link href="/about" className="hover:text-[#B88E2F]">About</Link></li>
<li><Link href="/contact" className="hover:text-[#B88E2F]">Contact</Link></li>
</ul>
)}

</div>
</nav>
);
}
