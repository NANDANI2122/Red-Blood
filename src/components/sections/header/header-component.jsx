import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

// Fix image imports
import BlackLogo from "/Red Blood.png";
import WhiteLogo from "/Red Blood.png";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "Host Blood Drive", href: "/host-blood-drive" },
	{ name: "Donate Money", href: "https://donorbox.org/donate-money-11" },
	{ name: "Help Needed", href: "/contact" },
	{ name: "Need Blood", href: "/need-blood", secondLast: true },
	{ name: "Donate Blood", href: "/donate-blood", last: true },
];
// const logoUrl = "../public/Red Blood Logo black.png";
// const logoUrlWhite = "../public/Red Blood Logo White.png";
const companyName = "Red Blood";

const HeaderComponent = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activePage, setActivePage] = useState(null);

	const buttonClasses = {
		base: "text-sm font-medium px-3 py-2 rounded-md transition-all duration-200",
		default: "text-white hover:bg-red-600/10",
		secondLast: "border border-white/50 hover:bg-white hover:text-red-600",
		last: "bg-red-600 text-white hover:bg-red-700",
		active: "bg-red-600/20"
	};

	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 5);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
				${isScrolled 
					? "bg-black/80 backdrop-blur-md shadow-lg" 
					: "bg-transparent border-b border-white/20"}`}
		>
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link to="/" className="flex items-center">
						<span className="sr-only">{companyName}</span>
						<img 
							className="h-8 w-auto" 
							src={isScrolled ? WhiteLogo : WhiteLogo} 
							alt={companyName} 
						/>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex lg:gap-x-2">
						{navigation.map((item) => (
							<NavLink
								key={item.name}
								to={item.href}
								onClick={() => setActivePage(item.name)}
								className={({ isActive }) => `
									${buttonClasses.base}
									${item.secondLast ? buttonClasses.secondLast : ''}
									${item.last ? buttonClasses.last : buttonClasses.default}
									${isActive ? buttonClasses.active : ''}
								`}
							>
								{item.name}
							</NavLink>
						))}
					</div>

					{/* Mobile menu button */}
					<button
						type="button"
						className="lg:hidden p-2 rounded-md text-white hover:bg-red-600/10"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open menu</span>
						<Bars3Icon className="h-6 w-6" />
					</button>
				</div>
			</nav>

			{/* Mobile menu */}
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 shadow-xl">
					<div className="flex items-center justify-between">
						<Link to="/" className="-m-1.5 p-1.5">
							<span className="sr-only">{companyName}</span>
							<img className="h-8 w-auto" src={BlackLogo} alt={companyName} />
						</Link>
						<button
							type="button"
							className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="space-y-2">
							{navigation.map((item) => (
								<NavLink
									key={item.name}
									to={item.href}
									onClick={() => {
										setActivePage(item.name);
										setMobileMenuOpen(false);
									}}
									className={({ isActive }) => `
										block px-3 py-2 rounded-md text-base font-medium text-gray-900
										${item.last ? 'bg-red-600 text-white hover:bg-red-700' : 'hover:bg-gray-100'}
										${isActive ? 'bg-red-50 text-red-600' : ''}
									`}
								>
									{item.name}
								</NavLink>
							))}
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
};

export default HeaderComponent;
