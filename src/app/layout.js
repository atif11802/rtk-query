import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "../redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "mew mew",
	description: "mew mew",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ReduxProvider> {children}</ReduxProvider>
			</body>
		</html>
	);
}
