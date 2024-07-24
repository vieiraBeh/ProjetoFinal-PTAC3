
export const metadata = {
  title: "Joias Vieira Stein",
  description: "Joias para todos os gostos e estilos!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
          {children}
      </body>
    </html>
  );
}
