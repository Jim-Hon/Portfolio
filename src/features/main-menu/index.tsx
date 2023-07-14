import { headers } from "next/dist/client/components/headers";

export function MainMenu() {
  return (
    <header className="w-full flex gap-2 mx-auto container">
      <div>Jim Hon's Portfolio</div>
      <div className="flex-grow">menu</div>
      <div>login/out</div>
    </header>
  )
}
